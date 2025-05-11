import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechGrowth Inc.",
      quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was seamless and their valuation was better than we expected.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      role: "IT Director, Innovate Solutions",
      quote: "After downsizing our department, we had dozens of unused licenses. SoftSell made it incredibly easy to convert those assets into cash flow for our business.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <section className="py-5" id="testimonials">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">What Our Customers Say</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, idx) => (
            <div className="col-md-5 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img src={t.image} alt={t.name} className="rounded-circle me-3" width="50" height="50" />
                    <div>
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                  <p className="fst-italic">"{t.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
