"use client"
import { AboutTrackPattern } from "@/components/ui/AboutTrackPatern"
import { motion } from "framer-motion"
import { useTranslations } from "next-globe-gen"

interface ImageCardProps {
  src: string
  customRotate?: string
  index: number
}

function ImageCard({ src, customRotate = "", index }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center"
    >
      <div className="max-w-48 rounded-3xl border-2 border-zinc-200 p-2">
        <div className="rounded-2xl border-4 border-zinc-200 bg-zinc-100">
          <img
            src={src}
            alt="About section image"
            className={`h-full w-full grayscale transition-all duration-300 hover:grayscale-0 ${customRotate} rounded-lg bg-cover object-cover`}
          />
        </div>
      </div>
    </motion.div>
  )
}

interface ContentSectionProps {
  title: string
  description: string
  index: number
}

function ContentSection({ title, description, index }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-8"
    >
      <h1 className="sizeTitle text-textPrimary dark:text-textDarkPrimary lg:text-[30px]">{title}</h1>
      <p className="sizeSubtitle leading-loose text-textSecondary dark:text-textDarkSecondary">{description}</p>
    </motion.div>
  )
}

export function AboutSection() {
  const t = useTranslations("about")
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center border-b py-5 text-center">
        <div className="w-full border-y">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full py-2 text-sm font-medium uppercase tracking-wider text-accentColor"
          >
            {t("label")}
          </motion.h2>
        </div>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="sizeTitle max-w-xl px-2 text-textPrimary dark:text-textDarkPrimary lg:text-[40px]"
        >
          {t("title")}
        </motion.h1>
      </div>

      <div className="relative w-full overflow-hidden px-5 py-20">
        <div className="absolute left-0 top-0 hidden w-full md:left-4 lg:left-[420px] lg:block xl:left-[540px]">
          <AboutTrackPattern />
        </div>
        {/* Section 1 */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ImageCard src="/assets/images/about-1.jpg" customRotate="rotate-6" index={0} />
          <ContentSection title={t("section1.title")} description={t("section1.description")} index={0} />
        </div>
        {/* Section 2 */}
        <div className="flex flex-col-reverse gap-5 pt-32 lg:grid lg:grid-cols-2 lg:pt-40">
          <ContentSection title={t("section2.title")} description={t("section2.description")} index={1} />
          <ImageCard src="/assets/images/about-2.jpg" customRotate="-rotate-6" index={1} />
        </div>
        {/* Section 3 */}
        <div className="grid grid-cols-1 gap-5 pt-32 lg:grid-cols-2 lg:pt-40">
          <ImageCard src="/assets/images/about-3.jpg" customRotate="rotate-6" index={2} />
          <ContentSection title={t("section3.title")} description={t("section3.description")} index={2} />
        </div>

        {/* Section 4 */}
        <div className="flex flex-col-reverse gap-5 pt-32 lg:grid lg:grid-cols-2 lg:pt-40">
          <ContentSection title={t("section4.title")} description={t("section4.description")} index={3} />
          <ImageCard src="/assets/images/about-4.jpg" customRotate="-rotate-6" index={3} />
        </div>
      </div>
    </section>
  )
}
