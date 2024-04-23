import { informations } from "@/data/information";
import NavList from "./nav-list";
import { account } from "@/data/account";
import { store } from "@/data/store";
import { pages } from "@/data/pages";
import MapIcon from "./icons/map-icon";
import PhoneIcon from "./icons/phone-icon";
import FacebookIcon from "./icons/facebook-icon";
import WhatsappIcon from "./icons/whatsapp-icon";
import InstagramIcon from "./icons/instagram-icon";
import YoutubeIcon from "./icons/youtube-icon";
import Link from "next/link";

const SiteFooter = () => (
  <footer className="pb-[95px] md:pb-0 flex justify-center w-full bg-needus-gray text-white">
    <div className="w-full max-w-8xl px-8 xl:pl-20 pt-10 pb-5 lg:py-[60px] xl:pr-5">
      <div className="hidden lg:flex flex-row justify-between ">
        <div>
          <h3 className="h3-inter uppercase pb-7">About Us</h3>
          <p className="text-[18px] leading-[30px] font-inter font-normal text-white max-w-[328px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.{" "}
          </p>
          <ul className="mt-7">
            <li className="inline-block mr-[10px]">
              <FacebookIcon className="w-[30px] h-[30px]" />
            </li>
            <li className="inline-block mr-[10px]">
              <WhatsappIcon className="w-[30px] h-[30px]" />
            </li>
            <li className="inline-block mr-[10px]">
              <InstagramIcon className="w-[30px] h-[30px]" />
            </li>
            <li className="inline-block mr-[10px]">
              <YoutubeIcon className="w-[30px] h-[30px]" />
            </li>
          </ul>
        </div>
        <NavList header="Information" items={informations} />
        <NavList header="Account" items={account} />
        <NavList header="Store" items={store} />
        <div className="pl-9">
          <h3 className="h3-inter uppercase pb-7">Contact Us</h3>
          <p className="text-[18px] leading-[30px] font-inter font-normal text-white">
            If you have any query, please contact us
            <a
              href="mailto: needus24@gmail.com"
              className="block text-[#E73C17]"
            >
              needus24@gmail.com
            </a>
          </p>
          <ul>
            <li className="mt-5">
              <MapIcon className="inline-block w-10 h-10" />{" "}
              <span className="inline-block">California, USA</span>
            </li>
            <li className="mt-5">
              <PhoneIcon className="inline-block w-10 h-10" />{" "}
              <a href="tel: 0012012987481" className="inline-block">
                +12012987481
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="block sm:text-center lg:hidden">
        <ul>
          {pages?.map((page) => {
            return (
              <li key={page.name}>
                <Link
                  href={page.href}
                  className="uppercase underline h3-inter-m mb-5"
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="font-inter font-normal text-[15px] leading-[18px] text-center text-white pt-12 lg:pt-[90px] lg:pb-[30px] lg:mt-[90px] lg:border-t border-[rgb(255 255 255 / 50%)]">
        Copyright. 2023 All Right Reserved
      </p>
    </div>
  </footer>
);

export default SiteFooter;
