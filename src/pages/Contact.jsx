export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <p className="text-center text-muted mx-auto mb-5" style={{ maxWidth: 700 }}>
        Have questions about your digital legacy? We’re here to help.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="glass-card p-4">
            <form>
              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>

              <button className="btn-gold w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
