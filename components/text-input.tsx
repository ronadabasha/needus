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
      className={`text-[#969696] block w-full h5-inter-d xl:h4-inter-d outline-none bg-white ${customStyle}`}
    />
  );
};

export default TextInput;
