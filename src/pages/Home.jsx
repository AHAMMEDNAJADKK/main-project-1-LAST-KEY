export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero-bg text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <h1>Your Digital <span className="gold">Legacy</span></h1>
          <p className="mt-3 mx-auto" style={{ maxWidth: 650 }}>
            Protect your digital life. Secure your documents, messages, assets,
            and memories — released only to the right people, at the right time.
          </p>
          <button className="btn-gold mt-4">Get Started Securely</button>
        </div>
      </section>

      {/* WHY */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Why Digital Legacy Matters</h2>
        <p className="text-muted text-center mx-auto" style={{ maxWidth: 800 }}>
          In today’s digital world, your most valuable assets exist online.
          Without a plan, your loved ones may never access critical information.
          LastKey ensures your legacy lives on with clarity and control.
        </p>
      </section>

      {/* STORAGE TYPES */}
      <section className="bg-dark py-5">
        <div className="container">
          <h2 className="text-center mb-5">What You Can Secure</h2>
          <div className="row g-4">
            {[
              "Government IDs",
              "Bank & Crypto Details",
              "Private Messages",
              "Business Credentials",
              "Photos & Videos",
              "Final Wishes"
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="glass-card p-4 text-center">
                  <h5>{item}</h5>
                  <p className="text-muted mt-2">
                    Encrypted, protected, and released only after verification.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-5 text-center">
        <h2>Secure Tomorrow, Today</h2>
        <p className="text-muted mt-3">
          Take control of your digital afterlife with confidence.
        </p>
        <button className="btn-gold mt-3">Create Your Digital Will</button>
      </section>
    </>
  );
}
