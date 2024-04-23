export enum ButtonKind {
  primary = "py-[19px] md:py-6 px-[16px] md:px-[63px] button-primary bg-needus-light-red text-white border-needus-light-red hover:bg-needus-dark-red hover:border-needus-dark-red",
  primaryBig = "py-[10px] md:py-6 px-[16px] md:px-[75px] uppercase newsletter-button bg-needus-light-red text-white border-needus-light-red hover:bg-needus-dark-red hover:border-needus-dark-red",
  primaryBlack = "py-[19px] md:py-6 px-[16px] md:px-[63px] button-primary bg-needus-black text-white border-needus-black hover:bg-needus-black hover:border-needus-black",
  primaryOutlined = "py-[19px] md:py-6 px-[16px] md:px-[48px] button-outlined-primary bg-white text-needus-light-red border-needus-light-red hover:bg-[#F3F3F3]",
  secondary = "button-primary border border-transparent px-[11px] md:px-[48px] py-[19px] bg-white text-needus-grey ",
  outlineSecondary = "text-needus-grey button-secondary hover:bg-[#F3F3F3]",
}

export interface ButtonProps {
  kind?: ButtonKind;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  customStyle?: string;
}

const Button = ({
  kind = ButtonKind.primary,
  disabled,
  icon,
  onClick,
  children,
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
      className={`border border-solid rounded-none transition ease-in-out duration-300 ${kind} ${customStyle}`}
      type={type}
      {...buttonProps}
    >
      <div className="flex items-center justify-between">
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
