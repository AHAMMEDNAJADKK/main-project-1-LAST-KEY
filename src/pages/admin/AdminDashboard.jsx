import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Fake nominee request (frontend demo)
  const nomineeRequest = {
    nomineeName: "Rahul Kumar",
    userName: "Ahamed Najad",
    document: "death_certificate.pdf"
  };

  const approveAccess = () => {
    alert("Access Approved");
    navigate("/nominee/access");
  };

  const rejectAccess = () => {
    alert("Access Rejected");
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-warning mb-4">Admin Verification Panel</h2>

      <div className="card bg-dark text-light p-4">
        <h5>Nominee Name: {nomineeRequest.nomineeName}</h5>
        <p>User: {nomineeRequest.userName}</p>

        <p>
          Death Certificate:
          <span className="text-info ms-2">
            {nomineeRequest.document}
          </span>
        </p>

        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={approveAccess}>
            Approve
          </button>

          <button className="btn btn-danger" onClick={rejectAccess}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
