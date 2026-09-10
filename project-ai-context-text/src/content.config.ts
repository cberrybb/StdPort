import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		loader: glob({
			base: './src/content/work',
			pattern: '**/*.md',
		}),

		schema: z.object({
			title: z.string(),
			slug: z.string().optional(),
			category: z.string().optional(),
			year: z.coerce.number().optional(),

			description: z.string(),
			publishDate: z.coerce.date(),

			tags: z.array(z.string()).default([]),

			img: z.string().optional(),
			img_alt: z.string().optional(),

			cardImage: z.string().optional(),
			heroImage: z.string().optional(),

			// Homepage tile presentation. All are optional:
			// tileImage names an authored crop in this project's own folder.
			// Missing image/filter/text values fall back safely in index.astro.
			tileImage: z.string().optional(),
			tileFilter: z.string().optional(),
			tileL1: z.string().optional(),
			tileL2: z.string().optional(),

			gallery: z
				.record(
					z.string(),
					z.union([
						z.string(),
						z.object({
							title: z.string().default(''),
							tiles: z
								.record(
									z.string(),
									z.object({
										line1: z.string().optional(),
										line2: z.string().optional(),
									}),
								)
								.default({}),
						}),
					]),
				)
				.optional(),
		}),
	}),

	Perm: defineCollection({
		loader: glob({
			base: './src/content/Perm',
			pattern: '**/*.md',
		}),

		schema: z.object({
			title: z.string(),
			description: z.string(),
		}),
	}),
};
