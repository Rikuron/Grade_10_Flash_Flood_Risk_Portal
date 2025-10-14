import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-50 text-black p-4 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/favicon.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Flash Flood Risk Portal</h1>
          <p className="text-sm font-bold">ZZL and Co. &trade;</p>
        </div>
        <nav>
          <ul className="flex space-x-8 font-bold ">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}