import { BwLogo } from "../constants/images";
import { Facebook, Instagram, Twitter, Linkedin, Mail, PhoneCall } from "lucide-react";

import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const Footer = () => {
  return (
    <section className="w-full tn px-[40px] md:px-[180px] lg:px-[220px] py-[30px] ll:py-[80px] space-y-8 divide-gr divide-y ">
      <div className="flex flex-col ll:flex-row items-center justify-around space-y-[40px]">
        <div>
        <Link to="/">
              <img
                src={BwLogo}
                alt="Your Kingdom Word Publications"
                className="object-cover"
              />
            </Link>
        </div>
        <div className="flex space-x-9">
          <Link to="https://web.facebook.com/" target="blank">
            <Facebook color="#ffffff" size={32} className="hover:stroke-blue-400 transition-colors ease-in-out"/>
          </Link>
          <Link to="https://www.instagram.com/" target="blank">
            <Instagram color="#ffffff" size={32} className="hover:stroke-red-700 transition-colors ease-in-out"/>
          </Link>
          <Link to="https://twitter.com/" target="blank" >
            <Twitter color="#ffffff" size={32} className="hover:stroke-blue-500 transition-colors ease-in-out"/>
          </Link>
          <Link to="https://www.linkedin.com/" target="blank">
            <Linkedin color="#ffffff" size={32} className="hover:stroke-yellow-500 transition-colors ease-in-out"/>
          </Link>
        </div>
        <div className="text-center md:text-start leading-[50px]">

          <h1 className="text-[13px] md:text-[16px] text-white font-krona flex">Say Hello!</h1>

          <Link to="mailto:yourkingdomword@gmail.com">  
            <h1 className="text-[13px] md:text-[16px] text-white font-krona border-b-[1px] items-center flex gap-3">
            <Mail size={28} color="#ffffff" />
              yourkingdomword@gmail.com
            </h1>
          </Link>

          <Link to="tel:+233-30-000-0000" >
            <h1 className="text-[13px] md:text-[16px] text-white font-krona items-center flex gap-3">
            <PhoneCall  size={28} color="#ffffff" />
              030 000 0000</h1>
          </Link>

        </div>
      </div>

      <div className="flex flex-col ll:flex-row items-center justify-between space-y-8">

      <ul className="flex items-center justify-center gap-8 mt-10">
              <li>
                <Link to="/publications" className={`${styles.para} hover:text-[#6a4ce5]`}>
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={`${styles.para} hover:text-[#6a4ce5]`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className={`${styles.para} hover:text-[#6a4ce5]`}>
                  About Us
                </Link>
              </li>
      </ul>
      <h1 className={`${styles.para} text-center`}>YKWP © 2024. All Rights Reserved .</h1>

      </div>
    </section>
  );
};

export default Footer;
