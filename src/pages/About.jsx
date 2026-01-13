export default function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About LastKey</h1>

      <p className="text-center text-muted mx-auto" style={{ maxWidth: 800 }}>
        LastKey was created to solve one of the most overlooked problems
        in the digital age — what happens to your digital life when
        you’re no longer around.
      </p>

      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <div className="glass-card p-4">
            <h4>Our Mission</h4>
            <p>
              Our mission is to give people full control over their
              digital legacy by providing a secure, legally guided,
              and trusted platform for digital inheritance.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="glass-card p-4">
            <h4>Why LastKey?</h4>
            <p>
              Unlike traditional password managers or storage platforms,
              LastKey is designed specifically for post-life data release,
              nominee verification, and legal safety.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-4 mt-4">
        <h4>Built for Trust</h4>
        <p>
          We use modern encryption standards, strict access controls,
          and verification workflows to ensure your information
          remains private until the exact moment it is meant to be shared.
        </p>
      </div>
    </div>
  );
}
