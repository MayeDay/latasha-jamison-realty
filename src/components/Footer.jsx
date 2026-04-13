import { ehoLogo } from '../assets/images';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        LaTasha <span>Jamison</span>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} LaTasha Jamison Real Estate · All rights reserved
      </p>
      <div className="footer__eho">
        <img src={ehoLogo} alt="Equal Housing Opportunity" />
        Equal Housing Opportunity
      </div>
    </footer>
  );
}
