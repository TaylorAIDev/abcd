import { z } from "zod";

const baseMixin = z.object({
  title: z.string(),
  description: z.string(),
});
const sectionSchema = baseMixin.extend({
  title: z.string(),
  description: z.string(),
  content: z.string(),
});
const challengesSchema = baseMixin.extend({
  challenge: z.string(),
  answer: z.string(),
});
export const docsSchema = baseMixin.extend({
  url: z.string(),
});
const lessonSchema = baseMixin.extend({
  sections: z.array(sectionSchema),
  challenges: z.array(challengesSchema),
  docs: z.array(docsSchema),
});
export type Section = z.infer<typeof sectionSchema>;
export type Lesson = z.infer<typeof lessonSchema>;
