export type CreditsContent = {
  name: string
  bulletPoints: {
    name: string
  }[]
}

export const creditsContent: CreditsContent[] = [
  {
    name: "Student Researchers",
    bulletPoints: [
      { name: "Rey Zander O. Pabroquiz" },
      { name: "Zayred Troy A. Jariol" },
      { name: "Lyndon Cristoff B. Eugenio" },
    ],
  },
  {
    name: "Website Designers",
    bulletPoints: [
      { name: "Rey Zander O. Pabroquiz" },
      { name: "Zayred Troy A. Jariol" },
      { name: "Lyndon Cristoff B. Eugenio" },
    ],
  },
  {
    name: "Website Developer",
    bulletPoints: [
      { name: "Cristane Josh B. Eugenio" },
    ],
  },
  {
    name: "Research Supervisor",
    bulletPoints: [
      { name: "Honey Ritzel G. Barillo" },
    ],
  },
  {
    name: "Qualified Scientist",
    bulletPoints: [
      { name: "Elizabeth Edan M. Albiento" },
    ],
  }
]