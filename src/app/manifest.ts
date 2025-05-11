import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'React Kanban Board',
    short_name: 'Kanban Board',
    description: 'A lightweight, drag-and-drop Kanban board built with React',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafbfc',
    theme_color: '#4361ee',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
