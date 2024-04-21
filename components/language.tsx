import ListBox from "./listbox";
import { lanaguages } from "@/data/languages";

const Language = () => {
  return (
    <ListBox
      items={lanaguages}
      listStyle="mt-5 px-3"
      selectedItemCustomStyle="text-white uppercase"
      listItemCustomStyle="uppercase py-2"
    />
  );
};

export default Language;
