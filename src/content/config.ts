import { defineCollection, z } from "astro:content";

const courses = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    }),
});

export const collections = { courses };
