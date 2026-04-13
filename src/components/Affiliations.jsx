import { ehoLogo, oraLogo } from '../assets/images';
import './Affiliations.css';

const logos = [
  { src: ehoLogo,  alt: 'Equal Housing Opportunity',  label: 'Equal Housing Opportunity' },
  { src: oraLogo,  alt: 'Ohio Realtist Association',   label: 'Ohio Realtist Association'  },
];

export default function Affiliations() {
  return (
    <div className="affiliations">
      <p className="affiliations__label">Affiliations &amp; Memberships</p>
      <div className="affiliations__logos">
        {logos.map((l) => (
          <div className="affiliations__badge" key={l.label}>
            <img src={l.src} alt={l.alt} />
            <span>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
