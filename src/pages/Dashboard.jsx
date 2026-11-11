import StatCard from "../components/StatCard";
import { stats } from "../data/stats";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section>
      <h1 className="page-title">Ringkasan</h1>

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;