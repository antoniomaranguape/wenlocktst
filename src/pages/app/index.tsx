import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../components/headline";
import {
  GlobalStyles,
  AppRoot,
  SideBarStyle,
  MainWithHeader,
  Content,
  SidebarToggle,
  OutletContainer,
} from "./style";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <AppRoot>
      <GlobalStyles />
      <SideBarStyle $isClosed={!open}>
        <Sidebar isOpen={open} />
        <SidebarToggle onClick={() => setOpen(!open)}>
          {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </SidebarToggle>
      </SideBarStyle>
      <MainWithHeader>
        <Header />
        <Content>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </Content>
      </MainWithHeader>
    </AppRoot>
  );
}
export default App;

