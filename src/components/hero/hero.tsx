import Description from "./description"
import Product from "./Product"
import Slider from "./slider"

const Hero = () => {
  return (
    <div className=" flex lg:flex-row flex-col mx-24 lg:gap-x-16"> 
    <div className=" absolute top-[355px] left-[560px] z-0 font-bold text-[#e0dede] hidden lg:block">
      <h1 className=" text-9xl">Embellie</h1>
    </div>
    <Description/> 
    <Product/>
    <Slider/>
     </div>
  )
}

export default Hero