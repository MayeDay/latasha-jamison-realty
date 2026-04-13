import './Navbar.css';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        LaTasha<span> Jamison</span>
      </div>
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#listings">Listings</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar__cta" onClick={() => scrollTo('contact')}>
        Get in Touch
      </button>
    </nav>
  );
}
