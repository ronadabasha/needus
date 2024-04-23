import { Dialog, Transition } from "@headlessui/react";
import { Fragment, SyntheticEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pages } from "@/data/pages";
import ListBox from "./listbox";
import MenuIcon from "./icons/menu-icon";
import CrossIcon from "./icons/cross-icon";
import MobileDropdown from "./mobile-dropdown";
import { categories } from "@/data/categories";

const NavbarMobile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-1 lg:hidden justify-start text-white">
        <button
          type="button"
          className="bg-[#E73C17] p-[9px]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon />
        </button>
      </div>
      <Transition show={mobileMenuOpen} as={Fragment} appear>
        <Dialog
          as="div"
          static
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Dialog.Panel className="fixed max-w-full inset-0 right-0 z-20 w-full bg-[#2F333A] text-white">
              <div className="flex items-center justify-start p-[19px] h-[75px] w-full">
                <button
                  type="button"
                  className="h-[37px] w-[37px] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <CrossIcon />
                </button>
              </div>
              <div
                className="px-5 py-4 flex flex-col"
                onClick={({ target }: SyntheticEvent) => {
                  if ((target as HTMLElement)?.classList.contains("nav-link")) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <div className="flex flex-col items-start text-white">
                  <MobileDropdown items={categories} />
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3 mb-4"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3 mb-4"
                    href="#"
                  >
                    About
                  </Link>
                  <MobileDropdown items={pages} header="Pages" />
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3 mb-4"
                    href="/"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex items-center text-white border-t lg:border-l-2 mt-7 border-[#f0f0f0b3] pl-5 py-4">
                  <Image
                    width="40"
                    height="40"
                    src="/assets/headphones.png"
                    alt="headphones icon"
                    className="mr-6"
                  />
                  <p>
                    <span className="block uppercase text-[15px] leading-[18px] font-inter font-light mb-[5px]">
                      Contact Us 24/7
                    </span>
                    <span className="block text-[18px] leading-[21px] font-inter font-medium">
                      {" "}
                      +12012987481
                    </span>
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavbarMobile;
