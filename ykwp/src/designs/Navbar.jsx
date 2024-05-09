import { bLogo } from "../constants/images.js";
import CustomButton from "../components/CustomButton.jsx";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-vh bg-red-500 flex items-center justify-between">
      <div>
        <Link to="#">
          <img src={bLogo} alt="Your Kingdom Word Publications" />
        </Link>
      </div>
      <div className="flex flex-row">
        <CustomButton title='Get in touch' to='#' style='bg-mgreen text-white'/>
      </div>
    </nav>
  );
};

export default Navbar;
