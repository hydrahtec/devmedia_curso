import { Inter } from "next/font/google";
import { Topo } from "@/components/Topo";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Navegação entre paginas",
  description: "naveção entre páginas",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Topo />

        {children}
        
      </body>
    </html>
  );
}
