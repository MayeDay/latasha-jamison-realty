import './index.css';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Services     from './components/Services';
import Testimonial  from './components/Testimonial';
import Listings     from './components/Listings';
import Affiliations from './components/Affiliations';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Listings />
        <Affiliations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
