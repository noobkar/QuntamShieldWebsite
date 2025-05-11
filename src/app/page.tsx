
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Secure Your Digital Presence with Quantum-Grade Protection</h1>
              <p>QuantumShield VPN employs advanced encryption technology to keep your online activities private, secure, and anonymous. Browse with confidence on any network.</p>
              <a href="#pricing" className="btn btn-primary">Start Free Trial</a>
              <div className="stats">
                <div className="stat-item">
                  <h3>256-bit</h3>
                  <p>Military-grade encryption</p>
                </div>
                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Server locations globally</p>
                </div>
                <div className="stat-item">
                  <h3>Zero</h3>
                  <p>Logs policy</p>
                </div>
              </div>
            </div>
            <div className="hero-img">
              {/* You can replace this with a Next.js <Image> if you add a real image */}
              <img src="/api/placeholder/400/320" alt="VPN Security Illustration" />
            </div>
          </div>
        </div>
      </section>
      {/* Features, Pricing, FAQ, etc. sections can be added here as additional React components or sections */}
    </main>
  );
}
