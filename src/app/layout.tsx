import "./globals.css";
import type { Metadata } from "next";
import { Alfa_Slab_One } from "next/font/google"
import { Patua_One } from "next/font/google";

const alfa_slab_one = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alfa-slab-one'
});

const patua_one = Patua_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-patua-one'
})

export const metadata: Metadata = {
  title: "Who am I",
  description: "My Mandala Self Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${alfa_slab_one.variable} ${patua_one.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
