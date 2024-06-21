import { Link } from "react-router-dom";

import { logoMain } from "../assets";

function Navbar() {
  return (
    <nav className="backdrop-blur-2xl bg-black border border-white/40 flex w-full text-white font-semibold rounded-md items-center justify-between  px-4">
      <Link className="" to="/">
        <img src={logoMain} alt="" className="w-[150px] " />
      </Link>

      <ul className="flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
