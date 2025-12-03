export interface ExperienceItem {
  companyKey: string
  periodKey: string
  roleKey: string
  descriptionKeys: string[]
}

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    companyKey: "experience.items.silentCicada.company",
    periodKey: "experience.items.silentCicada.period",
    roleKey: "experience.items.silentCicada.role",
    descriptionKeys: ["experience.items.silentCicada.description.0", "experience.items.silentCicada.description.1"],
  },
  {
    companyKey: "experience.items.sema.company",
    periodKey: "experience.items.sema.period",
    roleKey: "experience.items.sema.role",
    descriptionKeys: ["experience.items.sema.description.0", "experience.items.sema.description.1"],
  },
  {
    companyKey: "experience.items.dishub.company",
    periodKey: "experience.items.dishub.period",
    roleKey: "experience.items.dishub.role",
    descriptionKeys: ["experience.items.dishub.description.0", "experience.items.dishub.description.1"],
  },
]
