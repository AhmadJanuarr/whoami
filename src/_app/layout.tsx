import { ReactNode } from "react"
import { ChatLauncher } from "@/components/chatbot/ChatLauncher"
import { DarkModeProvider } from "@/context/themes/theme-provider"
import { ScrollToTop } from "@/components/ScrollToTop"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"
import { getLocale } from "next-globe-gen"
import { PageTransition } from "@/components/Layout/PageTransition"
import localFont from "next/font/local"
import AppShell from "@/components/Layout/appshell"
import "@/style.css"

export const metadata = {
  title: "Maddlab.dev",
  description: "Personal Website of Ahmad Januar A",
  icons: {
    icon: "/icons/favicon.ico",
  },
}

const aspekta = localFont({
  src: [
    { path: "../app/assets/fonts/Aspekta-200.otf", weight: "200" },
    { path: "../app/assets/fonts/Aspekta-400.otf", weight: "400" },
    { path: "../app/assets/fonts/Aspekta-500.otf", weight: "500" },
    { path: "../app/assets/fonts/Aspekta-600.otf", weight: "600" },
    { path: "../app/assets/fonts/Aspekta-700.otf", weight: "700" },
    { path: "../app/assets/fonts/Aspekta-800.otf", weight: "800" },
    { path: "../app/assets/fonts/Aspekta-900.otf", weight: "900" },
  ],
  variable: "--font-aspekta",
  display: "swap",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = getLocale()
  return (
    <html lang={locale}>
      <body className="antialiased" suppressHydrationWarning>
        <DarkModeProvider>
          <AppShell className={`${aspekta.variable} `}>
            <PageTransition>
              <ScrollToTop />
              <ChatLauncher />
              <LanguageSwitcher />
              {children}
            </PageTransition>
          </AppShell>
        </DarkModeProvider>
      </body>
    </html>
  )
}
