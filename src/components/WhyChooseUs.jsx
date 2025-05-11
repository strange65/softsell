import React from 'react';

function WhyChooseUs() {
  const benefits = [
    {
      icon: "bi-shield-lock",
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing for every license sale."
    },
    {
      icon: "bi-lightning-charge",
      title: "Fast Turnaround",
      description: "Get your valuation within hours and payment within 48 hours of sale."
    },
    {
      icon: "bi-gem",
      title: "Premium Valuations",
      description: "Our market analysis ensures you get top dollar for your unused licenses."
    },
    {
      icon: "bi-headset",
      title: "Expert Support",
      description: "Dedicated account managers guide you through every step of the process."
    }
  ];

  return (
    <section className="py-5" id="why-choose-us">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <div className="row">
          {benefits.map((benefit, idx) => (
            <div className="col-md-3 col-sm-6 col-12" key={idx}>
              <div className="text-center mb-4">
                <i className={`bi ${benefit.icon} text-primary display-4 mb-3`}></i>
                <h5 className="mb-3">{benefit.title}</h5>
                <p className="text-muted">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
