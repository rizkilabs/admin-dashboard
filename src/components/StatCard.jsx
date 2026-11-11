import "./StatCard.css";

function formatValue(value, type) {
  if (type === "currency") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  }
  return new Intl.NumberFormat("id-ID").format(value);
}

function StatCard({ label, value, change, icon, type }) {
  const isUp = change >= 0;

  return (
    <div className="stat-card">
      <div className="stat-info">
        <p className="stat-label">{label}</p>
        <h3 className="stat-value">{formatValue(value, type)}</h3>
        <p className={`stat-change ${isUp ? "up" : "down"}`}>
          {isUp ? "▲" : "▼"} {Math.abs(change)}% dari bulan lalu
        </p>
      </div>
      <div className="stat-icon">{icon}</div>
    </div>
  );
}

export default StatCard;
