"use client";

import { lanaguages } from "@/data/languages";
import ListBox from "./listbox";
import { currency } from "@/data/currency";

const MainHeader = () => {
  return (
    <div className="hidden desktop:flex justify-between bg-needus-black py-5 pl-20 pr-12">
      <p className="text-[16px] leading-[19px] text-white">
        Welcome to Needus & Get the best product
      </p>
      <div className="flex">
        <ListBox items={lanaguages} />{" "}
        <span className="text-white text-[20px] leading-5 px-5 -mt-0.5">|</span>
        <ListBox items={currency} />
      </div>
    </div>
  );
};

export default MainHeader;
