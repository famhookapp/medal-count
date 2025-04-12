import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const locale = await getLocale();
const messages = await getMessages();

export const metadata: Metadata = {
  title: "Medal Count List",
  description: "Top medal winning countries",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} bg-gray-100 p-4`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
