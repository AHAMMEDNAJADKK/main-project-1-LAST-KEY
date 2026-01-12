export default function HowItWorks() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">How It Works</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="glass-card p-4">
            <h4>1. Secure Upload</h4>
            <p>
              Upload documents, media, credentials, and sensitive information.
              Everything is encrypted and stored safely.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="glass-card p-4">
            <h4>2. Assign Nominees</h4>
            <p>
              Choose trusted individuals who will receive access after
              verification. You control what they see.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="glass-card p-4">
            <h4>3. Verified Release</h4>
            <p>
              Access is granted only after legal and multi-step verification to
              prevent misuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
