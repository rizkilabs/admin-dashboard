import "./Sidebar.css";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "users", label: "Pengguna", icon: "👥" },
  { id: "transactions", label: "Transaksi", icon: "💳" },
  { id: "reports", label: "Laporan", icon: "📊" },
  { id: "settings", label: "Pengaturan", icon: "⚙️" },
];

function Sidebar({ activeMenu, onMenuClick }) {
  return (
    <aside className="sidebar">
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
