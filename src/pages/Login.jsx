import { useState } from "react";

export default function Login() {
  const [showReset, setShowReset] = useState(false);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="glass-card p-4">
            <h2 className="text-center mb-4">Login to LastKey</h2>

            <form>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="d-flex justify-content-between">
                <small
                  className="text-warning"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowReset(true)}
                >
                  Forgot Password?
                </small>
              </div>

              <button className="btn-gold w-100 mt-3">Login</button>
            </form>
          </div>
        </div>
      </div>

      {/* 🔐 RESET PASSWORD MODAL */}
      {showReset && (
        <div className="modal-backdrop-custom">
          <div className="modal-box">
            <h4>Reset Password</h4>
            <p className="text-muted">
              Enter your email to receive password reset instructions.
            </p>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your email"
            />

            <div className="d-flex gap-2">
              <button className="btn btn-warning w-100">
                Send Reset Link
              </button>
              <button
                className="btn btn-secondary w-100"
                onClick={() => setShowReset(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
