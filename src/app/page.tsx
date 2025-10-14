"use client";

import { useState } from "react";

export default function Home() {
  const [h, setH] = useState(0);
  const [v, setV] = useState(0);
  const [e, setE] = useState(0);
  const [c, setC] = useState(0);
  const [risk, setRisk] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);

  const calculateRisk = () => {
    setCalculating(true);
    setRisk(null);
    setTimeout(() => {
      if (c !== 0) {
        setRisk((h * v * e) / c);
      }
      setCalculating(false);
    }, 2000);
  };

  const getRiskLevel = (r: number) => {
    if (r < 10) return "Very Low";
    if (r < 20) return "Low";
    if (r < 30) return "Medium";
    if (r < 40) return "High";
    return "Very High";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('/2.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="z-10 text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to the Flash Flood Risk Portal</h1>
        <p className="mt-4 text-lg">Input your information, and with one click - you'll know your flash flood vulnerability.</p>
      </div>

      <div className="z-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg text-black">
          <h2 className="text-3xl font-bold mb-4">Variables</h2>
          <p><span className="font-bold">H</span> = Hazard Rating (1 - 5)</p>
          <p><span className="font-bold">V</span> = Vulnerability Rating (1 - 5)</p>
          <p><span className="font-bold">E</span> = Exposure Level (1 - 5)</p>
          <p><span className="font-bold">C</span> = Capacity (1 - 5)</p>
        </div>

        <div className="bg-white bg-opacity-75 p-8 rounded-lg text-black">
          <h2 className="text-3xl font-bold mb-4">Calculate Here</h2>
          <div className="flex items-center justify-center space-x-2 text-2xl">
            <span>H</span>
            <input type="number" min="1" max="5" value={h} onChange={(ev) => setH(parseInt(ev.target.value))} className="w-16 text-center bg-gray-200" />
            <span>x V</span>
            <input type="number" min="1" max="5" value={v} onChange={(ev) => setV(parseInt(ev.target.value))} className="w-16 text-center bg-gray-200" />
            <span>x E</span>
            <input type="number" min="1" max="5" value={e} onChange={(ev) => setE(parseInt(ev.target.value))} className="w-16 text-center bg-gray-200" />
            <span>/ C</span>
            <input type="number" min="1" max="5" value={c} onChange={(ev) => setC(parseInt(ev.target.value))} className="w-16 text-center bg-gray-200" />
          </div>
          {calculating ? (
            <div className="mt-4 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-2">CALCULATING...</p>
            </div>
          ) : (
            <button onClick={calculateRisk} className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {risk === null ? "Calculate" : "Calculate Again"}
            </button>
          )}
          {risk !== null && (
            <div className="mt-4 text-center">
              <p className="text-xl">Disaster Risk = <span className="font-bold">{risk.toFixed(2)}</span></p>
              <p className="text-xl">Disaster Level = <span className="font-bold">{getRiskLevel(risk)}</span></p>
            </div>
          )}
        </div>
      </div>

      <div className="z-10 mt-10 bg-white bg-opacity-75 p-8 rounded-lg text-black w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4">Scoring Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Hazard</h3>
            <ul className="list-disc list-inside">
              <li>1 - No history of flash floods, located on high ground, very rare rainfall events.</li>
              <li>2 - Rare flash floods, minimal impact, occasional strong rains</li>
              <li>3 - Occasional flash floods during typhoons or rainy season</li>
              <li>4 - Frequent flooding with strong rains or tropical storms</li>
              <li>5 - Almost annual flash floods or extremely flood-prone location</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Vulnerability</h3>
            <ul className="list-disc list-inside">
              <li>1 - Strong buildings, high education, stable income, and trained disaster responders</li>
              <li>2 - Some weak housing but generally prepared and informed</li>
              <li>3 - Mixed-quality homes, some awareness and emergency plans</li>
              <li>4 - Poor housing materials, little disaster awareness</li>
              <li>5 - Informal settlers, high poverty, no disaster knowledge or resources</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Exposure</h3>
            <ul className="list-disc list-inside">
              <li>1 - Mostly uninhabited, farmland or forest</li>
              <li>2 - Scattered houses, low-density population</li>
              <li>3 - Medium-density community, mixed residential and roads</li>
              <li>4 - Densely populated, near schools, markets, or public structures</li>
              <li>5 - Critical infrastructure, major roads, or tightly packed urban housing at risk</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Capacity</h3>
            <ul className="list-disc list-inside">
              <li>1 - No early warning, poor evacuation plan, no LGU support</li>
              <li>2 - Weak systems, limited resources or coordination</li>
              <li>3 - Some community drills, basic response capacity</li>
              <li>4 - Active barangay DRRM, health services, and communication</li>
              <li>5 - Well-organized, trained responders, quick alert system, evacuation sites</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="z-10 mt-10 bg-white bg-opacity-75 p-8 rounded-lg text-black w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4">Risk Level Classification</h2>
        <p><span className="font-bold">Very Low</span> - You and your home are safe, there is nothing to worry about.</p>
        <p><span className="font-bold">Low</span> - You have a slight chance of getting affected.</p>
        <p><span className="font-bold">Medium</span> - You will get affected but not greatly damaged, still take precautions.</p>
        <p><span className="font-bold">High</span> - The flash flood will greatly affect you and your assets, evacuate or take precaution.</p>
        <p><span className="font-bold">Very High</span> - You are at extremely high risk of getting affected by the flash flood, EVACUATE IMMEDIATELY.</p>
      </div>
    </main>
  );
}