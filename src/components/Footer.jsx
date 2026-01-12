export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>LastKey</h5>
            <p className="text-muted">
              Your digital legacy, protected and delivered with trust.
            </p>
          </div>

          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>Legal</h6>
            <p className="text-muted">
              © {new Date().getFullYear()} LastKey  
              <br /> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
