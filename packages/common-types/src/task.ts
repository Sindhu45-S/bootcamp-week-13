import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  is_completed: z.boolean(),
  user_id: z.string()
});

export type Task = z.infer<typeof TaskSchema>;