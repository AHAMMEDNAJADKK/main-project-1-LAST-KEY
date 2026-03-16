import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="page-container">
      <h2>Your Digital Vault</h2>
      <p>Manage documents and nominees securely</p>

      <div className="action-grid">
        <Link to="/user/add-data" className="action-card">
          Add Documents
        </Link>

        <Link to="/user/select-nominee" className="action-card">
          Add Nominee
        </Link>

        <Link to="/user/view-data" className="action-card">
          View Stored Data
        </Link>
      </div>
    </div>
  );
}
