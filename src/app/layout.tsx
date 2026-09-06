import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBookCta } from "@/components/sticky-book-cta";
import { JsonLd, organizationSchema, serviceSchemas } from "@/components/json-ld";
import { pages, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${pages.home.title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/kiko.svg",
  },
  openGraph: {
    locale: "pt_PT",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={organizationSchema()} />
        {serviceSchemas().map((schema) => (
          <JsonLd key={String(schema.name)} data={schema} />
        ))}
        <SiteHeader />
        <main className="relative z-10 flex flex-1 flex-col pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <StickyBookCta />
      </body>
    </html>
  );
}
