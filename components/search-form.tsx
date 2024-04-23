import { FormEvent, useState } from "react";
import Button, { ButtonKind } from "./button";
import SearchIcon from "./icons/search-icon";
import TextInput from "./text-input";

const SearchForm = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = () => {
    //todo
  };

  const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
    setSearchKeyword((e?.target as HTMLInputElement).value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex items-end max-w-[315px] sm:max-w-[440px] p-[5px] border-r border-color-[rgba(240, 240, 240, 1)]"
    >
      <TextInput
        value={searchKeyword}
        onChange={(e) => handleOnChange(e)}
        type="text"
        placeholder="Search Products"
        customStyle="font-light h-[65px] pl-[15px] xl:pl-[45px] w-[230px] xl:min-w-[250px] min-[1400px]:min-w-[365px]"
      />
      <Button
        kind={ButtonKind.primaryBlack}
        type="submit"
        customStyle="md:!px-[18px] md:!py-[21px] -mt-[2px]"
        icon={<SearchIcon strokeColor="#ffffff" />}
      />
    </form>
  );
};

export default SearchForm;
