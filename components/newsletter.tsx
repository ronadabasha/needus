"use client";
import NewsletterForm from "./newsletter-form";

const Newsletter = () => {
  return (
    <div className="w-full bg-[url('/assets/newsletter-background.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="w-full flex justify-center bg-[#19191980]">
        <div className="w-full max-w-8xl flex flex-col xl:flex-row items-start sm:items-center xl:justify-between px-5 sm:px-20 py-9 sm:py-7 ">
          <div className="mb-4 xl:mb-0 ">
            <p className="newsletter-title text-white mb-1">
              Join our newsletter and get offers
            </p>
            <p className="newsletter-subtitle text-white">
              Sign up our newsletter
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
