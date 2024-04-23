"use client";

import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef } from "react";
import clsx from "clsx";
import Chevron from "./icons/chevron";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { pages } from "@/data/pages";
import products from "@/data/products";
import ListBox from "./listbox";
import MenuIcon from "./icons/menu-icon";

const NavbarDesktop = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutDuration = 300;
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined);

  const closePopover = () =>
    buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout.current);
    if (open) return;
    buttonRef.current?.click();
  };

  const onMouseLeave = (open: boolean) => {
    if (!open) return;
    timeout.current = setTimeout(() => closePopover(), timeoutDuration);
  };
  const pathname = usePathname();
  return (
    <nav className="mx-auto flex items-center justify-between font-inter bg-[#2F333A]">
      <div className="w-full max-w-8xl mx-auto pr-5 min-[1130px]:pr-20 hidden lg:flex justify-between items-center ">
        <Popover.Group className="md:flex h-full md:h-[80px] items-center self-start justify-between">
          <Popover className="relative h-full">
            {({ open, close }) => (
              <>
                <Popover.Button
                  ref={buttonRef}
                  className={clsx(
                    "text-[24px] leading-[29px] font-inter font-medium outline-none pl-5 min-[1130px]:pl-[80px] pr-5 h-full flex justify-center items-center text-white bg-[#E73C17]"
                  )}
                  onMouseEnter={() => onMouseEnter(open)}
                  onMouseLeave={() => onMouseLeave(open)}
                >
                  <MenuIcon />
                  <span className="ml-6">All Categories</span>
                  <Chevron className="ml-2 h-[30px] w-[30px]" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    static
                    className="absolute z-10 w-screen max-w-[352px] overflow-hidden shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] rounded-b-[5px] bg-white top-full"
                    onMouseEnter={() => onMouseEnter(open)}
                    onMouseLeave={() => onMouseLeave(open)}
                  >
                    <div className="pt-2 px-6 -mb-1">
                      {categories?.map((item) => (
                        <div key={item.name}>
                          <div className="flex-auto">
                            <Link
                              href="#"
                              onClick={close}
                              className={clsx(
                                "block py-[18px] text-[20px] leading-[24px] border-b border-[#D9D9D9]"
                              )}
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="flex items-center text-white">
          <Link
            className="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3"
            href="#"
          >
            About
          </Link>
          <ListBox
            header="Product"
            items={[]}
            listStyle="mt-2.5 px-6 pt-2"
            selectedItemCustomStyle="uppercase text-[16px] leading-[19px] font-inter font-normal px-3"
            listItemCustomStyle="py-[18px]"
          />
          <ListBox
            header="Pages"
            items={pages}
            listStyle="mt-2.5 px-6 pt-2"
            selectedItemCustomStyle="uppercase text-[16px] leading-[19px] font-inter font-normal px-3"
            listItemCustomStyle="py-[18px]"
          />
          <Link
            className="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3"
            href="/"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center text-white border-l-2 border-[#F0F0F0] pl-5 py-4">
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
    </nav>
  );
};

export default NavbarDesktop;
