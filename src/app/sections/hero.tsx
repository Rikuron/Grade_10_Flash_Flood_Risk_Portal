import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full z-10 h-screen flex flex-col -mt-16 items-center justify-center gap-y- text-white text-center">
      <Image src="/favicon.png" alt="Logo" width={125} height={125} />
      <h1 className="text-6xl font-bold">Welcome to the Flash Flood Risk Portal</h1>
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-2xl">
      <p className="text-xl font-bold">Input your information, and with one click - you'll know your flash flood vulnerability.</p>
      </div>
    </div>
  )
}