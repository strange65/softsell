import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const licenseTypes = [
    'Microsoft Office',
    'Adobe Creative Cloud',
    'AutoCAD',
    'Oracle Database',
    'SAP',
    'Other Enterprise Software'
  ];

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.company.trim()) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'Select a license type';
    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setErrors({});
    setForm({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    });
  }

  return (
    <section className="py-5 bg-primary bg-opacity-10" id="contact">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Get Your Free Valuation</h2>
        <div className="row justify-content-center">
          <div className="col-md-7">
            {submitted ? (
              <div className="alert alert-success text-center">
                <h4>Thank you!</h4>
                <p>We've received your information and will contact you soon.</p>
                <button className="btn btn-link" onClick={() => setSubmitted(false)}>Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4">
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className={`form-control${errors.name ? ' is-invalid' : ''}`} name="name" value={form.name} onChange={handleChange} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className={`form-control${errors.email ? ' is-invalid' : ''}`} name="email" value={form.email} onChange={handleChange} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Company Name *</label>
                  <input type="text" className={`form-control${errors.company ? ' is-invalid' : ''}`} name="company" value={form.company} onChange={handleChange} />
                  {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">License Type *</label>
                  <select className={`form-select${errors.licenseType ? ' is-invalid' : ''}`} name="licenseType" value={form.licenseType} onChange={handleChange}>
                    <option value="">Select License Type</option>
                    {licenseTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                  {errors.licenseType && <div className="invalid-feedback">{errors.licenseType}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Additional Details</label>
                  <textarea className="form-control" name="message" rows="3" value={form.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Get My Valuation</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
