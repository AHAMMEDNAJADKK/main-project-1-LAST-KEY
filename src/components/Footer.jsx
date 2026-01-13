export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">

          <div className="col-md-4">
            <h4 className="gold">LastKey</h4>
            <p className="text-muted mt-3">
              LastKey helps you protect your digital life and ensures
              your important information reaches the right people,
              at the right time.
            </p>
          </div>

          <div className="col-md-4">
            <h6>Platform</h6>
            <ul className="list-unstyled">
              <li>Digital Will Creation</li>
              <li>Nominee Assignment</li>
              <li>Secure Document Vault</li>
              <li>Legal Verification</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>Security & Trust</h6>
            <ul className="list-unstyled">
              <li>End-to-End Encryption</li>
              <li>Zero Knowledge Storage</li>
              <li>Multi-layer Verification</li>
              <li>GDPR Compliant</li>
            </ul>
          </div>

        </div>

        <hr className="my-4" />

        <div className="text-center text-muted">
          © {new Date().getFullYear()} LastKey — Your Digital Legacy Secured
        </div>
      </div>
    </footer>
  );
}
