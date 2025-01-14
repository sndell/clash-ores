import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clash of Clans Ore Calculator - Max Your Equipment',
    short_name: 'Ore Calculator',
    description:
      'Calculate how many ores are remaining until you max all of your equipment in Clash of Clans. A simple but powerful tool.',
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
