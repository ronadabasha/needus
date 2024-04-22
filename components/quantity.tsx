import Button, { ButtonKind } from "./button";
import MinusIcon from "./icons/minus-icon";
import PlusIcon from "./icons/plus-icon";

const Quantity = () => {
  return (
    <div>
      <Button
        kind={ButtonKind.outlineSecondary}
        customStyle="py-[18px] px-[21px]"
      >
        <MinusIcon />
      </Button>
      <span className="h2-inter font-normal pb-[10px] pt-[11px] px-[29px] border-t border-b">
        1
      </span>
      <Button
        kind={ButtonKind.outlineSecondary}
        customStyle="py-[18px] px-[21px]"
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default Quantity;
