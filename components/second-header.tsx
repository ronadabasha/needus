"use client";
import Link from "next/link";
import FavouritesIcon from "./icons/favourites-icon";
import CartIcon from "./icons/cart-icon";
import Search from "./search";
import ProfileLinks from "./profile-links";
import Categories from "./categories";

const SecondHeader = () => {
  return (
    <div className="w-full flex items-center justify-between max-w-8xl mx-auto pl-20 pr-7 py-9">
      <Link href="/" className="h1-inconsolata">
        Needus<span className="text-needus-light-red">.</span>
      </Link>
      <div className="flex items-center">
        <div className="hidden lg:flex items-center justify-between border border-color-[rgba(240, 240, 240, 1)]">
          <div className="flex">
            <Search />
            <Categories />
          </div>
          <ProfileLinks />
        </div>
        <div className="flex items-center pl-10">
          <Link href="#">
            <FavouritesIcon />
          </Link>
          <Link href="#" className="pl-4">
            <span className="block relative">
              <CartIcon />
              <span className="absolute -top-[18px] left-[10px] flex items-center justify-center text-white w-[30px] h-[30px] h5-inter font-semibold bg-[#E23000] rounded-full">
                6
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
