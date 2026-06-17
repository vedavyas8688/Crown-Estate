// Centralized content for the home-a page — matches the original Lovio template verbatim.

export const heroImages = [
  '/eventimages/banner4.jpg',
  '/eventimages/banner5.jpg',
]

export const galleryRows = [
  { images: ['/eventimages/72.jpg', '/eventimages/5.png'], margin: false },
  { images: ['/eventimages/73.jpg', '/eventimages/2.png'], margin: true },
  { images: ['/eventimages/74.jpg', '/eventimages/75.jpg'], margin: false },
  { images: ['/eventimages/8.png', '/eventimages/4.png'], margin: true }
]

 export const testimonials = [
  {
    flower: '/images/flower_1.png',
    quote:
      '"Celebrating our daughter\'s wedding at Crown Estate was beyond our expectations. The sprawling lawns, elegant interiors, and attentive staff made every moment feel magical. Our guests are still talking about it."',
    author: 'Rajesh Mehta'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '"We chose Crown Estate for our son\'s reception and it was the best decision we made. The venue is stunning, the rooms are luxurious, and the entire team ensured everything went flawlessly."',
    author: 'Priya Nair'
  },
  {
    flower: '/images/flower_1.png',
    quote:
      '"Crown Estate made our 25th anniversary celebration truly unforgettable. The privacy, the beautiful pool area, and the grand ambience gave our family gathering the royal touch we always dreamed of."',
    author: 'Suresh & Kavitha Rao'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '"From the moment we arrived, Crown Estate felt like a world of its own. The open lawns were perfect for our mehendi, and the banquet hall transformed beautifully for the wedding evening."',
    author: 'Ananya Sharma'
  },
  {
    flower: '/images/flower_1.png',
    quote:
      '"We hosted our annual corporate retreat here and were thoroughly impressed. The spacious event areas, comfortable stay facilities, and seamless coordination made it a productive and enjoyable experience for our entire team."',
    author: 'Vikram Iyer'
  },
  {
    flower: '/images/flower_2.png',
    quote:
      '"Crown Estate is hands down the finest venue in the region. We brought together over 300 family members for a milestone birthday, and the estate handled every detail with grace and professionalism."',
    author: 'Meenakshi Pillai'
  },
  {
    flower: '/images/flower_1.png',
    quote:
      '"The children had the time of their lives at the play area while the adults enjoyed the pool and evening décor. Crown Estate truly caters to every age group. A perfect family venue."',
    author: 'Arjun & Deepa Krishnan'
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
    { label: 'Blogs', to: '/blog' },
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