import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />

      <div className="main">
        <header className="navbar">Navbar</header>
        <main className="content">
          <h1>{activeMenu}</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
