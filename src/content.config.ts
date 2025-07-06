import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const atom = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/atom' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    source: z.string().optional(),
    image: z.string().optional(),
    dimensions: z.array(z.number().or(z.string())),
    tags: z.array(z.string()),
    dateAdded: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
  })
});

export const collections = { atom };