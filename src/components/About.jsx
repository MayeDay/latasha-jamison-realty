import { headshot } from '../assets/images';
import { agent } from '../data/agent';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__img-wrap">
        <img
          className="about__img"
          src={headshot}
          alt="LaTasha Jamison"
        />
        <div className="about__badge">
          <div className="about__badge-num">ORA</div>
          <div className="about__badge-txt">Certified Realtist</div>
        </div>
      </div>

      <div className="about__body">
        <span className="section-label">About LaTasha</span>
        <h2 className="section-title">
          A Realtor Who Puts <em>You</em> First
        </h2>
        {agent.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <div className="about__contact-grid">
          <div className="about__contact-row">
            <div className="about__contact-icon">📍</div>
            <span>
              {agent.address}, {agent.city}, {agent.state} {agent.zip}
            </span>
          </div>
          <div className="about__contact-row">
            <div className="about__contact-icon">📞</div>
            <a href={`tel:${agent.phone}`}>{agent.phoneDisplay}</a>
          </div>
          <div className="about__contact-row">
            <div className="about__contact-icon">✉️</div>
            <a href={`mailto:${agent.email}`}>{agent.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
