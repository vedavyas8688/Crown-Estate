import { Helmet } from 'react-helmet-async'

const DEFAULTS = {
  title: 'Crown Estate — Luxury Events & Celebrations in Bangalore',
  description:
    'Crown Estate is a luxury 4-acre event and stay destination on Airport Road, Bangalore. Host destination weddings, receptions, family gatherings, corporate events and weekend getaways.',
  keywords: 'Luxury Wedding & Event Venue in Bangalore'
}

export default function Seo({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title || DEFAULTS.title}</title>
      <meta name="description" content={description || DEFAULTS.description} />
      <meta name="keywords" content={keywords || DEFAULTS.keywords} />
    </Helmet>
  )
}