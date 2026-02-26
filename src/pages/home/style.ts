import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
  box-sizing: border-box;
`;

export const ContentArea = styled.div`
  padding: 32px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;

export const TextHome = styled.div`
  margin: 0 0 32px;
`;

export const TextHomeTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0b2b25;
`;

export const WelcomeCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 24px 32px 32px;
  margin: 0;
  width: 100%;
  box-sizing: border-box;

  & > h2 {
    font-size: 1.25rem;
    color: #0b2b25;
    margin: 0;
  }

  & > p {
    margin: 4px 0 0;
    font-size: 0.875rem;
    color: #666;
  }
`;

export const Imagem = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px;
  margin: 24px auto 32px;
  max-width: 600px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 70%;
    height: auto;
    display: block;
  }
`;

export const WelcomeMessage = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 24px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #0b2b25;
    margin: 0;
  }
`;
