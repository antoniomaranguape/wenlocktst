import { ChevronRight, Lock, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagemTabela from "../../assets/imagens/Wenlock.svg";
import imagemLogo from "../../assets/imagens/WlLogo.svg";
import botao from "../../assets/imagens/botaoHome.svg";
import "./style.css";

type Props = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
  // if (isOpen) false;

  // const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("home");
  const [controleAcessoOpen, setControleAcessoOpen] = useState(false);
  const navigate = useNavigate();
  // const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {isOpen ? (
          <div className="imagemWenlock">
            <img src={imagemTabela} alt="illustration" />
          </div>
        ) : (
          <div className="imagemWenlockMini">
            <img src={imagemLogo} alt="wenlockLogo" />
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <button
          onClick={() => setActiveMenu("home")}
          className={`menu-item ${
            activeMenu === "home" ? "menu-item-active" : ""
          }`}
        >
          {isOpen && (
            <span className="menu-text">
              <strong> Home </strong>
            </span>
          )}
          <div className="botaoHome">
            <img src={botao} alt="homeButton" />
          </div>
        </button>

        <div className="menu-group">
          <button
            onClick={() => isOpen && setControleAcessoOpen(!controleAcessoOpen)}
            className={`menu-item ${
              activeMenu === "controle" ? "menu-item-active" : ""
            }`}
          >
            <Lock size={20} className="menu-icon" />
            {isOpen && (
              <>
                <span className="menu-text">Controle de Acesso</span>
                <ChevronRight
                  size={16}
                  className={`menu-chevron ${
                    controleAcessoOpen ? "menu-chevron-open" : ""
                  }`}
                />
              </>
            )}
          </button>

          {isOpen && controleAcessoOpen && (
            <div className="submenu">
              <button
                onClick={() => {
                  setActiveMenu("usuarios");
                  navigate("/user");
                }}
                className={`submenu-item ${
                  activeMenu === "usuarios" ? "submenu-item-active" : ""
                }`}
              >
                <Users size={16} />
                <span>Usuários</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="sidebar-footer">
        {isOpen ? (
          <div className="footer-info">
            <p>© WenLock</p>
            <p>Powered by Connecthub</p>
            <p>v.0.8.0</p>
          </div>
        ) : (
          <div className="footer-mini">
            <p>©WL</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
