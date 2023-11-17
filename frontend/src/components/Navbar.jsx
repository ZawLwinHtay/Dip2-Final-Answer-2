import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-[400px] px-10 py-3 bg-yellow-300">
      <div className=" uppercase mb-5 border-b-2 pb-2 border-gray-500 sm:font-semibold md:font-bold sm:text-xl md:text-3xl text-white">
        <h1>DIP Final Answer 2</h1>
      </div>
      <div className="flex items-center justify-between px-5">
        {/* Logo */}
        <h2 className=" font-bold text-sm md:text-2xl text-yellow-600">
          YOUR<span className="text-xs md:text-sm text-white">.POST</span>
        </h2>

        {/* Action Btn */}
        <div className="flex items-center gap-5">
          <Link
            to={"/"}
            className="bg-white border-2 border-yellow-500 px-3 md:px-5 py-1 md:py-2 rounded-md text-sm md:text-md font-semibold md:font-bold text-yellow-500 hover:scale-105 duration-200"
          >
            Home
          </Link>
          <Link
            to={"/add"}
            className="bg-white border-2 border-white px-3 md:px-5 py-1 md:py-2 rounded-md text-sm md:text-md font-semibold md:font-bold text-yellow-500 hover:scale-105 duration-200"
          >
            New
          </Link>
        </div>
      </div>
    </div>
  );
}
