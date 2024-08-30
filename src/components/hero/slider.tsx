

const Slider = () => {
  return (
    <div className=' flex flex-col mt-16'>
        <div className=' flex flex-row gap-x-5 items-center'>
            <p className=' text-[#909090] font-sans text-xs'>01</p>
            <p className=' text-[#424241] font-sans text-[16px] font-bold'>Vase</p>
        </div>
        <div className=' h-10 w-0 border-[1px] mt-3 mb-3'></div>
        <div className=' flex flex-row gap-x-5 items-center '>
            <p className=' text-[#909090] font-sans text-xs'>01</p>
            <p className=' text-[#424241] font-sans text-[16px] font-bold'>Carpet</p>
        </div>
        <div className=' flex flex-row gap-x-5 items-center mt-2'>
            <p className=' text-[#909090] font-sans text-xs'>01</p>
            <p className=' text-[#424241] font-sans text-[16px] font-bold'>Lamp Shade</p>
        </div>
        <div className=' flex flex-row gap-x-5 items-center mt-2'>
            <p className=' text-[#909090] font-sans text-xs'>01</p>
            <p className=' text-[#424241] font-sans text-[16px] font-bold'>Wall Decoration</p>
        </div>
    </div>
  )
}

export default Slider