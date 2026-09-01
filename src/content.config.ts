import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown / MDX files in `src/content/blog/`, ignoring files
  // whose name starts with `_` (drafts / partials).
  loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
