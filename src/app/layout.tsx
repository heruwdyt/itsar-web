import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ITSAR Circle - Koperasi Syariah Modern',
  description:
    'ITSAR Circle adalah koperasi syariah modern berbasis komunitas yang menghubungkan investasi, bisnis, dan kolaborasi untuk kesejahteraan anggota dan kebermanfaatan umat.',
  keywords: ['koperasi syariah', 'investasi syariah', 'ITSAR Circle', 'komunitas muslim', 'investasi emas', 'mudharabah'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
