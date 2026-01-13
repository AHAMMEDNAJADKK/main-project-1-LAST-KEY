export default function Register() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="glass-card p-4">
            <h2 className="text-center mb-4">Create Your Account</h2>

            <form>
              <div className="mb-3">
                <label>Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Confirm Password</label>
                <input type="password" className="form-control" />
              </div>

              <button className="btn-gold w-100 mt-3">
                Register Securely
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
