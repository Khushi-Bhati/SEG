import { useState } from 'react';
import { Link } from 'react-router-dom';
import campusBg from '../assets/images/institutions-bg.png';
import contactImg from '../assets/images/contact-support.png';
import '../contact-us.css';

const faqs = [
  { q: 'How long does it take to get a response?', a: 'We typically respond within 24 hours on business days.' },
  { q: 'Do you provide scholarship assistance?', a: 'Yes, SEG offers various scholarship programs based on merit and need.' },
  { q: 'How can I apply for admission?', a: 'You can apply online through our admissions portal or visit our campus directly.' },
  { q: 'How can I track my application?', a: 'Log in to the admissions portal with your registered email to track your application status.' },
  { q: 'Can I visit the campus before admission?', a: 'Absolutely! We welcome campus visits. Book a campus visit through our website or call admissions.' },
  { q: 'Who can I contact for admission support?', a: 'Call 09555699988 or email admission.cell@seglko.org for any admission-related queries.' },
];

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', inquiry: '', message: '' });

  const handleSubmit = (e) => { e.preventDefault(); alert('Message sent!'); };

  return (
    <div className="cu-page">

      {/* ── Hero ── */}
      <section className="cu-hero">
        <div className="cu-hero__left">
          <h1 className="cu-hero__title">Let's Connect<br />With <span>SEG</span></h1>
          <p className="cu-hero__sub">Have questions or need guidance? Our team is here to help you every step of the way.</p>
          <div className="cu-hero__actions">
            <a href="tel:09555699988" className="cu-btn cu-btn--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
              Call Admissions
            </a>
            <a href="#contact-form" className="cu-btn cu-btn--outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Campus Visit
            </a>
          </div>
          <p className="cu-hero__secure">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3L19 6V11C19 15.2 16.3 18.9 12 21C7.7 18.9 5 15.2 5 11V6L12 3Z"/></svg>
            Your information is secure and confidential.
          </p>
        </div>

        <div className="cu-hero__center">
          <img src={contactImg} alt="Contact Support" />
        </div>

        <div className="cu-hero__right">
          {[
            { icon: '🎧', title: '24/7 Support', desc: "We're here to help you anytime" },
            { icon: '🎓', title: 'Admissions Help', desc: 'Get guidance for courses & process' },
            { icon: '📍', title: 'Campus Assistance', desc: 'Visit, explore & connect with us' },
          ].map((f) => (
            <div className="cu-feature" key={f.title}>
              <span className="cu-feature__icon">{f.icon}</span>
              <div>
                <div className="cu-feature__title">{f.title}</div>
                <div className="cu-feature__desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Contact Bar ── */}
      <div className="cu-bar">
        {[
          { icon: '📞', label: 'Call Us', detail: '09555699988, 09810054878', href: 'tel:09555699988', color: '#2563eb' },
          { icon: '✉️', label: 'Email Support', detail: 'admission.cell@seglko.org', href: 'mailto:admission.cell@seglko.org', color: '#2563eb' },
          { icon: '📍', label: 'Visit Campus', detail: 'L-5, Lajpat Nagar-II, Delhi, 110024', href: '#map', color: '#f59e0b' },
          { icon: '💬', label: 'WhatsApp Us', detail: '+91 95556 99988', href: 'https://wa.me/919555699988', color: '#22c55e' },
        ].map((c) => (
          <a className="cu-bar__item" href={c.href} key={c.label}>
            <span className="cu-bar__icon" style={{ background: c.color }}>{c.icon}</span>
            <div className="cu-bar__info">
              <div className="cu-bar__label">{c.label}</div>
              <div className="cu-bar__detail">{c.detail}</div>
            </div>
            <span className="cu-bar__arrow">›</span>
          </a>
        ))}
      </div>

      {/* ── Form + Campus ── */}
      <section className="cu-main" id="contact-form">
        {/* Form */}
        <div className="cu-form-card">
          <h2>Send Us a Message</h2>
          <div className="cu-form-card__line"></div>
          <form onSubmit={handleSubmit} className="cu-form">
            <div className="cu-form__row">
              <div className="cu-input">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                <input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="cu-input">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
                <input placeholder="Your Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="cu-form__row">
              <div className="cu-input">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
                <input placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="cu-input">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9L12 4L21 9L12 14L3 9Z"/><path d="M7 11.5V16C7 17.7 9.3 19 12 19C14.7 19 17 17.7 17 16V11.5"/></svg>
                <select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                  <option value="">Course Interest</option>
                  <option>B.Tech</option><option>M.Tech</option><option>MBA</option>
                  <option>BCA</option><option>MCA</option><option>B.Pharm</option>
                </select>
              </div>
            </div>
            <div className="cu-input cu-input--full">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              <select value={form.inquiry} onChange={e => setForm({ ...form, inquiry: e.target.value })}>
                <option value="">Inquiry Type</option>
                <option>Admissions</option><option>Fees</option><option>Scholarships</option><option>Campus Visit</option><option>Other</option>
              </select>
            </div>
            <div className="cu-input cu-input--full cu-input--textarea">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <textarea placeholder="How can we help you?" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" className="cu-submit">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            <p className="cu-form__privacy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              We respect your privacy. Your data is safe with us.
            </p>
          </form>
        </div>

        {/* Campus Info */}
        <div className="cu-campus">
          <div className="cu-campus__img-wrap">
            <img src={campusBg} alt="Our Campus" />
            <div className="cu-campus__img-label">Our Campus</div>
          </div>
          <div className="cu-campus__info">
            <div className="cu-campus__office">
              <span className="cu-campus__office-icon">🏢</span>
              <div>
                <div className="cu-campus__office-title">Delhi Head Office</div>
                <div className="cu-campus__office-addr">L-5, First Floor, Lajpat Nagar - II,<br />Delhi, Delhi, India, 110024</div>
              </div>
            </div>
            <div className="cu-campus__details">
              <div className="cu-campus__detail">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                <div>
                  <div className="cu-campus__detail-label">Working Hours</div>
                  <div className="cu-campus__detail-val">Mon - Sat : 9:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="cu-campus__detail">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
                <div>
                  <div className="cu-campus__detail-label">Admission Helpline</div>
                  <div className="cu-campus__detail-val">1800-180-7686</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cu-map" id="map">
            <a href="https://maps.google.com/?q=Saroj+Educational+Group+Lajpat+Nagar+Delhi" target="_blank" rel="noreferrer" className="cu-map__open">Open in Maps ↗</a>
            <iframe
              title="SEG Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0!2d77.2369!3d28.5620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f7b5b21ab%3A0x47ff44bbf5ceac1b!2sSaroj%20Educational%20Group!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cu-faq">
        <h2 className="cu-faq__title">Frequently Asked Questions</h2>
        <div className="cu-faq__line"></div>
        <div className="cu-faq__grid">
          {faqs.map((f, i) => (
            <div className={`cu-faq__item${openFaq === i ? ' cu-faq__item--open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="cu-faq__q">
                <span className="cu-faq__q-icon">💬</span>
                <span>{f.q}</span>
                <span className="cu-faq__chevron">{openFaq === i ? '▲' : '▼'}</span>
              </div>
              {openFaq === i && <div className="cu-faq__a">{f.a}</div>}
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="cu-trust">
          {[
            { icon: '⚡', title: 'Fast Response', desc: 'We respond to all queries within 24 hours.', color: '#eef4ff' },
            { icon: '🛡️', title: 'Expert Guidance', desc: 'Get advice from admission experts.', color: '#f0fdf4' },
            { icon: '🔒', title: 'Secure Communication', desc: 'Your information is safe and confidential.', color: '#fff7ed' },
            { icon: '🏛️', title: 'Multiple Campuses', desc: 'Choose from our wide range of colleges across locations.', color: '#faf5ff' },
          ].map((t) => (
            <div className="cu-trust__item" key={t.title} style={{ background: t.color }}>
              <span className="cu-trust__icon">{t.icon}</span>
              <div>
                <div className="cu-trust__title">{t.title}</div>
                <div className="cu-trust__desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cu-cta">
          <div className="cu-cta__left">
            <span className="cu-cta__avatar">🎧</span>
            <div>
              <div className="cu-cta__heading">Need Immediate Help?</div>
              <div className="cu-cta__sub">Talk to our admission counselor now.</div>
            </div>
          </div>
          <div className="cu-cta__btns">
            <a href="tel:09555699988" className="cu-btn cu-btn--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
              Call Now
            </a>
            <button className="cu-btn cu-btn--outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Chat with Counselor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
