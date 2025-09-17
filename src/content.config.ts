import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string(),
    links: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })),
    image: z.string().optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};