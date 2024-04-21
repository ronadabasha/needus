export enum ButtonKind {
  primary = "tabs-m md:h4-inter-d uppercase bg-needus-light-red text-white border-needus-light-red hover:bg-needus-dark-red hover:border-needus-dark-red",
  outlinedPrimary = "",
  secondary = "text-needus-grey button-secondary hover:bg-[#F3F3F3]",
  outlineSecondary = "",
  primaryBlack = "bg-needus-black text-white border-needus-black hover:bg-needus-black hover:border-needus-black",
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
      className={`border border-solid  rounded-none transition ease-in-out duration-300 ${kind} ${customStyle}`}
      type={type}
      {...buttonProps}
    >
      <div className="flex items-center justify-between">
        {icon && <span>{icon}</span>}
        <span title={title}>{children}</span>
      </div>
    </button>
  );
};

export default Button;
