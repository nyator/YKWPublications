import DarkNavbar from "../designs/DarkNavbar"
import { styles } from "../constants/styles"

const Publications = () => {
  return (
    <>
    {/* <div className="w-full h-[128px] absolute bg-3 -z-10"></div>
    <div className="w-full h-[147px] sm:h-[174px] absolute tb top-[126px] -z-10"></div> */}
  
        <DarkNavbar />
      <div className="flex flex-col items-start justify-center w-ful  ">
        <h1 className={`${styles.bigTitle} flex w-full items-center justify-center tb -z-10`}>Publications</h1></div>
        Publications
    
    </>
  )
}

export default Publications