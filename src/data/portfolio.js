const GALLERY_1 = [
  '/eventimages/1.png',
  '/eventimages/5.png',
  '/eventimages/6.png',
  '/eventimages/2.png',
  '/eventimages/3.png',
  '/eventimages/12.webp',
  '/eventimages/8.png',
  '/eventimages/4.png',
];

const GALLERY_2 = [...GALLERY_1];
const GALLERY_3 = [...GALLERY_1];
const GALLERY_4 = [...GALLERY_1];
const GALLERY_5 = [...GALLERY_1];
const GALLERY_6 = [...GALLERY_1];

export const portfolioDetails = {
  "event-1": {
    slug: "event-1",
    title: "Destination Weddings & Receptions",
    teaserImage: "/eventimages/65.jpg",
    intro: {
      body: "Crown Estate sets the perfect stage for destination weddings and grand receptions. From the entrance gate to the sprawling reception lawn, every corner of the estate is transformed to reflect your vision. Guests stay across 20 luxury AC rooms while the lawns, hall and stage area host ceremonies, receptions and family gatherings across a beautiful celebration weekend.",
    },
    gallery: GALLERY_1,
    testimonial: {
      flower: "/images/flower_1.png",
      quote: '"Crown Estate gave our wedding the grandeur and comfort we always dreamed of. Every guest felt welcome and the entire estate felt like it was made just for us."',
      author: "Jennifer & Oliver",
    },
  },
  "event-2": {
    slug: "event-2",
    title: "Exhibitions & Fashion Shows",
    teaserImage: "/eventimages/66.png",
    intro: {
      body: "With expansive lawns, a flexible hall and a striking entrance, Crown Estate is an exceptional venue for exhibitions and fashion shows. The open layout allows for custom staging, runway setups and curated display areas, while the estate's elegance provides a naturally sophisticated backdrop that elevates every showcase.",
    },
    gallery: GALLERY_2,
    testimonial: {
      flower: "/images/flower_2.png",
      quote: '"The space at Crown Estate was perfect for our exhibition. The layout, the ambience and the team\'s support made the entire event seamless and memorable."',
      author: "Briana & Richard",
    },
  },
  "event-3": {
    slug: "event-3",
    title: "Corporate Events & Conferences",
    teaserImage: "/eventimages/67.png",
    intro: {
      body: "Crown Estate brings a rare blend of professionalism and elegance to corporate events and conferences. The estate's hall and outdoor spaces can be configured for seminars, product launches, team off-sites and formal gatherings — all within a private, distraction-free environment that inspires focus and connection.",
    },
    gallery: GALLERY_3,
    testimonial: {
      flower: "/images/flower_1.png",
      quote: '"Our corporate off-site at Crown Estate exceeded every expectation. The facilities, the privacy and the setting made it our most productive and enjoyable team event yet."',
      author: "Anne & Cameron",
    },
  },
  "event-4": {
    slug: "event-4",
    title: "Birthday & Anniversary Celebrations",
    teaserImage: "/eventimages/68.png",
    intro: {
      body: "Milestone moments deserve an extraordinary setting. Crown Estate offers the privacy, elegance and space needed to celebrate birthdays and anniversaries in true style. Whether it is an intimate gathering or a grand party, the estate's lawns, poolside and hall areas come together to create an experience your guests will talk about for years.",
    },
    gallery: GALLERY_4,
    testimonial: {
      flower: "/images/flower_2.png",
      quote: '"Our anniversary celebration at Crown Estate was intimate, elegant and truly unforgettable. We could not have chosen a more beautiful or personal setting."',
      author: "Linda & Charles",
    },
  },
  "event-5": {
    slug: "event-5",
    title: "Family Get-Togethers & Reunions",
    teaserImage: "/eventimages/69.png",
    intro: {
      body: "Crown Estate was made for families. With 20 AC rooms, open lawns, a pool and generous communal spaces, the estate gives every generation room to relax, connect and celebrate together. Family get-togethers and reunions at Crown Estate feel less like events and more like a homecoming — warm, unhurried and full of joy.",
    },
    gallery: GALLERY_5,
    testimonial: {
      flower: "/images/flower_1.png",
      quote: '"Crown Estate was perfect for our family reunion. Everyone had space to relax, play and enjoy — it truly felt like our own private retreat for the weekend."',
      author: "Rahul & Priya",
    },
  },
};

export const portfolioList = [
  "event-1",
  "event-2",
  "event-3",
  "event-4",
  "event-5",
];