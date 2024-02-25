import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed flex flex-row items-center w-full gap-8 px-8 py-4 text-white -bg-gray-primary">
      <h1 className="text-2xl">NewsMarket</h1>
      <ul className="flex flex-row gap-4 text-gray-500">
        <Link className="cursor-pointer hover:text-white" to="/">
          Home
        </Link>
        <Link className="cursor-pointer hover:text-white" to="/business">
          Business
        </Link>
        <Link className="cursor-pointer hover:text-white" to="/entertainment">
          Entertainment
        </Link>
        <Link className="cursor-pointer hover:text-white" to="/health">
          Health
        </Link>
        <Link className="cursor-pointer hover:text-white" to="/science">
          Science
        </Link>
        <Link className="cursor-pointer hover:text-white" to="/sports">
          Sports
        </Link>
        <Link className="cursor-pointer hover:text-white" to="/technology">
          Technology
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
