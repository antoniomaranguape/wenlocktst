import imagemHome from "../../assets/imagens/home.svg";
import {
  DashboardContainer,
  MainContent,
  ContentArea,
  TextHome,
  TextHomeTitle,
  WelcomeCard,
  Imagem,
  WelcomeMessage,
} from "./style";

function Home() {
  return (
    <DashboardContainer>
      <MainContent>
        <TextHome>
          <TextHomeTitle>Home</TextHomeTitle>
        </TextHome>
        <ContentArea>
          <WelcomeCard>
            <h2>Olá Millena!!</h2>
            <p><strong>22, Novembro 2025</strong></p>
            <Imagem>
              <img src={imagemHome} alt="Welcome illustration" />
            </Imagem>
            <WelcomeMessage>
              <h2>Bem-vindo ao WenLock!</h2>
            </WelcomeMessage>
          </WelcomeCard>
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
}

export default Home;
