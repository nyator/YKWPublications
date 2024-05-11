import Navbar from "../designs/Navbar.jsx";
import { styles } from "../constants/styles.js";
import { img } from "../constants/images.js";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-vh mx-[40px] md:mx-[100px] lg:mx-[180px]  ">
        <Navbar />
        <section className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div>
            <p className={`${styles.smTitle} hidden md:flex`}>
              WELCOME TO YKWP:
            </p>
            <h1 className={`${styles.xlTitle} text-mpurple  w-[517px] bg-gray-500`}>
            <span className="text-mgreen">Your</span> <br /> Christian Bookshop
          </h1>
          </div>
          <img src={img} alt="man reading with child" />
        </section>
      </div>
    </>
  );
};

export default Home;
