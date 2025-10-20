import { LogOut } from "lucide-react";
import "./style.css";

//Dados mocados
const user = {
  name: "Lorena Novaes",
  email: "lorenadoantonio@email.com",
};

const getInitials = (name: string) => {
  const names = name.split(" ");
  const firstNameInitial = names[0] ? names[0][0] : "";
  const lastNameInitial = names.length > 1 ? names[names.length - 1][0] : "";
  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};

function Header() {
  const handleLogout = () => {
    alert("Funcionalidade de logout a ser implementada!");
  };

  return (
    <header className="header-container">
      <div className="user-profile">
        {}
        <div className="user-avatar">
          <span>{getInitials(user.name)}</span>
        </div>
        {}
        <div className="user-dropdown">
          <div className="user-info">
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={16} />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
