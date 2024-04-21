import ListBox from "./listbox";
import { currency } from "@/data/currency";

const Currency = () => {
  return (
    <ListBox
      items={currency}
      listStyle="mt-5 px-3"
      selectedItemCustomStyle="text-white uppercase"
      listItemCustomStyle="uppercase py-2"
    />
  );
};

export default Currency;
