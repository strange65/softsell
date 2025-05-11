import React from 'react';

function Hero() {
  return (
    <section className="py-5 mt-5 bg-light" id="hero">
      <div className="container mx-auto text-centre">
        <div className="row align-items-center">
          <div className="col-md-6 text-centre text-md-start">
            <h1 className="display-4 fw-bold">Turn Unused Software Licenses Into Cash</h1>
            <p className="lead">SoftSell helps businesses recover value from unused software licenses through our secure, transparent marketplace.</p>
            <a href="#contact" className="btn btn-primary btn-lg">Sell My Licenses</a>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Software" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
