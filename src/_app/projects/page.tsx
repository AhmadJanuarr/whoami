import { ProjectCard } from "@/components/ProjectCard"
import { PROJECTS } from "@/datas/project-list"
import { useTranslations } from "next-globe-gen"

export default function Projects() {
  const t = useTranslations("project")
  return (
    <section className="w-full overflow-hidden">
      <div className="mb-16 text-center">
        <div className="h-28 w-full border-b lg:h-14" />
        <div className=" mx-auto flex w-full items-center justify-center border-y py-5">
          <h1 className="sizeTitle max-w-xl font-semibold text-textPrimary dark:text-textDarkPrimary lg:text-[40px]">{t("title")}</h1>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            title={t(project.title as Parameters<typeof t>[0])}
            description={t(project.description as Parameters<typeof t>[0])}
          />
        ))}
      </div>
    </section>
  )
}
