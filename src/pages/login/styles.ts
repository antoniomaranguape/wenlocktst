import styled from 'styled-components';

export const InitialBackground = styled.div`
  display: flex;
  gap: 15vh;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(135deg, #0e1820 0%, #1a2a35 50%, #0e1820 100%);
  background-size: cover;
  overflow-y: auto;
  position: relative;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const DarkOverlay = styled.div<{ faded: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0e1820;
  z-index: 100;
  opacity: ${(props) => (props.faded ? 0 : 1)};
  visibility: ${(props) => (props.faded ? 'hidden' : 'visible')};
  transition:
    opacity 2s cubic-bezier(0.19, 1, 0.22, 1),
    visibility 0s ${(props) => (props.faded ? '2s' : '0s')};
  pointer-events: ${(props) => (props.faded ? 'none' : 'auto')};
`;

export const AnimationContainer = styled.div<{
  logoAnimationStarted: boolean;
  formAnimationStarted: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  transition: all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  ${(props) =>
    props.logoAnimationStarted &&
    `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  `}

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Tittle = styled.div`
  & > h1 {
    font-size: 5em;
    color: #0290A4;
    font-family: sans-serif;
    font-weight: bold;
    text-align: left;
    margin-bottom: 25px;
  }

  & > h2 {
    font-size: 1.5rem;
    color: #000d26;
    font-family: sans-serif;
    text-align: left;
  }
`;

export const Logo = styled.div<{ animationStarted: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.animationStarted ? '10%' : '50%')};
  transform: ${(props) =>
    props.animationStarted ? 'translateY(-50%)' : 'translate(-50%, -50%)'};
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  text-align: center;
  z-index: 10;

  max-width: clamp(320px, 38vw, 680px);
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
    max-height: clamp(90px, 12vw, 168px);
    object-fit: contain;
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    max-width: none;
    width: auto;

    & > img {
      height: 90px;
      width: auto;
      object-fit: contain;
    }

    margin-bottom: 50px;
  }
`;

export const CardLogin = styled.div<{ animationStarted: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 35%;
  z-index: 5;
  padding: 3.5vw;
  padding-bottom: 10vw;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #fff;

  position: absolute;
  top: ${(props) => (props.animationStarted ? '50%' : '150%')};
  right: clamp(3%, 5vw, 6%);
  transform: translateY(-50%);
  transition:
    top 2s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 2s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: ${(props) => (props.animationStarted ? 1 : 0)};

  & > img {
    height: 5vh;
  }

  @media screen and (max-width: 1280px) {
    width: 40%;
  }

  @media screen and (max-width: 767px) {
    position: relative;
    top: auto;
    right: auto;
    transform: ${(props) =>
      props.animationStarted ? 'translateY(0)' : 'translateY(100vh)'};
    transition:
      transform 2s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 2s cubic-bezier(0.19, 1, 0.22, 1);
    width: 80%;
    padding: 4vw;
    gap: 3rem;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  width: 100%;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    justify-content: flex-start;

    button {
      height: 3rem;
    }
  }

  @media screen and (max-width: 767px) {
    gap: 4vh;

    &.MuiTextField-root {
      margin: 50px;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  label {
    display: block;
    font-size: clamp(0.75rem, 0.4rem + 1vh, 1.2rem);
    color: #000d26;
    margin-bottom: 6px;
    font-family: sans-serif;
  }

  .input-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 14px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    background: #fff;
    transition: border-color 0.2s;

    &:focus-within {
      border-color: #0290A4;
      border-width: 2px;
      outline: none;
    }

    svg {
      flex-shrink: 0;
      margin-right: 12px;
      color: #666;
    }

    input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 1rem;
      font-family: sans-serif;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }

      &:focus {
        outline: none;
      }
    }

    button[type='button'] {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;

      &:hover {
        color: #000;
      }
    }
  }
`;

export const ButtonLoginStyled = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  width: 100%;
  height: 5.5vh;
  min-height: 48px;
  color: #fff;
  background-color: #0290A4;
  border: none;
  border-radius: 4px;
  font-size: clamp(0.8rem, 0.2rem + 1.45vh, 1.25rem);
  font-family: sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #027a8a;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.26);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
`;
