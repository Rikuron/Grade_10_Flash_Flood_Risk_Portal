import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-50 text-black p-3 px-6 sm:p-4 z-20 shadow-md">
      <div className="container mx-auto flex sm:flex-row gap-2 sm:gap-0 justify-between items-center">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Image src="/favicon.png" alt="Logo" width={50} height={50} className="w-8 h-8 sm:w-10 sm:h-10"/>
          <div className="flex flex-col sm:flex-row md:flex-row justify-center md:items-center md:space-x-4">
            <h1 className="text-sm sm:text-2xl font-bold">Flash Flood Risk Portal</h1>
            <p className="text-[11px] sm:text-sm font-bold ">ZZL and Co. &trade;</p>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-8 font-bold text-sm sm:text-base">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}