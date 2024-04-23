import clsx from "clsx";

type Props = {
  customStyle: string;
  text: string;
};

const Label = ({ customStyle, text }: Props) => {
  return (
    <li className="md:mb-[10px] text-left">
      <span
        className={clsx(
          "label uppercase py-[5px] px-[19px] text-white rounded-[100px]",
          customStyle
        )}
      >
        {text}
      </span>
    </li>
  );
};
export default Label;
