export default function Login() {
    return (
         <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="glass-card p-4">
            <h2 className="text-center mb-4">Login to LastKey</h2>
            <form>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label >Password</label>
                    <input type="password" className="form-control" required />

                </div>
                <button className="btn-gold w-100 mt-3"> Login</button>
            </form>
            <p className="text-center mt-3 text-muted"> 
                Don't have an account? <a href="/register">Register</a>
            </p>
            </div>
        </div>
      </div>
    </div>
    );
}