import './style.css';
import imagemHome from "../../assets/imagens/home.svg";


function Home() {


  return (
    <div className="dashboard-container">
      

      <div className="main-content">
        
          <div className='textHome'>
              <h1>Home</h1>
             
            </div>

        <div className="content-area">
          <div className="welcome-card">
             <h2>Olá Millena!!</h2>
              <p><strong>22, Novembro 2025</strong></p>
            <div className="imagem">
              <img src={imagemHome} alt="Welcome illustration" />
            </div>
            <div className="welcome-message">
              <h2>Bem-vindo ao WenLock!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
