
const Description = () => {
  return (
    <div className=" flex flex-col mt-[100px]">
      <div className=" flex flex-col gap-y-[13px] h-[144px] ">
        <p className=" text-4xl font-sans font-bold text-[#424241] ">
          {" "}
          Classy products{" "}
        </p>
        <p className=" text-4xl font-sans font-bold text-[#424241] ">
          {" "}
          for your Home{" "}
        </p>
        <p className=" text-4xl font-sans font-bold text-[#424241] ">
          {" "}
          Decoration
        </p>
      </div>
      <div className=" flex flex-col gap-y-1 mt-6 text-[16px] text-[#909090]">
        {" "}
        <p>Any home decor elements you looking for </p>
        <p>is available here</p>
      </div>
      <div className=" flex flex-row  mt-7 gap-x-5 items-center ">
        <div className="bg-[#424241] w-[90px] h-[35px] text-white text-xs  items-center justify-center">
          {" "}
          <p className="py-2 px-3">Shop Now</p>
        </div>
        <div className=" flex flex-row gap-x-4 items-center">
            <div className=" h-7 w-7 border-black border rounded-full items-center justify-center py-1 px-[3px]">
                <img src="/Play.svg" alt="play" className=" h-4 w-4 ml-[3px]"/>
            </div>
            <p className="text-[#424241] text-xs"> watch video</p>
        </div>
      </div>
      <div className=" flex flex-row mt-10 gap-9">
        <div className=" flex flex-col">
            <p className=" text-3xl text-[#424241] font-sans font-medium">321+</p>
            <p className=" text-[#909090] text-xs">Decoration <br className=" mt-1" /> Products</p>
        </div>
        <div className=" flex flex-col">
            <p className=" text-3xl text-[#424241] font-sans font-medium">25+</p>
            <p className=" text-[#909090] text-xs">Award <br className=" mt-1" /> Winning</p>
        </div>
        <div className=" flex flex-col">
            <p className=" text-3xl text-[#424241] font-sans font-medium">15+</p>
            <p className=" text-[#909090] text-xs">Years <br className=" mt-1" /> Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
