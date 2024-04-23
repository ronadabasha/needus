"use client";
import Link from "next/link";
import FavouritesIcon from "./icons/favourites-icon";
import CartIcon from "./icons/cart-icon";
import ProfileLinks from "./profile-links";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";
import CategoriesDesktop from "./categories-desktop";
import SearchForm from "./search-form";
import SearchIcon from "./icons/search-icon";
import Modal from "./modal";
import AvatarIcon from "./icons/avatar-icon";

const SecondHeader = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between max-w-8xl mx-auto pl-4 pr-7 pt-7 pb-3 lg:pl-20 lg:pr-7 lg:py-9">
        <NavbarMobile />
        <Link
          href="/"
          className="brand text-center lg:text-left flex-1 lg:flex-none items-center"
        >
          Needus<span className="text-needus-light-red">.</span>
        </Link>
        <div className="flex flex-1 items-center justify-end lg:justify-center">
          <div className="hidden lg:flex items-center justify-between border border-color-[rgba(240, 240, 240, 1)]">
            <div className="flex">
              <SearchForm />
              <CategoriesDesktop />
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
                <span className="absolute -top-[2px] md:-top-[18px] left-[15px] md:left-[10px] badge flex items-center justify-center text-white w-[12px] md:w-[30px] h-[12px] md:h-[30px] bg-[#E23000] rounded-full">
                  6
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        button={
          <SearchIcon
            strokeColor="black"
            className="absolute top-10 right-[140px]"
          />
        }
        panel={<SearchForm />}
      />
      <Modal
        button={
          <AvatarIcon className="absolute top-10 right-[105px] w-[23px] h-[23px]" />
        }
        panel={<ProfileLinks />}
      />
      <NavbarDesktop />
    </>
  );
};

export default SecondHeader;
