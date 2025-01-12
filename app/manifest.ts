import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clash of Clans Ore Calculator',
    short_name: 'Ore Calculator',
    description: 'A simple tool for Clash of Clans to calculate how many ores are remaining until you max all of your equipment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
