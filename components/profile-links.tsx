import Link from "next/link";

const ProfileLinks = () => {
  return (
    <div className="p-9 lg:py-[10px] lg:pr-5 xl:pr-7 pl-5 xl:pl-[50px] min-[1400px]:pl-[125px]">
      <Link href="#" className="h4-inter font-bold lg:font-light">
        Login
      </Link>
      <span className="h4-inter font-light text-[#F0F0F0] px-2">|</span>
      <Link href="#" className="h4-inter font-bold lg:font-light">
        Signup
      </Link>
    </div>
  );
};

export default ProfileLinks;
