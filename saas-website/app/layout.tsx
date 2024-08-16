import '@/app/globals.css';
import Navbar from '@/app/components/navbar';

export const metadata = {
  title: 'SaaS Service',
  description: 'Your solution for modern software needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="matte-dark text-foreground bg-background">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
