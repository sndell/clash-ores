import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clash of Clans Ore Calculator',
    short_name: 'Ore Calculator',
    description:
      'Calculate how many ores you need to max all equipments, a single equipment or how many ores you can get per week',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/ores/Starry_192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/ores/Starry_512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
