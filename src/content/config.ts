import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string(),
    links: z.array(z.object({
        name: z.string(),
        link: z.string(),
    })),
    image: z.string().optional(),
  }),
});

export const collections = {
  'post': postsCollection,
};