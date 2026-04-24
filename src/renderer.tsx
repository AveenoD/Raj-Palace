import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }: any) => {
  const pageTitle = title || 'Raj Palace & Lawns — Luxury Wedding Venue in Yeola, Nashik'
  const pageDesc =
    description ||
    'Host grand weddings at Raj Palace & Lawns — a royal 5000-guest indoor hall with two lush green lawns in Yeola, Nashik. Book day & night wedding events today.'

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4A0E0E" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content="wedding venue Yeola, wedding hall Nashik, Raj Palace Lawns, marriage lawn Shirdi road, big wedding hall Maharashtra, 5000 guest wedding venue, Yeola marriage hall" />
        <meta name="author" content="Raj Palace & Lawns" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content="/static/images/facade-night.jpg" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="/static/images/facade-night.jpg" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Inter:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />

        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      gold: '#D4AF37',
                      goldlight: '#E8C96A',
                      golddark: '#A8841F',
                      maroon: '#4A0E0E',
                      maroondark: '#2E0606',
                      maroonlight: '#6B1919',
                      ivory: '#F8F5F0',
                      ivorydark: '#EFE9DE'
                    },
                    fontFamily: {
                      display: ['"Playfair Display"', 'serif'],
                      serif: ['"Cormorant Garamond"', 'serif'],
                      sans: ['Inter', 'system-ui', 'sans-serif']
                    }
                  }
                }
              }
            `
          }}
        ></script>

        {/* Custom CSS */}
        <link href="/static/style.css" rel="stylesheet" />

        {/* Structured Data (LocalBusiness) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EventVenue',
              name: 'Raj Palace & Lawns',
              description: pageDesc,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Shirdi Manmad Road, Near Darshan Hotel & Indian Oil Pump',
                addressLocality: 'Yeola',
                addressRegion: 'Maharashtra',
                postalCode: '423401',
                addressCountry: 'IN'
              },
              telephone: '+919764490162',
              maximumAttendeeCapacity: 5000,
              image: ['/static/images/facade-night.jpg', '/static/images/hall-wedding-setup.jpg'],
              sameAs: ['https://www.instagram.com/raj_palace_lawns']
            })
          }}
        ></script>
      </head>
      <body class="bg-ivory text-maroon font-sans antialiased">{children}</body>
    </html>
  )
})
