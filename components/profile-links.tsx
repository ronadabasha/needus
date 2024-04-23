import Link from "next/link";

const ProfileLinks = () => {
  return (
    <div className="pr-5 xl:pr-7 pl-5 xl:pl-[50px] min-[1400px]:pl-[125px]">
      <Link href="#" className="h5-inter xl:h4-inter font-light">
        Login
      </Link>
      <span className="h4-inter font-light text-[#F0F0F0] px-2">|</span>
      <Link href="#" className="h5-inter xl:h4-inter font-light">
        Signup
      </Link>
    </div>
  );
};

export default ProfileLinks;
