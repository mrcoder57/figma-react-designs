import { lans, navIcons, navlinks } from "../utils/constants";

const Navbar = () => {
  return (
    <div className=" bg-[#F6F4F1] max-h-[120px]">
    <div className="bg-[#F6F4F1] mx-16 items-center justify-between overflow-x-hidden flex flex-row ">
      <div className=" flex flex-row mt-2">
        <h2 className=" text-xl font-semibold font-sans leading-[54px] text-left">
          Emb <span className=" text-[#968864] ml-[-4px]">ellie</span>
        </h2>
      </div>
      <div className=" lg:flex hidden flex-row mt-2">
        <div className=" items-center justify-center first-letter:capitalize ">
          {navlinks.map((link, index) => (
            <a className=" mx-2 first-letter:capitalize text-[10px] text-[#909090]" key={index}>{link.name}</a>
          ))}
        </div>
        
      </div>
      <div className=" flex flex-row gap-5 mt-2">
        <div className=" items-center justify-center first-letter:capitalize">
        {lans.map((link, index) => (
            <a className=" mx-1 first-letter:capitalize text-[10px] text-[#909090]" key={index}>{link.name}</a>
          ))}
        </div>
        <div className=" items-center justify-center first-letter:capitalize flex flex-row-reverse">
        {navIcons.map((icon, index) => (
            <img src={icon.icon} className=" h-[21px] w-[21px] mx-2 first-letter:capitalize text-[10px] text-[#424241]" key={index}/>
          ))}
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Navbar;
