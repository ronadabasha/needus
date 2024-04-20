import { FormEvent } from "react";

export type TextInputProps = {
  type: "text" | "password" | "email" | "tel";
  value: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  customStyle?: string;
};
const TextInput = ({
  name,
  id,
  placeholder,
  value,
  type = "text",
  customStyle,
  onChange,
}: TextInputProps) => {
  const handleOnchange = (event: FormEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(event);
  };
  return (
    <input
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      onChange={handleOnchange}
      type={type}
      className={`text-needus-grey block w-full h3-inter-m md:h4-inter-d font-normal outline-none h-9 md:h-[73px] px-4 py-2 bg-white ${customStyle}`}
    />
  );
};

export default TextInput;
