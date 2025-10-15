import { creditsContent } from "../utils/creditsContent";

export default function ReferencesCard() {
  return (
    <div className="z-10 mt-10 bg-white bg-opacity-75 p-6 md:p-8 rounded-lg text-black w-full max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">References and Credits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center md:text-left items-center justify-center">
        {creditsContent.map((credit) => (
          <div key={credit.name}>
            <h3 className="text-xl md:text-2xl font-bold">{credit.name}:</h3>
            <ul className="list-disc list-inside text-sm md:text-base">
              {credit.bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint.name}>{bulletPoint.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 w-[95%] md:w-3/4 mx-auto">
        <p className="text-center mt-8 text-sm md:text-base">Feel free to check out our research study!</p>
        <p className="text-center font-bold text-sm md:text-base">“A Mathematical Approach to Disaster Risk Prediction: Implementing the Disaster Risk Formula in a User-Centered Website”</p>
        <p className="text-center mt-6 text-sm md:text-base">This website was developed for research purposes.</p>
      </div>
    </div>
  )
}