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
  { image: '/images/portfolio_1.jpg', title: 'Jennifer & Oliver', slug: 'jennifer-oliver' },
  { image: '/images/portfolio_2.jpg', title: 'Briana & Richard', slug: 'briana-richard' },
  { image: '/images/portfolio_3.jpg', title: 'Anne & Cameron', slug: 'anne-cameron' },
  { image: '/images/portfolio_4.jpg', title: 'Linda & Charles', slug: 'linda-charles' },
  { image: '/images/portfolio_1.jpg', title: 'Rahul & Priya', slug: 'rahul-priya' },
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