// Centralized content for the home-a page — matches the original Lovio template verbatim.

export const heroImages = [
  '/eventimages/banner2.webp',
  '/eventimages/banner1.webp',
  '/eventimages/banner3.webp'
]

export const galleryRows = [
  { images: ['/eventimages/1.png', '/eventimages/5.png'], margin: false },
  { images: ['/eventimages/6.png', '/eventimages/2.png'], margin: true },
  { images: ['/eventimages/3.png', '/eventimages/12.webp'], margin: false },
  { images: ['/eventimages/8.png', '/eventimages/4.png'], margin: true }
]

export const testimonials = [
  {
    flower: '/images/flower_1.png',
    quote:
      '"Crown Estate gave our family the perfect space for a grand celebration. The lawns, rooms, and overall ambience made the event feel truly special and memorable."',
    author: 'Happy Guest'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '"An ideal venue for weddings and large gatherings. The property is spacious, elegant, and very comfortable for guests staying overnight."',
    author: 'Event Guest'
  },
  {
    flower: '/images/flower_1.png',
    quote:
      '"Crown Estate was the perfect venue for our family wedding. The lawns, rooms, and overall ambience made the celebration feel grand, elegant, and very comfortable for all our guests."',
    author: 'Wedding Guest'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '"We hosted our anniversary celebration at Crown Estate, and the experience was beautiful. The property felt private, spacious, and luxurious, exactly what we wanted for our family gathering."',
    author: 'Anniversary Guest'
  },
  {
    flower: '/images/flower_1.png',
    quote:
      '"A wonderful place for large family get-togethers. The rooms, pool, open lawns, and children\'s play area made it easy for everyone to relax and enjoy the weekend together."',
    author: 'Family Guest'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '"Crown Estate gave our corporate event a premium setting. The location, spacious event areas, and stay facilities made it very convenient for our team and visiting guests."',
    author: 'Corporate Guest'
  },
  {
    flower: '/images/flower_1.png',
    quote:
      '"The estate is ideal for exhibitions and large showcases. The open space, easy layout possibilities, and premium environment helped us create a smooth and impressive event experience."',
    author: 'Exhibition Guest'
  },
]

 export const portfolio = [
  { image: '/eventimages/65.jpg', title: 'Event 1', slug: 'event-1' },
  { image: '/eventimages/66.png', title: 'Event 2', slug: 'event-2' },
  { image: '/eventimages/67.png', title: 'Event 3', slug: 'event-3' },
  { image: '/eventimages/68.png', title: 'Event 4', slug: 'event-4' },
  { image: '/eventimages/69.png', title: 'Event 5', slug: 'event-5' },
]

export const instagramImages = [
  '/eventimages/18.webp',
  '/images/instagram_2.jpg',
  '/images/instagram_3.jpg',
  '/eventimages/21.webp',
  '/eventimages/19.webp',
  '/eventimages/20.webp'
]

// Top-level navigation — split across the centered logo
export const navLinks = {
  left: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' }
  ],
  right: [
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' }
  ]
}


export const pricingPackages = [
  {
    eyebrow: '24 Hours',
    name: 'Wedding & Reception Package',
    description: 'A complete venue package for destination weddings, nikah ceremonies and grand receptions in Bangalore.',
    price: '₹5.5 Lakhs + 18% GST',
    featured: false,
    features: [
      '20 AC rooms for up to 100 guests',
      'Quadruple occupancy stay arrangement',
      'Complimentary reception or nikah stage',
      'Complimentary entrance gate',
      'Optional complimentary mantap',
      'Chairs and tables for 500 to 800 guests',
    ],
  },
  {
    eyebrow: 'Grand Event',
    name: 'Reception Package',
    description: 'Ideal for large evening receptions, post-wedding celebrations and family gatherings.',
    price: 'On request',
    featured: true,
    features: [
      'Lawn and hall area access',
      'Guest seating support',
      'Stage setup options',
      'Vendor-friendly event space',
    ],
  },
  {
    eyebrow: 'Custom',
    name: 'Wedding Weekend Stay',
    description: 'Best suited for families planning a multi-day wedding stay experience in Bangalore.',
    price: 'On request',
    featured: false,
    features: [
      'Guest accommodation planning',
      'Event space allocation',
      'Poolside and lawn usage',
      'Custom setup support',
    ],
  },
]