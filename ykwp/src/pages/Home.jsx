import Navbar from "../designs/Navbar.jsx";
import { styles } from "../constants/styles.js";
import { img, book } from "../constants/images.js";
import CustomButton from "../components/CustomButton.jsx";

const Home = () => {
  return (
    <>
        <Navbar />
      {/* <div className="flex flex-col items-center justify-center w-vh mx-[40px] md:mx-[100px] lg:mx-[180px]  "> */}

        <section className="flex flex-col-reverse ll:flex-row items-center justify-between w-full px-[40px] md:px-[180px] lg:px-[220px] py-[20px] ">
          <div className="w-fit text-center ll:text-start space-y-6">
            <p className={`${styles.smTitle} hidden ll:flex`}>
              WELCOME TO YKWP:
            </p>
            <h1 className={`${styles.xlTitle} text-mpurple text-center ll:text-start`}>
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

        <section className="flex flex-col items-center justify-center w-full bg-1 px-[40px] md:px-[180px] lg:px-[220px]">
          <div className="space-y-9">
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
          </div>
        </section>
        {/* <div className="w-full h-[147px] sm:h-[174px] absolute bg-red-500 top-[1161px] md:top-[803px] -z-10"></div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
