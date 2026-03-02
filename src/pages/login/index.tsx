import type React from "react";
import { Key, User, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WenlockLogo from "../../assets/imagens/Wenlock.svg";
import { useAuth } from "../../contexts/AuthContext";
import {
  AnimationContainer,
  CardLogin,
  DarkOverlay,
  Form,
  InitialBackground,
  Logo,
  Tittle,
  InputWrapper,
  ButtonLoginStyled,
} from "./styles";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validateLogin, setValidateLogin] = useState(false);
  const [overlayFaded, setOverlayFaded] = useState(false);
  const [logoAnimationStarted, setLogoAnimationStarted] = useState(false);
  const [formAnimationStarted, setFormAnimationStarted] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, login: authLogin } = useAuth();

  const isFormValid = Boolean(userName && userPassword);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  function handleChangeUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleChangeUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserPassword(event.target.value);
    setValidateLogin(false);
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
    setValidateLogin(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setValidateLogin(true);
    event.preventDefault();

    try {
      await authLogin(userName, userPassword);
      navigate("/home");
    } catch {
      setValidateLogin(false);
    }
  }

  useEffect(() => {
    const overlayTimer = setTimeout(() => {
      setOverlayFaded(true);

      const logoTimer = setTimeout(() => {
        setLogoAnimationStarted(true);

        const formTimer = setTimeout(() => {
          setFormAnimationStarted(true);
        }, 1);

        return () => clearTimeout(formTimer);
      }, 1000);

      return () => clearTimeout(logoTimer);
    }, 1500);

    return () => clearTimeout(overlayTimer);
  }, []);

  return (
    <InitialBackground>
      <DarkOverlay faded={overlayFaded} />
      <AnimationContainer
        logoAnimationStarted={logoAnimationStarted}
        formAnimationStarted={formAnimationStarted}
      >
        <Logo animationStarted={logoAnimationStarted}>
          <img src={WenlockLogo} alt="Wenlock" />
        </Logo>

        <CardLogin animationStarted={formAnimationStarted}>
          <Tittle>
            <h1>Bem-vindo!</h1>
            <h2>Entre com sua conta</h2>
          </Tittle>

          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="identifier">E-Mail *</label>
              <div className="input-box">
                <User size={20} />
                <input
                  id="identifier"
                  type="email"
                  placeholder="E-mail*"
                  value={userName}
                  onChange={handleChangeUserName}
                  autoComplete="email"
                />
              </div>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Senha *</label>
              <div className="input-box">
                <Key size={20} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha*"
                  value={userPassword}
                  onChange={handleChangeUserPassword}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={handleClickShowPassword}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </InputWrapper>
            <ButtonLoginStyled
              type="submit"
              disabled={!isFormValid || validateLogin}
            >
              {validateLogin ? "Entrando…" : "Entrar"}
            </ButtonLoginStyled>
          </Form>
        </CardLogin>
      </AnimationContainer>
    </InitialBackground>
  );
};
