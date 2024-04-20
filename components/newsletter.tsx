"use client";
import { FormEvent, useState } from "react";
import Button, { ButtonKind } from "./button";
import TextInput from "./text-input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
    console.log("event", e);
    setEmail((e?.target as HTMLInputElement).value);
  };

  const handleOnClick = () => {
    //todo connection with backend
    setSubscribed(true);
  };
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
          <div className="flex items-end max-w-[315px] sm:max-w-[715px]">
            <TextInput
              value={email}
              onChange={(e) => handleOnChange(e)}
              type="email"
              placeholder="Enter your email"
            />
            <Button
              kind={subscribed ? ButtonKind.disabled : ButtonKind.primary}
              disabled={subscribed}
              type="submit"
              onClick={handleOnClick}
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
