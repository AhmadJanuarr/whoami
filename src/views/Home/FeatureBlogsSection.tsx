import { getAllPosts } from "@/lib/mdx"
import { getTranslations } from "next-globe-gen"
import { FeatureBlogsContent } from "./FeatureBlogsContent"

export function FeatureBlogsSection() {
  const t = getTranslations("home")
  const posts = getAllPosts()
  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5)
  const featuredPosts = shuffledPosts.slice(0, 3)
  return <FeatureBlogsContent blogs={featuredPosts} label={t("blogs.label")} title={t("blogs.title")} />
}
