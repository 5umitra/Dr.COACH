import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "COACH: AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "dark"
      }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header */}
            <Header/>
            <main className="min-h-screen">{children}</main>
            {/*Footer */}
            <footer className="bg-muted/50 py-12"></footer>
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Hello mf!</p>
            </div>
          </ThemeProvider>
      </body>
    </html>

    </ClerkProvider>
  );
}
