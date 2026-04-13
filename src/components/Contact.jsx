import { useState, useEffect } from 'react';
import { agent } from '../data/agent';
import './Contact.css';

const SERVICES = [
  { value: 'buy',    label: 'Buying a Home' },
  { value: 'sell',   label: 'Selling My Home' },
  { value: 'invest', label: 'Investment Property' },
  { value: 'rent',   label: 'Rental Property' },
];

const CONTACT_ITEMS = [
  { icon: '📞', label: 'Phone / Text', value: agent.phoneDisplay, href: `tel:${agent.phone}` },
  { icon: '✉️', label: 'Email',        value: agent.email,        href: `mailto:${agent.email}` },
  { icon: '📍', label: 'Office',       value: `${agent.address}, ${agent.city}, ${agent.state} ${agent.zip}`, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  // Auto-dismiss success message after 6 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Warn if API URL not configured
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      console.warn(
        '⚠️ VITE_API_URL not configured. Add VITE_API_URL=http://localhost:4000 to .env.local for form submission to work.'
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return true; // Phone is optional
    const re = /^[\d\-\+\(\)\s]{8,}$/; // At least 8 digits/formatting characters
    return re.test(phone);
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!form.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!form.email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    
    // Validate email format
    if (!validateEmail(form.email.trim())) {
      setError('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    // Validate phone format if provided
    if (form.phone.trim() && !validatePhone(form.phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }

    // Validate message has content
    if (!form.message.trim()) {
      setError('Please tell us a bit about what you\'re looking for.');
      return;
    }

    setError('');
    setLoading(true);

    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      setError('API configuration error. Please try calling or texting directly.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/leads`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Something went wrong. Please try calling or texting instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      {/* ── Info column ── */}
      <div className="contact__info">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">
          Let's Find Your <em>Perfect Home</em>
        </h2>
        <p className="contact__intro">
          Ready to buy, sell, or invest? I'd love to hear from you. Reach out
          directly or fill out the form — text is fastest!
        </p>

        {CONTACT_ITEMS.map((item) => (
          <div className="contact__item" key={item.label}>
            <span className="contact__item-icon">{item.icon}</span>
            <div className="contact__item-text">
              <strong>{item.label}</strong>
              {item.href ? (
                <a href={item.href}>{item.value}</a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          </div>
        ))}

        <div className="contact__tip">
          💬 <strong>Pro Tip:</strong> For a faster response, send a text to{' '}
          <strong>{agent.phoneDisplay}</strong>
        </div>
      </div>

      {/* ── Form column ── */}
      <div className="contact__form-col">
        <span className="section-label">Send a Message</span>

        <div className="contact__form">
          <div>
            <label className="contact__label">
              Your Full Name <span className="contact__required">*</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="contact__label">
              Email Address <span className="contact__required">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="contact__label">Phone Number (optional)</label>
            <input
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="contact__label">I'm interested in…</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">-- Select an option (optional) --</option>
              {SERVICES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="contact__label">
              What are you looking for? <span className="contact__required">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell me about what you're looking for…"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {error && <p className="contact__error">{error}</p>}

          <button className="btn-primary contact__submit" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Sending…' : 'Send Message'}
          </button>

          {submitted && (
            <div className="contact__success">
              ✅ Message sent! LaTasha will be in touch soon.
              <p className="contact__success-note">(closing in 6 seconds)</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
