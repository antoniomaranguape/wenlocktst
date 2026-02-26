import { LogOut, ChevronUp } from "lucide-react";
import {
  HeaderContainer,
  UserProfile,
  UserAvatar,
  UserAvatarChevron,
  UserDropdown,
  UserInfo,
  UserName,
  UserEmail,
  LogoutButton,
} from "./style";

//dados mocados
const user = {
  name: "Antonio Maranguape",
  email: "antonio.maranguape@email.com",
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
    <HeaderContainer>
      <UserProfile>
        <UserAvatar>
          <span>{getInitials(user.name)}</span>
          <UserAvatarChevron>
            <ChevronUp size={10} color="white" strokeWidth={2.5} />
          </UserAvatarChevron>
        </UserAvatar>
        <UserDropdown>
          <UserInfo>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserInfo>
          <LogoutButton onClick={handleLogout}>
            <LogOut size={16} />
            <span>Sair</span>
          </LogoutButton>
        </UserDropdown>
      </UserProfile>
    </HeaderContainer>
  );
}

export default Header;


