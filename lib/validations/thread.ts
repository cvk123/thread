import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().nonempty().min(10, {message: "minimum 10 characters"}),
    accountId: z.string(),
})

export const CommentValidation = z.object({
    thread: z.string().nonempty().min(3, {message: "minimum 10 characters"}),
})