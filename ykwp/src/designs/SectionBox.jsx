import CustomButton from "../components/CustomButton";
import { img2 } from "../constants/images";
import { styles } from "../constants/styles";

const SectionBox = (props) => {
  return (
    <section className="w-full px-[40px] md:px-[180px] lg:px-[220px] py-[30px] ll:py-[80px]">
      <div className="flex flex-col ll:flex-row items-center justify-center space-y-10 ll:space-y-0 ll:space-x-[130px]">
        
        <img
          src={img2}
          alt="#"
          className=" w-full max-w-[650px] object-contain rounded-xl"
        />

        <div className="text-start max-w-[650px] space-y-[15px] ">
          <p className={`${styles.smTitle}`}>OUR JOURNEY</p>
          <h1 className={`${styles.contentTitle} text-nowrap text-3`}>
            A<span className="text-mpurple"> Word </span>A Day
          </h1>
          <p className={`${styles.paragraph}`}>
            Founded in 2022, ZeroTech Agency represents the culmination of our
            dream to create a tech company that sets new standards. Our journey
            is in its early stages, but we're fuelled by the excitement of what
            the future holds. We're on a mission to disrupt the status quo, push
            boundaries, and make a difference.
          </p>

        <CustomButton
            title="Get in touch"
            to={props.url}
            style={`${props.button} bg-mpurple text-white text-nowrap mt-7`}
          />
        </div>

      </div>
    </section>
  );
  
};

export default SectionBox;
