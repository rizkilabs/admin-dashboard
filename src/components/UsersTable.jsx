import "./UsersTable.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function UsersTable({ users }) {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Data Pengguna</h3>
        <span className="table-count">{users.length} pengguna</span>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Tanggal Daftar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="cell-name">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`badge badge-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{formatDate(user.joinedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
