"use client";

import Overlay from "./components/overlay"
import Hero from "./sections/hero"
import VariablesCard from "./components/variablesCard"
import CalculateCard from "./components/calculateCard"
import CriteriaCard from "./components/criteriaCard"
import RiskClassificationCard from "./components/riskClassificationCard"

export default function Home() {
  return (
    <main className="flex -z-15 min-h-screen flex-col items-center justify-center p-8 sm:p-10 md:p-24 bg-cover bg-center" style={{ backgroundImage: "url('/gr10Background.png')" }}>
      <Overlay />
      <Hero />
      <div className="z-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <VariablesCard />
        <CalculateCard />
      </div>

      <CriteriaCard />

      <RiskClassificationCard />
      
    </main>
  );
}