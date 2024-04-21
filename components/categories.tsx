import { categories } from "@/data/categories";
import ListBox from "./listbox";

const Categories = () => {
  return (
    <ListBox
      items={categories}
      listStyle="mt-2.5 px-6 pt-2"
      selectedItemCustomStyle="text-needus-black px-[5px] xl:px-[30px] py-[26px]"
      listItemCustomStyle="py-[18px]"
    />
  );
};

export default Categories;
