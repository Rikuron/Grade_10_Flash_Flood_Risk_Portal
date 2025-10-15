export type CriteriaContent = {
  name: string
  bulletPoints: {
    point1: string
    point2: string
    point3: string
    point4: string
    point5: string
  }
}

export const criteriaContent: CriteriaContent[] = [
  {
    name: "Hazard",
    bulletPoints: {
      point1: "No history of flash floods, located on high ground, very rare rainfall events.",
      point2: "Rare flash floods, minimal impact, occasional strong rains",
      point3: "Occasional flash floods during typhoons or rainy season",
      point4: "Frequent flooding with strong rains or tropical storms",
      point5: "Almost annual flash floods or extremely flood-prone location",
    }
  },
  {
    name: "Vulnerability",
    bulletPoints: {
      point1: "Strong buildings, high education, stable income, and trained disaster responders",
      point2: "Some weak housing but generally prepared and informed",
      point3: "Mixed-quality homes, some awareness and emergency plans",
      point4: "Poor housing materials, little disaster awareness",
      point5: "Informal settlers, high poverty, no disaster knowledge or resources",
    }
  },
  {
    name: "Exposure",
    bulletPoints: {
      point1: "Mostly uninhabited, farmland or forest",
      point2: "Scattered houses, low-density population",
      point3: "Medium-density community, mixed residential and roads",
      point4: "Densely populated, near schools, markets, or public structures",
      point5: "Critical infrastructure, major roads, or tightly packed urban housing at risk",
    }
  },
  {
    name: "Capacity",
    bulletPoints: {
      point1: "No early warning, poor evacuation plan, no LGU support",
      point2: "Weak systems, limited resources or coordination",
      point3: "Some community drills, basic response capacity",
      point4: "Active barangay DRRM, health services, and communication",
      point5: "Well-organized, trained responders, quick alert system, evacuation sites",
    }
  }
]