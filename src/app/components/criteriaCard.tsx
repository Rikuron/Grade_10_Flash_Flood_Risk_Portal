import { criteriaContent } from "../utils/criteriaContent"

export default function CriteriaCard() {
  return (
    <div className="z-10 mt-10 bg-white bg-opacity-75 p-6 md:p-12 rounded-lg text-black w-full max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Scoring Criteria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {criteriaContent.map((criteria) => (
          <div key={criteria.name}>
            <h3 className="text-xl md:text-2xl font-bold">{criteria.name}</h3>
            <ul className="list-none ml-2 md:ml-4 mt-2 text-lg md:text-base text-justify">
              <li>1 - {criteria.bulletPoints.point1}</li>
              <li>2 - {criteria.bulletPoints.point2}</li>
              <li>3 - {criteria.bulletPoints.point3}</li>
              <li>4 - {criteria.bulletPoints.point4}</li>
              <li>5 - {criteria.bulletPoints.point5}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}