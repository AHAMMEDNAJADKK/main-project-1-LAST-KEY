export default function Security() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Security & Privacy</h1>

      <p className="text-muted text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
        Your data is protected using the highest security standards available
        today.
      </p>

      <ul className="list-group list-group-flush glass-card p-4">
        <li className="list-group-item bg-transparent">
          🔐 End-to-End Encryption
        </li>
        <li className="list-group-item bg-transparent">
          🧾 Legal Verification Before Release
        </li>
        <li className="list-group-item bg-transparent">
          👁 Zero-Knowledge Architecture
        </li>
        <li className="list-group-item bg-transparent">
          🔑 Role-Based Access Control
        </li>
      </ul>
    </div>
  );
}
