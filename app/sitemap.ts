import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ores.sundell.dev',
      lastModified: '2025-01-14',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ores.sundell.dev/all',
      lastModified: '2025-01-13',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://ores.sundell.dev/single',
      lastModified: '2025-01-14',
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];
}
