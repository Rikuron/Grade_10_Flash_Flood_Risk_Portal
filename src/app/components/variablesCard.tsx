export default function VariablesCard() {
  return (
    <div className="bg-white bg-opacity-75 text-lg md:text-xl p-6 md:p-8 rounded-lg text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Variables</h2>
      <p><span className="font-bold">H</span> = Hazard Rating (1 - 5)</p>
      <p><span className="font-bold">V</span> = Vulnerability Rating (1 - 5)</p>
      <p><span className="font-bold">E</span> = Exposure Level (1 - 5)</p>
      <p><span className="font-bold">C</span> = Capacity (1 - 5)</p>
    </div>
  )
}