
import { Helmet } from 'react-helmet-async'

 

const DEFAULTS = {
  title: 'Crown Estate — Luxury Events & Celebrations in Bangalore',
  description:
    'Crown Estate is a luxury 4-acre event and stay destination on Airport Road, Bangalore. Host destination weddings, receptions, family gatherings, corporate events and weekend getaways.',
}

export default function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title || DEFAULTS.title}</title>
      <meta name="description" content={description || DEFAULTS.description} />
    </Helmet>
  )
}