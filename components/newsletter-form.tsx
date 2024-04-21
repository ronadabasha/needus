import TextInput from "./text-input";
import Button, { ButtonKind } from "./button";
import { FormEvent, useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
    setEmail((e?.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    //todo connection with backend
    setSubscribed(true);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex items-end max-w-[315px] sm:max-w-[715px]"
    >
      <TextInput
        value={email}
        onChange={(e) => handleOnChange(e)}
        type="email"
        placeholder="Enter your email"
        customStyle="px-4 py-2 h-9 md:h-[73px] "
      />
      <Button
        kind={subscribed ? ButtonKind.primaryBlack : ButtonKind.primary}
        disabled={subscribed}
        type="submit"
        customStyle="py-[10px] md:py-6 px-[16px] md:px-[75px] "
      >
        {subscribed ? "Subscribed!" : "Subscribe"}
      </Button>
    </form>
  );
};

export default NewsletterForm;
