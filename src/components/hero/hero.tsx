import Description from "./description"
import Product from "./Product"
import Slider from "./slider"

const Hero = () => {
  return (
    <div className=" flex flex-row mx-24 gap-x-16"> <Description/> 
    <Product/>
    <Slider/>
     </div>
  )
}

export default Hero