import { useState, useEffect } from 'react';
import { listings as fallback } from '../data/agent';
import './Listings.css';

function ListingCard({ item }) {
  const displayAddress = item.city
    ? `${item.address}, ${item.city}, ${item.state} ${item.zip}`
    : item.address;

  return (
    <div className="listing-card">
      <div className="listing-card__placeholder">{item.emoji || '🏡'}</div>
      <div className="listing-card__info">
        <span
          className="listing-card__tag"
          data-style={item.status === 'sold' ? 'sold' : 'default'}
        >
          {item.tag}
        </span>
        <div className="listing-card__price">{item.price}</div>
        <div className="listing-card__addr">{displayAddress}</div>
        <div className="listing-card__meta">
          <span>🛏 {item.beds} bd</span>
          <span>🚿 {item.baths} ba</span>
          <span>📐 {item.sqft} sqft</span>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: 'sale', label: 'For Sale' },
  { id: 'sold', label: 'Recently Sold' },
  { id: 'rent', label: 'Rentals' },
];

export default function Listings() {
  const [activeTab, setActiveTab] = useState('sale');
  const [data, setData]           = useState(fallback);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // Warn if API URL not configured
    if (!apiUrl) {
      console.warn(
        '⚠️ VITE_API_URL not configured. Showing cached listings. Add VITE_API_URL=http://localhost:4000 to .env.local to fetch live data.'
      );
      setLoading(false);
      return;
    }

    // Fetch listings from API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    fetch(`${apiUrl}/api/listings`, { signal: controller.signal })
      .then((r) => {
        clearTimeout(timeoutId);
        if (!r.ok) throw new Error(`Server error: ${r.status}`);
        return r.json();
      })
      .then((grouped) => {
        setData(grouped);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        console.error('Failed to load listings:', err);
        
        if (err.name === 'AbortError') {
          setError('Listing service timed out. Showing cached data.');
        } else {
          setError('Unable to load live listings. Showing cached data.');
        }
        setLoading(false);
      });

    return () => clearTimeout(timeoutId);
  }, []);

  const items = data[activeTab] ?? [];

  return (
    <section className="listings" id="listings">
      <div className="listings__inner">
        <span className="section-label">Properties</span>
        <h2 className="section-title">Featured Listings</h2>

        <div className="listings__tab-nav">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`listings__tab${activeTab === t.id ? ' listings__tab--active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {error && (
          <div className="listings__error">
            <p>⚠️ {error}</p>
          </div>
        )}

        {loading ? (
          <div className="listings__loading">
            <div className="listings__spinner" />
            <p>Loading listings…</p>
          </div>
        ) : items.length > 0 ? (
          <div className="listings__grid">
            {items.map((item) => (
              <ListingCard key={item.id ?? item.address} item={item} />
            ))}
          </div>
        ) : (
          <div className="listings__empty">
            {activeTab === 'rent' ? (
              <><p>🔑 Rental listings coming soon!</p><p>Contact LaTasha directly for rental availability.</p></>
            ) : (
              <p>No listings in this category right now. Check back soon!</p>
            )}
          </div>
        )}

        <div className="listings__cta">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Request a Showing
          </button>
        </div>
      </div>
    </section>
  );
}
