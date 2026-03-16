import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ConfirmationModal from "../ConfirmationModal";
import { userFormSchema, type UserFormData } from "../../schemas/userSchema";
import { ArrowBack } from "../../assets/icons/ArrowBack";
import {
  UserFormContainer,
  Breadcrumb,
  PageHeader,
  PageTitle,
  FormPaper,
  FormSection,
  SectionHeader,
  SectionTitle,
  SectionLine,
  FormRow,
  FormField,
  FormActions,
  CancelButton,
  SaveButton,
} from "./styles";

export interface UserFormProps {
  defaultValues?: Partial<UserFormData>;
  isLoading?: boolean;
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
  title: string;
  submitButtonText: string;
  backHref?: string;
}

const UserForm = ({
  defaultValues,
  isLoading = false,
  onSubmit,
  onCancel,
  title,
  submitButtonText,
  backHref = "/user",
}: UserFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      matricula: "",
      password: "",
      confirmPassword: "",
      ...defaultValues,
    },
  });

  const handleCancel = () => {
    if (isDirty) {
      setIsCancelModalOpen(true);
    } else {
      onCancel();
    }
  };

  const confirmCancel = () => {
    setIsCancelModalOpen(false);
    onCancel();
  };

  return (
    <UserFormContainer>
      <Breadcrumb>
        <Link to={backHref}>Usuários</Link>
        <span className="breadcrumb-separator">&gt;</span>
        <span>{title}</span>
      </Breadcrumb>

      <PageHeader>
        <Link to={backHref}>
          <IconButton aria-label="Voltar">
            <ArrowBack />
          </IconButton>
        </Link>
        <PageTitle variant="h4">
          {title}
        </PageTitle>
      </PageHeader>

      <FormPaper elevation={0}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSection>
            <SectionHeader>
              <SectionTitle variant="subtitle1">Dados do Usuário</SectionTitle>
              <SectionLine />
            </SectionHeader>

            <FormRow>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <FormField>
                    <TextField
                      {...field}
                      label="Nome Completo"
                      placeholder="Insira o nome completo*"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      InputProps={{}}
                    />
                    <div className="char-limit">• Máx. 30 Caracteres</div>
                  </FormField>
                )}
              />

              <Controller
                name="matricula"
                control={control}
                render={({ field }) => (
                  <FormField>
                    <TextField
                      {...field}
                      label="Matrícula"
                      placeholder="Insira o Nº da matrícula"
                      variant="outlined"
                      fullWidth
                      error={!!errors.matricula}
                      helperText={errors.matricula?.message}
                      InputProps={{}}
                    />
                    <div className="char-limit">• Apenas números</div>
                  </FormField>
                )}
              />
            </FormRow>

            <FormRow>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <FormField>
                    <TextField
                      {...field}
                      label="E-mail"
                      placeholder="Insira o E-mail*"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                    <div className="char-limit">• Máx. 40 Caracteres</div>
                  </FormField>
                )}
              />
              <FormField />
            </FormRow>
          </FormSection>

          <FormSection>
            <SectionHeader>
              <SectionTitle variant="subtitle1">Dados de acesso</SectionTitle>
              <SectionLine />
            </SectionHeader>

            <FormRow>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormField>
                    <TextField
                      {...field}
                      label="Senha"
                      placeholder="Senha"
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <div className="char-limit">• Min. 6 Caracteres</div>
                  </FormField>
                )}
              />

              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <FormField>
                    <TextField
                      {...field}
                      label="Repetir Senha"
                      placeholder="Repetir Senha"
                      type={showConfirmPassword ? "text" : "password"}
                      variant="outlined"
                      fullWidth
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle confirm password visibility"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormField>
                )}
              />
            </FormRow>
          </FormSection>

          <FormActions>
            <CancelButton variant="outlined" onClick={handleCancel}>
              Cancelar
            </CancelButton>
            <SaveButton
              type="submit"
              variant="contained"
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                submitButtonText
              )}
            </SaveButton>
          </FormActions>
        </form>
      </FormPaper>

      <ConfirmationModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={confirmCancel}
        title="Deseja cancelar?"
        message="Os dados inseridos não serão salvos"
        confirmText="Sim"
        cancelText="Não"
      />
    </UserFormContainer>
  );
};

export default UserForm;
