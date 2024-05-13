import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

const CustomButton = (props) => {
  return (
    <Link to={props.to}>
      <button className={`${props.style} flex text-[16px] rounded-[50px] px-[50px] py-[15px] font-poppins font-medium border-none `}>
      <PhoneCall className={`${props.button} mr-4`} />
        <h1>{props.title}</h1>
      </button>
    </Link>
  );
};

export default CustomButton;
