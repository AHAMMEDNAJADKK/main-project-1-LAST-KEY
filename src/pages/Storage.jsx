export default function Storage() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">What You Can Store</h1>

      <p className="text-center text-muted mx-auto mb-5" style={{ maxWidth: 800 }}>
        Store everything that matters — securely encrypted and structured for
        easy release when required.
      </p>

      <div className="row g-4">
        {[
          "Aadhaar, Passport, PAN",
          "Bank Accounts & Crypto Wallets",
          "Social Media Credentials",
          "Personal Photos & Videos",
          "Confidential Business Data",
          "Personal Letters & Messages"
        ].map((item, i) => (
          <div className="col-md-6" key={i}>
            <div className="glass-card p-4">
              <h5>{item}</h5>
              <p className="text-muted mt-2">
                Stored with military-grade encryption and zero-knowledge access.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
