import clsx from "clsx";

type Props = {
  customStyle: string;
  text: string;
};

const Label = ({ customStyle, text }: Props) => {
  return (
    <li
      className={clsx(
        "tabs-m mb-[10px] uppercase py-[5px] px-[19px] text-white rounded-[100px]",
        customStyle
      )}
    >
      {text}
    </li>
  );
};
export default Label;
