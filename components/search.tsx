import { FormEvent, useState } from "react";
import Button, { ButtonKind } from "./button";
import SearchIcon from "./icons/search-icon";
import TextInput from "./text-input";

const Search = () => {
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
      className="flex items-end max-w-[315px] sm:max-w-[715px] p-[5px] border-r border-color-[rgba(240, 240, 240, 1)]"
    >
      <TextInput
        value={searchKeyword}
        onChange={(e) => handleOnChange(e)}
        type="text"
        placeholder="Search Products"
        customStyle="h-[65px] pl-[15px] xl:pl-[45px] w-[230px] xl:min-w-[250px] min-[1400px]:min-w-[380px]"
      />
      <Button
        kind={ButtonKind.primaryBlack}
        type="submit"
        customStyle="px-[18px] py-5 px-4 py-1 -mt-[2px]"
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
