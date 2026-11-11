import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { menuItems } from "./data/menu";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const activeTitle = menuItems.find((m) => m.id === activeMenu)?.label;

  return (
    <div className="app">
      <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />

      <div className="main">
        <Navbar title={activeTitle} onToggleSidebar={() => {}} />
        <main className="content">
          <h1>{activeTitle}</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
