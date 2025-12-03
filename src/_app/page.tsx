import { AboutPreviewSection } from "@/views/Home/AboutPreviewSection"
import { FeatureBlogsSection } from "@/views/Home/FeatureBlogsSection"
import { FeaturedProjectSection } from "@/views/Home/FeaturedProjectSection"
import { HomeHeroSection } from "@/views/Home/HomeHeroSection"
import { NewsLetterSection } from "@/components/ui/NewsLetterSection"

export default async function Home() {
  return (
    <>
      <HomeHeroSection />
      <AboutPreviewSection />
      <FeatureBlogsSection />
      <FeaturedProjectSection />
      <NewsLetterSection />
    </>
  )
}
