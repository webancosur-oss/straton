import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'STRATON | Ingeniería, Construcción y Gestión',
    template: '%s | STRATON',
  },
  description:
    'STRATON es una empresa especializada en ingeniería, construcción y gestión de proyectos.',
  keywords: [
    'STRATON',
    'construcción',
    'ingeniería',
    'gestión de proyectos',
    'constructora',
    'construcción Perú',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}