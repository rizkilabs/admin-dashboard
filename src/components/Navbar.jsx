import "./Navbar.css";

function Navbar({ title, onToggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          className="navbar-toggle"
          onClick={onToggleSidebar}
          aria-label="Buka menu"
        >
          ☰
        </button>
        <h2 className="navbar-title">{title}</h2>
      </div>

      <div className="navbar-right">
        <input
          type="search"
          className="navbar-search"
          placeholder="Cari..."
          aria-label="Cari"
        />
        <div className="navbar-profile">
          <span className="navbar-avatar">A</span>
          <span className="navbar-name">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
