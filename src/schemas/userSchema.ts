import { z } from "zod";

export const userFormSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nome é obrigatório")
      .max(30, "Máximo 30 caracteres"),
    email: z
      .string()
      .min(1, "E-mail é obrigatório")
      .email("E-mail inválido")
      .max(40, "Máximo 40 caracteres"),
    matricula: z
      .string()
      .regex(/^\d*$/, "Apenas números")
      .optional()
      .or(z.literal("")),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().min(1, "Confirme a senha"),
  })
  .refine(
    (data) =>
      !data.password || !data.confirmPassword || data.password === data.confirmPassword,
    { message: "As senhas não coincidem", path: ["confirmPassword"] }
  );

export type UserFormData = z.infer<typeof userFormSchema>;
