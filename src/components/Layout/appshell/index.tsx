import { ChatLauncher } from "@/components/chatbot/ChatLauncher"
import { HeaderWrapper } from "../header/HeaderWrapper"
import { FooterWrapper } from "../footer/FooterWrapper"

type AppShellProps = {
  className: string
  children: React.ReactNode
}

const AppShell = ({ className, children }: AppShellProps) => {
  const DecorativeStripesStyle = "hidden w-full border-borderPrimary opacity-30 dark:bg-borderPrimary lg:block decorative-stripes"
  return (
    <main className={`${className} relative min-h-screen overflow-hidden bg-backgroundPrimary dark:bg-bgDarkPrimary dark:text-textDarkPrimary`}>
      <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center overflow-hidden border lg:max-w-[1200px] xl:max-w-[1400px]">
        <HeaderWrapper />
        <div className="grid w-full grid-cols-1 lg:grid-cols-[32px_auto_32px] xl:grid-cols-[32px_1fr_32px]">
          <div className={`${DecorativeStripesStyle} border-r`} />
          <div>{children}</div>
          <div className={`${DecorativeStripesStyle} border-l`} />
        </div>
        <FooterWrapper />
      </div>
    </main>
  )
}

export default AppShell
