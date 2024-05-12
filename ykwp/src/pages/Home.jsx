import Navbar from "../designs/Navbar.jsx";
import SectionBox from "../designs/SectionBox.jsx"
import { styles } from "../constants/styles.js";
import { img, book } from "../constants/images.js";
import CustomButton from "../components/CustomButton.jsx";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="flex flex-col-reverse ll:flex-row items-center justify-between w-full px-[40px] md:px-[180px] lg:px-[220px] py-[20px] ">
        <div className="w-fit text-center ll:text-start space-y-6">
          <p className={`${styles.smTitle} hidden ll:flex`}>WELCOME TO YKWP:</p>
          <h1
            className={`${styles.xlTitle} text-mpurple text-center ll:text-start`}
          >
            <span className="text-3">Your</span> <br /> Christian
            <br />
            Bookshop.
          </h1>
          <p className={`${styles.paragraph} max-w-[700px]`}>
            Your one-stop destination for all things books! We take pride in
            providing a platform for authors and readers to connect, explore,
            and celebrate literature in all its forms.
          </p>
          <CustomButton
            title="Get in touch"
            to="#"
            style="bg-mpurple text-white text-nowrap mt-7"
          />
        </div>
        <img
          src={img}
          alt="man reading with child"
          className="object-contain items-center"
        />
      </section>

      {/* FIXME: MAKE INTO VERTICAL SCROLL. */}

      <section className="w-full bg-1 px-[40px] md:px-[180px] lg:px-[220px] py-[30px] ll:py-[80px]">
        <div className="flex flex-col justify-start space-y-5">
          <div className="text-center space-y-4">
            <p className={`${styles.smTitle}`}>AUTHOR’S PUBLICATIONS</p>
            <h1 className={`${styles.contentTitle} text-mpurple text-center`}>
              <span className="text-3">On The</span> Selves
            </h1>
          </div>
          <div className="flex gap-5">
            <div className="bg-2 rounded-lg w-fit">
              <img src={book} alt="#" className="object-contain" />
            </div>

            <div className="bg-2 rounded-lg w-fit">
              <img src={book} alt="#" className="object-contain" />
            </div>

            <div className="bg-2 rounded-lg w-fit">
              <img src={book} alt="#" className="object-contain" />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <button>
              <CircleChevronLeft />
            </button>
            <button>
              <CircleChevronRight />
            </button>
          </div>
        </div>
      </section>

      <SectionBox  button="hidden" />

    </>
  );
};

export default Home;
