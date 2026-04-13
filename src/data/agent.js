export const agent = {
  name: 'LaTasha Jamison',
  tagline: 'Your Home. Your Story. My Mission.',
  email: 'Tashasoldit@gmail.com',
  phone: '216-210-6663',
  phoneDisplay: '216-210-6663',
  address: '17419 Broadway Avenue',
  city: 'Maple Heights',
  state: 'Ohio',
  zip: '44137',
  region: 'Cleveland Metro & Greater Ohio',
  stats: [
    { num: '10+', label: 'Years Experience' },
    { num: 'ORA', label: 'Member Realtist' },
    { num: '100%', label: 'Client Dedication' },
  ],
  about: [
    'LaTasha Jamison is a dedicated real estate professional serving the Greater Cleveland area and beyond. A proud member of the Ohio Realtist Association, she brings expertise, integrity, and heartfelt commitment to every transaction.',
    "Whether you're buying your first home, selling a beloved property, or exploring investment opportunities, LaTasha's local knowledge and personalized approach ensure you're never just another client — you're family.",
  ],
};

export const services = [
  {
    num: '01',
    title: 'Home Buying',
    body: 'From your first showing to closing day, I guide buyers through every step — negotiating hard to get you the best price on your dream home.',
  },
  {
    num: '02',
    title: 'Home Selling',
    body: 'Strategic pricing, professional marketing, and proven negotiation skills to sell your home fast and for top dollar. Tasha sold it!',
  },
  {
    num: '03',
    title: 'Investment Properties',
    body: 'Looking to grow your portfolio? I help investors identify high-value opportunities across the Greater Cleveland market.',
  },
];

export const listings = {
  sale: [
    { emoji: '🏡', price: '$189,900', address: 'Maple Heights, OH 44137', beds: 3, baths: 2, sqft: '1,450', tag: 'For Sale' },
    { emoji: '🏠', price: '$229,000', address: 'Cleveland Heights, OH 44118', beds: 4, baths: 2, sqft: '1,820', tag: 'For Sale' },
    { emoji: '🏘', price: '$159,500', address: 'Garfield Heights, OH 44125', beds: 3, baths: 1, sqft: '1,200', tag: 'New Listing' },
  ],
  sold: [
    { emoji: '✅', price: '$172,000', address: 'Maple Heights, OH 44137', beds: 3, baths: 1, sqft: '1,300', tag: 'Sold', tagStyle: 'sold' },
  ],
  rent: [],
};
