"use client";
import "./globals.css";
import { fonts } from "./utils/fonts";
import Header, { HeaderInterface } from "./components/Header/Header";
import { Providers } from "./providers";
import Footer, { FooterInterface } from "./components/Footer/Footer";
import { layoutData } from "@/public/data/layoutData";

export interface LayoutDataProps {
  header: HeaderInterface;
  footer: FooterInterface;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { header, footer } = layoutData;
  return (
    <html lang="en" className={fonts.signika.variable}>
      <body className={fonts.signika.className}>
        <Providers>
          <Header
            bg={header.bg}
            headerLinks={header.headerLinks}
            supportLinks={header.supportLinks}
            authModalData={header.authModalData}
          />
          {children}
          <Footer navLinks={footer.navLinks} legalLinks={footer.legalLinks} />
        </Providers>
      </body>
    </html>
  );
}
