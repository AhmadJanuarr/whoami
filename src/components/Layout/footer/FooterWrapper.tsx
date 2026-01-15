import SosialMediaIcon from "@/components/icons/SosialMediaIcons"
import FooterColumn from "./FooterColumn"
import { useTranslations } from "next-globe-gen"

type FooterNavKey = "navigate" | "build" | "misc"
type FooterLinkKey =
  | "home"
  | "about"
  | "blogs"
  | "projects"
  | "toolbox"
  | "next"
  | "tailwind"
  | "api"
  | "community"
  | "paypal"
  | "github"
  | "linkedin"

const NAV_ITEMS: {
  title: FooterNavKey
  links: FooterLinkKey[]
  url: string[]
}[] = [
  {
    title: "navigate",
    links: ["home", "about", "blogs", "projects", "toolbox"],
    url: ["/", "/about", "/blogs", "/projects", "/toolbox"],
  },
  {
    title: "build",
    links: ["next", "tailwind", "api", "community"],
    url: ["https://nextjs.org/", "https://tailwindcss.com/", "https://nextjs.org/docs/api-routes/introduction", "https://nextjs.org/community"],
  },
  {
    title: "misc",
    links: ["paypal", "github", "linkedin"],
    url: [
      "https://paypal.me/ahmadjanuar?country.x=ID&locale.x=id_ID",
      "https://github.com/AhmadJanuarr",
      "https://www.linkedin.com/in/ahmad-januar-a96515221/",
    ],
  },
]

export const FooterWrapper = () => {
  const t = useTranslations("footer")
  const buildLinkKey = (link: FooterLinkKey) => `link.${link}` as Parameters<typeof t>[0]
  const translateNav = NAV_ITEMS.map((item) => ({
    ...item,
    title: t(item.title),
    links: item.links.map((link) => t(buildLinkKey(link))),
  }))
  return (
    <footer className="w-full border-t bg-backgroundSecondary pt-5 dark:bg-bgDarkSecondary lg:py-16">
      <div className="sizeSubtitle mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12 md:flex-row md:space-x-12 md:space-y-0">
          <div className="flex flex-col space-y-6 md:w-2/5">
            <div className="flex items-center space-x-4">
              <img src="/icons/favicon.ico" alt="Ahmad Januar A" width={40} height={40} className="rounded-full ring-2 ring-gray-100" />
              <div>
                <h1 className="text-textPrimary dark:text-textDarkPrimary">Ahmad Januar A</h1>
                <p className="text-textSecondary dark:text-textDarkSecondary">Front End Developer</p>
              </div>
            </div>

            <p className="leading-relaxed text-textSecondary dark:text-textDarkSecondary">{t("description") as string}</p>

            <div className="flex items-center space-x-2">
              <SosialMediaIcon />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {translateNav.map((item, index) => (
              <FooterColumn key={index} title={item.title} links={item.links} url={item.url} />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 py-3 text-center ">
          <p className="text-sm text-gray-500 dark:text-textDarkSecondary">© {new Date().getFullYear()} Ahmad Januar A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
