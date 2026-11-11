import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { menuItems } from "./data/menu";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeTitle = menuItems.find((m) => m.id === activeMenu)?.label;

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    setSidebarOpen(false); // tutup drawer setelah pilih menu (mobile)
  };

  return (
    <div className="app">
      <Sidebar
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
        isOpen={sidebarOpen}
      />

      <div
        className={`overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="main">
        <Navbar
          title={activeTitle}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <main className="content">
          {activeMenu === "dashboard" ? (
            <Dashboard />
          ) : (
            <h1 className="page-title">{activeTitle}</h1>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
