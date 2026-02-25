import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./style.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../components/headline";
function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="app-root">
      <div className={`sideBarStyle ${!open ? "sidebar-closed" : ""}`}>
        <Sidebar isOpen={open} />
        <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
          {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
      <div className="main-with-header">
        <Header />
        <div className="content">
          <div className="outlet-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

