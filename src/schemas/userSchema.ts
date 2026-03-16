import { z } from "zod";

const baseFields = {
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
    .min(1, "Matrícula é obrigatória")
    .regex(/^\d+$/, "Apenas números"),
};

/** Create: senha e confirmPassword obrigatórios */
export const userFormSchemaCreate = z
  .object({
    ...baseFields,
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().min(1, "Confirme a senha"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    { message: "As senhas não coincidem", path: ["confirmPassword"] }
  );

/** Edit: senha e confirmPassword opcionais; se preenchidos, devem coincidir e ter min 6 */
export const userFormSchemaEdit = z
  .object({
    ...baseFields,
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      const p = data.password ?? "";
      const c = data.confirmPassword ?? "";
      if (p === "" && c === "") return true;
      return p.length >= 6 && p === c;
    },
    { message: "As senhas não coincidem (mín. 6 caracteres)", path: ["confirmPassword"] }
  );

export type UserFormData = z.infer<typeof userFormSchemaCreate>;
export type UserFormDataEdit = z.infer<typeof userFormSchemaEdit>;
