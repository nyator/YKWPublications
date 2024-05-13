import { styles } from "../constants/styles.js";
import { shops } from "../constants/index.js";
import CustomButton from "../components/CustomButton";

const Bookshop = () => {
  return (
    <section className="w-full bg-1 px-[40px] md:px-[180px] lg:px-[220px] py-[30px] ll:py-[80px]">
      <div className="flex flex-col items-center justify-start space-y-2">
        <div className="text-center space-y-4">
          <p className={`${styles.smTitle}`}>WANT TO PURCHASE A BOOK?</p>
          <h1 className={`${styles.contentTitle} text-3 text-center`}>
            Bookshops
          </h1>
        </div>
    
          <div className="flex flex-wrap items-center justify-center p-5 w-1/2 gap-5">
            {shops.map((shop) => (
              <p
                className={`${styles.paragraph} bg-2 text-center px-6 py-3 rounded-[10px]`}
              >
                {shop}
              </p>
            ))}
          </div>
          <p className={`${styles.smTitle}`}>OR CALL</p>
          <CustomButton
            title="Get in touch"
            to="#"
            style="bg-mpurple text-white text-nowrap mt-7"
          />

        </div>
        
    </section>
  );
};

export default Bookshop;
