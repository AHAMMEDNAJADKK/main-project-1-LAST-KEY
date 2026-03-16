import { useNavigate } from "react-router-dom";

export default function UploadDeathCertificate() {
  const navigate = useNavigate();

  const handleUpload = () => {
    // FRONTEND-ONLY SIMULATION
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "nominee");
    localStorage.setItem("deathVerified", "pending");

    navigate("/nominee/pending");
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <h3>Upload Death Certificate</h3>

      <p className="text-secondary">
        Please upload a valid government-issued death certificate.
        Our team will verify it before granting access.
      </p>

      <input
        type="file"
        className="form-control mb-3"
        accept=".pdf,.jpg,.png"
        required
      />

      <button
        className="btn btn-warning"
        onClick={handleUpload}
      >
        Submit for Verification
      </button>
    </div>
  );
}
