import DarkNavbar from "../designs/DarkNavbar";
import Footer from "../designs/Footer";

import { styles } from "../constants/styles";

const Team = () => {
  return (
    <>
      <DarkNavbar />
      <div className="flex flex-col items-start justify-center w-ful  ">
        <h1 className={`${styles.bigTitle} flex w-full items-center justify-center tb -z-10`}><span className="text-mpurple">Our</span> Team</h1>
      </div>
      Team
      <Footer />
    </>
  );
};

export default Team;
