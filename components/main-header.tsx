"use client";

import Currency from "./currency";
import Language from "./language";

const MainHeader = () => {
  return (
    <div className="hidden lg:flex bg-needus-gray justify-center w-full">
      <div className="w-full max-w-8xl py-5 pl-20 pr-5 px-">
        <div className="flex justify-between">
          <p className="text-[16px] leading-[19px] text-white">
            Welcome to Needus & Get the best product
          </p>
          <div className="flex">
            <Language />
            <span className="text-white text-[20px] leading-5 px-5 -mt-0.5">
              |
            </span>
            <Currency />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
