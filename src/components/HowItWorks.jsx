import React from 'react';

function HowItWorks() {
  const steps = [
    {
      icon: "bi-upload",
      title: "Upload License",
      description: "Share your software license details through our secure portal."
    },
    {
      icon: "bi-currency-dollar",
      title: "Get Valuation",
      description: "Our algorithm calculates the best market value for your licenses."
    },
    {
      icon: "bi-credit-card",
      title: "Get Paid",
      description: "Receive payment directly to your account within 48 hours."
    }
  ];

  return (
    <section className="py-5" id="how-it-works">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">How It Works</h2>
        <div className="row">
          {steps.map((step, idx) => (
            <div className="col-md-4 text-center mb-4" key={idx}>
              <div className="mb-3">
                <i className={`bi ${step.icon} display-4 text-primary`}></i>
              </div>
              <h5 className="fw-bold">{step.title}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
