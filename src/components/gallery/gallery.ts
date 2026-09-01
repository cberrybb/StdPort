/**
 * Gallery content model and asset discovery.
 *
 * This module is the boring centre of the portfolio gallery system.
 * It knows how project files become gallery data, but it knows nothing
 * about how a gallery looks on screen.
 *
 * CMS CONTRACT
 * ------------
 * Filesystem = asset relationships and order
 *   A1.png   base image 1 in gallery A
 *   A1T.png  optional square/tile version of A1
 *   A2.png   base image 2 in gallery A
 *
 * Frontmatter = information that cannot be inferred from filenames
 *   gallery.A.title
 *   gallery.A.tiles.1.line1
 *   gallery.A.tiles.1.line2
 *
 * Markdown = composition
 *   [gallery:A]
 *   [gallery:A,B]
 *   [gallery:A /tile]
 *   [gallery:A /tile /p]
 *
 * IMPORTANT
 * ---------
 * Tile metadata uses DISPLAY POSITION after sorting, not the numeric
 * filename suffix. If A1.png and A3.png exist, they are positions 1 and 2.
 *
 * Presentation belongs in StandardGallery.astro / TileGallery.astro.
 * Marker placement belongs in ProjectExplorer.astro.
 */

import type { CollectionEntry } from 'astro:content';

export interface GalleryItem {
	url: string;
	tileUrl?: string;
	order: number;
	position: number;
	line1: string;
	line2: string;
}

export interface GalleryGroup {
	key: string;
	label: string;
	items: GalleryItem[];
}

const allProjectImages = import.meta.glob(
	[
		'/src/content/work/**/*.png',
		'/src/content/work/**/*.jpg',
		'/src/content/work/**/*.jpeg',
		'/src/content/work/**/*.webp',
		'/src/content/work/**/*.gif',
		'/src/content/work/**/*.avif',
	],
	{
		eager: true,
		query: '?url',
		import: 'default',
	},
) as Record<string, string>;

const escapeRegExp = (value: string) =>
	value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Resolve one project's frontmatter + neighbouring image files into
 * deterministic gallery groups.
 *
 * Only base images create gallery items. A T image without its matching
 * base image is deliberately ignored.
 */
export function buildGalleryGroups(
	project: CollectionEntry<'work'>,
): GalleryGroup[] {
	const sourceFile = project.filePath?.replace(/\\/g, '/');
	const projectDir = sourceFile?.slice(0, sourceFile.lastIndexOf('/')) ?? '';
	const folderPrefix = projectDir ? `/${projectDir}/` : '';
	const galleryDefinition = project.data.gallery ?? {};

	return Object.entries(galleryDefinition).map(([key, definition]) => {
		const label =
			typeof definition === 'string'
				? definition
				: definition.title ?? '';

		const tileMetadata =
			typeof definition === 'string'
				? {}
				: definition.tiles ?? {};

		const filePattern = new RegExp(
			`^${escapeRegExp(key)}(\\d+)(T?)\\.(png|jpe?g|webp|gif|avif)$`,
			'i',
		);

		const discovered = Object.entries(allProjectImages)
			.map(([path, url]) => {
				if (!folderPrefix || !path.startsWith(folderPrefix)) return null;

				const fileName = path.slice(folderPrefix.length);
				if (fileName.includes('/')) return null;

				const match = fileName.match(filePattern);
				if (!match) return null;

				return {
					url,
					order: Number(match[1]),
					isTile: match[2].toLowerCase() === 't',
				};
			})
			.filter(
				(item): item is {
					url: string;
					order: number;
					isTile: boolean;
				} => item !== null,
			);

		const byOrder = new Map<number, { url?: string; tileUrl?: string }>();

		discovered.forEach((item) => {
			const current = byOrder.get(item.order) ?? {};

			if (item.isTile) current.tileUrl = item.url;
			else current.url = item.url;

			byOrder.set(item.order, current);
		});

		const items = Array.from(byOrder.entries())
			.filter(([, item]) => Boolean(item.url))
			.sort(([a], [b]) => a - b)
			.map(([order, item], displayIndex) => {
				const position = displayIndex + 1;
				const metadata = tileMetadata[String(position)] ?? {};

				return {
					url: item.url as string,
					tileUrl: item.tileUrl,
					order,
					position,
					line1: metadata.line1 ?? '',
					line2: metadata.line2 ?? '',
				};
			});

		return { key, label, items };
	});
}
