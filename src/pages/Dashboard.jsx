import StatCard from "../components/StatCard";
import UsersTable from "../components/UsersTable";
import { stats } from "../data/stats";
import { users } from "../data/users";
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

      <UsersTable users={users} />
    </section>
  );
}

export default Dashboard;
