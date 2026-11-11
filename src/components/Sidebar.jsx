import "./Sidebar.css";

import { menuItems } from "../data/menu";
import "./Sidebar.css";

function Sidebar({ activeMenu, onMenuClick, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-brand">AdminPanel</div>

      <nav>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${
                  activeMenu === item.id ? "active" : ""
                }`}
                onClick={() => onMenuClick(item.id)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
