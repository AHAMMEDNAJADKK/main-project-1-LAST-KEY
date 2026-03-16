import { Navigate } from "react-router-dom";

export default function NomineeAccess() {
  const verified = localStorage.getItem("deathVerified");

  if (verified !== "true") {
    return <Navigate to="/nominee/login" />;
  }

  return (
    <div className="container mt-5 pt-5 text-light">
      <h2>Authorized Access</h2>
      <p className="text-secondary">
        You are now authorized to view documents.
      </p>

      <div className="card bg-dark p-3 mt-4">
        <h5>Will Document</h5>
        <button className="btn btn-warning mt-2">Download</button>
      </div>
    </div>
  );
}
