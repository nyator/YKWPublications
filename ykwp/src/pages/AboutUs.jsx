import DarkNavbar from "../designs/DarkNavbar";
import { styles } from "../constants/styles";

const AboutUs = () => {
  return (
    <>
    <div className="w-full h-[128px] absolute bg-3 -z-10"></div>
    <div className="w-full h-[147px] sm:h-[174px] absolute tb top-[126px] -z-10"></div>

    <div className="flex flex-col items-start justify-center w-vh mx-[40px] md:mx-[100px] lg:mx-[180px]  ">
      <DarkNavbar />
      <div className="flex w-full items-center justify-center">
        <h1 className={`${styles.bigTitle}`}>
           About
           <span className="text-mpurple"> Us</span>
        </h1>
      </div>
      Team
    </div>
  </>
  );
};

export default AboutUs;
