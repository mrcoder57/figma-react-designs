import { useState } from "react";
const Product = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  return (
    <div className=" flex flex-col items-center z-50">
      <div className=" h-[520px] w-[330px]">
        <img src="/vase.png" alt="vase" className=" w-full h-full" />
      </div>
      <div className=" flex flex-row bg-[#FFFFFF] shadow-lg shadow-[#0000000D] w-[400px] h-20 mt-[-100px] mb-96 items-center">
        <div className=" mx-5 items-center gap-y-1 ">
          <p className=" text-[#909090] text-xs"> Antique Vase</p>

          <p className=" text-sm font-sans font-semibold ">$175.00</p>
        </div>
        <div className=" flex flex-row mx-2 gap-x-4">
          <div className=" h-8 w-8 bg-[#F6F4F1] items-center ">
            <button className=" px-3 py-1 font-bold" onClick={decrement}>
              -
            </button>
          </div>
          <div className=" h-8 w-8 bg-[#ffff] border ">
            <input
              type="text"
              className=" px-3 py-1 font-bold w-8 "
              readOnly
              value={count}
            />
          </div>
          <div className=" h-8 w-8 bg-[#F6F4F1]">
            <button className=" px-3 py-1 font-bold" onClick={increment}>
              +
            </button>
          </div>
        </div>
        <div className=" bg-[#968864] h-8 w-20 mx-5">
          <p className=" text-white text-center text-[10px] font-bold py-2">
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
