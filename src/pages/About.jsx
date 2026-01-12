export default function About() {
  return (
    <div className="container py-5 text-center">
      <h1>About LastKey</h1>

      <p className="text-muted mt-4 mx-auto" style={{ maxWidth: 800 }}>
        LastKey is built to solve a modern problem — managing digital life after
        death. Our mission is to help families avoid confusion, loss, and
        uncertainty.
      </p>

      <img
        src="/images/trust.jpg"
        alt="Trust and digital legacy"
        className="w-75 mt-4 rounded"
      />

      <p className="mt-4 text-muted">
        Built with care, security, and respect for your legacy.
      </p>
    </div>
  );
}

