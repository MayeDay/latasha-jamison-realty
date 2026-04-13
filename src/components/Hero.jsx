import { agent } from '../data/agent';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <p className="hero__eyebrow">{agent.region}</p>
        <h1 className="hero__title">
          Your Home.<br />
          <em>Your Story.</em><br />
          My Mission.
        </h1>
        <p className="hero__subtitle">
          With deep roots in the Greater Cleveland community and a passion for
          connecting families to their dream homes, LaTasha Jamison delivers
          the personal touch that makes all the difference.
        </p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={() => scrollTo('listings')}>
            View Listings
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            Work With Me
          </button>
        </div>
      </div>

      <div className="hero__stats">
        {agent.stats.map((s) => (
          <div className="hero__stat" key={s.label}>
            <div className="hero__stat-num">{s.num}</div>
            <div className="hero__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
