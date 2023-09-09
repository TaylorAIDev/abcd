import { z } from "zod";

const sectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
});

const lessonSchema = z.object({
  title: z.string(),
  description: z.string(),
  sections: z.array(sectionSchema),
});

export type Section = z.infer<typeof sectionSchema>;
export type Lesson = z.infer<typeof lessonSchema>;
