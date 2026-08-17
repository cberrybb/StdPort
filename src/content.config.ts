import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
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
			outcomes: z.array(z.string()).default([]),
			development: z.array(z.string()).default([]),
			process: z.array(z.string()).default([]),
		}),
	}),
};
