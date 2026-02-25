import { ChevronRight, Lock, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagemTabela from "../../assets/imagens/Wenlock.svg";
import imagemLogo from "../../assets/imagens/WlLogo.svg";
import botao from "../../assets/imagens/botaoHome.svg";
import {
  SidebarWrapper,
  SidebarHeader,
  ImagemWenlock,
  ImagemWenlockMini,
  SidebarNav,
  MenuItem,
  MenuIcon,
  MenuText,
  MenuChevron,
  MenuGroup,
  Submenu,
  SubmenuItem,
  BotaoHome,
  SidebarFooter,
  FooterInfo,
  FooterMini,
} from "./style";

type Props = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
  const [activeMenu, setActiveMenu] = useState("home");
  const [controleAcessoOpen, setControleAcessoOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <SidebarHeader>
        {isOpen ? (
          <ImagemWenlock>
            <img src={imagemTabela} alt="WenLock" />
          </ImagemWenlock>
        ) : (
          <ImagemWenlockMini>
            <img src={imagemLogo} alt="WenLock" />
          </ImagemWenlockMini>
        )}
      </SidebarHeader>

      <SidebarNav>
        <MenuItem
          type="button"
          onClick={() => {
            setActiveMenu("home");
            navigate("/home");
          }}
          $isActive={activeMenu === "home"}
        >
          {isOpen && (
            <MenuText>
              <strong> Home </strong>
            </MenuText>
          )}
          <BotaoHome>
            <img src={botao} alt="Home" />
          </BotaoHome>
        </MenuItem>

        <MenuGroup>
          <MenuItem
            type="button"
            onClick={() => isOpen && setControleAcessoOpen(!controleAcessoOpen)}
            $isActive={activeMenu === "controle"}
          >
            <MenuIcon>
              <Lock size={20} />
            </MenuIcon>
            {isOpen && (
              <>
                <MenuText>Controle de Acesso</MenuText>
                <MenuChevron $isOpen={controleAcessoOpen}>
                  <ChevronRight size={16} />
                </MenuChevron>
              </>
            )}
          </MenuItem>

          {isOpen && controleAcessoOpen && (
            <Submenu>
              <SubmenuItem
                type="button"
                onClick={() => {
                  setActiveMenu("usuarios");
                  navigate("/user");
                }}
                $isActive={activeMenu === "usuarios"}
              >
                <Users size={16} />
                <span>Usuários</span>
              </SubmenuItem>
            </Submenu>
          )}
        </MenuGroup>
      </SidebarNav>

      <SidebarFooter>
        {isOpen ? (
          <FooterInfo>
            <p>© WenLock</p>
            <p>Powered by Connecthub</p>
            <p>v.0.8.0</p>
          </FooterInfo>
        ) : (
          <FooterMini>
            <p>©WL</p>
          </FooterMini>
        )}
      </SidebarFooter>
    </SidebarWrapper>
  );
}

export default Sidebar;
