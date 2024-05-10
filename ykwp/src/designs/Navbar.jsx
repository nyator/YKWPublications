import { bLogo } from "../constants/images.js";
import { styles } from "../constants/styles.js";
import CustomButton from "../components/CustomButton.jsx";

import { Menu, X, ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNav = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <>
      <nav className="w-full items-center pt-3">
        {/* desktop Navigation */}

        <div className="hidden sm:flex flex-1 justify-between items-center">
          <div>
            <Link to="/">
              <img
                src={bLogo}
                alt="Your Kingdom Word Publications"
                className="object-cover"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-between">

            <ul className="flex">
              <li>
                <Link to="/publications" className={`${styles.navLink}`}>
                  Publications
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/gallery" className={`${styles.navLink}`}>
                  Gallery
                </Link>
              </li>

              <li>
                <div className="relative">
                  <button onClick={toggleNav} className={`${styles.dropnavLink} flex items-center `}>
                    About
                    <ChevronDown className={`${openNavigation ? "rotate-180 transition-all ease-in-out duration-200" : 'transition-all ease-in-out duration-200'}`}/>
                  </button>

                  {openNavigation && (
                    <div className=" flex absolute h-[70px] top-8 right-5 text-center items-center justify-center px-4 bg-1 space-x-3 rounded-lg shadow-sm transition-all ease-in-out duration-500">
                      <Link
                        to="/about"
                        className={`${styles.navLink} hover:bg-2 border-2 border-[0.1px] p-2 rounded-lg font-normal`}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/team"
                        className={`${styles.navLink} hover:bg-2  border-2 border-[0.1px] p-2 rounded-lg font-normal `}
                      >
                        Our Team
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </ul>

            {/* <div
            className={`flex flex-col text-center ${styles.navLink} relative`}
          >
            <h1 className={`flex flex-row ${styles.navLink} `}>
              About
              <img src={angle} alt="#" />
            </h1>
            <div className=" flex flex-col w-[280px] px-[50px] py-auto bg-slate-600/25 text-justify items-center justify-evenly absolute top-10 right-5">
              <Link to="/about" className={` `}>
                About us
              </Link>
              <Link to="/team" className={` `}>
                Our Team
              </Link>
            </div>
          </div> */}

            <CustomButton
              title="Get in touch"
              to="#"
              style="bg-mgreen text-white text-nowrap"
            />
          </div>
        </div>

        {/* Mobile Navigation */}

        <div className="flex sm:hidden flex-1 justify-between items-center">
          <div>
            <Link to="/">
              <img
                src={bLogo}
                alt="Your Kingdom Word Publications"
                className="object-fill"
              />
            </Link>
          </div>

          <div>
            <button onClick={toggleNav} className="relative">
              {openNavigation ? (
                <X size={36} strokeWidth={2} />
              ) : (
                <Menu size={36} strokeWidth={2} />
              )}
            </button>

            {openNavigation && (
              <div className="flex flex-col absolute right-5 items-start bg-1 py-5 px-5 space-y-3 rounded-lg shadow-sm">
                <Link
                  to="/publications"
                  className={`${styles.navLink} p-2 hover:bg-2 border-2 border-[0.1px] rounded-lg w-[140px] font-normal`}
                >
                  Publications
                </Link>
                <Link to="/gallery" className={`${styles.navLink}  p-2 hover:bg-2 border-2 border-[0.1px] rounded-lg w-[140px] font-normal`}>
                  Gallery
                </Link>
                <Link to="/about" className={`${styles.navLink} p-2 hover:bg-2 border-2 border-[0.1px] rounded-lg w-[140px] font-normal`}>
                  About Us
                </Link>
                <Link to="/team" className={`${styles.navLink}  p-2 hover:bg-2 border-2 border-[0.1px] rounded-lg w-[140px] font-normal`}>
                  Our Team
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
