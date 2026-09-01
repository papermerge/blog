import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const news = defineCollection({
  // Load Markdown / MDX files in `src/content/news/`, ignoring files
  // whose name starts with `_` (drafts / partials).
  loader: glob({ base: "./src/content/news", pattern: "**/[^_]*.{md,mdx}" }),
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

export const collections = { news };
