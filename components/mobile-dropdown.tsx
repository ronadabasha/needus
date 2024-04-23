import ListBox, { ListBoxItem } from "./listbox";

type Props = {
  items: ListBoxItem[];
  header?: string;
};

const MobileDropdown = ({ items, header }: Props) => {
  return (
    <ListBox
      header={header}
      items={items}
      listStyle="bg-transparent w-full mb-5"
      selectedItemCustomStyle="block uppercase text-[16px] leading-[19px] font-inter font-normal px-3 mb-4 text-white"
      listItemCustomStyle="px-[20px] py-[10px] text-white bg-transparent w-full"
    />
  );
};

export default MobileDropdown;
