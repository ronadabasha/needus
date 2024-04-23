import { categories } from "@/data/categories";
import ListBox from "./listbox";

const CategoriesDesktop = () => {
  return (
    <ListBox
      items={categories}
      listStyle="mt-2.5 px-6 pt-2"
      selectedItemCustomStyle="h5-inter xl:h4-inter font-light text-needus-black px-[5px] xl:px-[30px] py-[29px] xl:py-[26px]"
      listItemCustomStyle="py-[18px]"
    />
  );
};

export default CategoriesDesktop;
