import { bLogo, angle } from "../constants/images.js";
import { styles } from "../constants/styles.js";
import CustomButton from "../components/CustomButton.jsx";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-vh flex items-center justify-between pt-3">
      <div>
        <Link to="#">
          <img src={bLogo} alt="Your Kingdom Word Publications" />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-1">
          <Link to="#" className={`${styles.navLink}`}>Publications</Link>
          <Link to="#" className={`${styles.navLink}`}>Gallery</Link>
          <Link to="#" className={`flex flex-row ${styles.navLink}`}>About <img src={angle} alt="#" /></Link>
        </div>
        <CustomButton title='Get in touch' to='#' style='bg-mgreen text-white'/>
      </div>
    </nav>
  );
};

export default Navbar;
