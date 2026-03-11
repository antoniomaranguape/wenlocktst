import type React from "react";
import { useState } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import {
  Logout,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  HeaderContainer,
  AvatarContainer,
  ArrowIndicator,
  LogoutText,
} from "./style";

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
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/login", { replace: true });
  };

  return (
    <HeaderContainer>
      <AvatarContainer>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            padding: 0,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <Avatar
            alt={user.name}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#032221",
              fontSize: "14px",
              border: "2px solid #00606D",
            }}
          >
            {getInitials(user.name)}
          </Avatar>
        </IconButton>
        <ArrowIndicator $open={open}>
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </ArrowIndicator>
      </AvatarContainer>

      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
            mt: 1.5,
            width: 280,
            borderRadius: "8px",
            "& .MuiAvatar-root": {
              width: 40,
              height: 40,
            },
          },
        }}
      >
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Avatar
              alt={user.name}
              sx={{
                width: 48,
                height: 48,
                bgcolor: "#032221",
                fontSize: "18px",
                mr: 2,
              }}
            >
              {getInitials(user.name)}
            </Avatar>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#0290a4" }}
              >
                {user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#0B2B25" }}>
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        <MenuItem
          onClick={handleLogout}
          sx={{
            mx: 2,
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: "rgba(2, 144, 164, 0.18)",
            },
          }}
        >
          <Logout fontSize="small" sx={{ mr: 1 }} />
          <LogoutText>Sair</LogoutText>
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
