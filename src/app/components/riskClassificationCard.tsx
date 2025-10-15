export default function RiskClassificationCard() { 
  return (
    <div className="z-10 mt-10 bg-white bg-opacity-75 p-6 md:p-8 rounded-lg text-black w-full max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Risk Level Classification</h2>
      <p><span className="font-bold">Very Low</span> - You and your home are safe, there is nothing to worry about.</p>
      <p><span className="font-bold">Low</span> - You have a slight chance of getting affected.</p>
      <p><span className="font-bold">Medium</span> - You will get affected but not greatly damaged, still take precautions.</p>
      <p><span className="font-bold">High</span> - The flash flood will greatly affect you and your assets, evacuate or take precaution.</p>
      <p><span className="font-bold">Very High</span> - You are at extremely high risk of getting affected by the flash flood, EVACUATE IMMEDIATELY.</p>
    </div>
  )
}