export enum ButtonKind {
  primary = "bg-needus-light-red text-white border-needus-light-red hover:bg-needus-dark-red hover:border-needus-dark-red",
  outlinedPrimary = "",
  secondary = "",
  outlineSecondary = "",
  disabled = "bg-needus-black text-white border-needus-black hover:bg-needus-black hover:border-needus-black",
}

export interface ButtonProps {
  kind?: ButtonKind;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: React.ReactNode;
  title?: string;
  type?: "button" | "submit" | "reset";
  customStyle?: string;
}

const Button = ({
  kind = ButtonKind.primary,
  disabled,
  icon,
  onClick,
  children,
  title,
  type = "button",
  customStyle,
  ...buttonProps
}: ButtonProps) => {
  const handleOnclick = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };
  return (
    <button
      disabled={disabled}
      onClick={handleOnclick}
      className={`tabs-m md:h4-inter-d uppercase  py-[10px] md:py-6 px-[16px] md:px-[75px] border border-solid  rounded-none transition ease-in-out duration-300 ${kind} ${customStyle}`}
      type={type}
      {...buttonProps}
    >
      {icon && <div>{icon}</div>}
      <span title={title}>{children}</span>
    </button>
  );
};

export default Button;
