"use client";

import { Listbox, Menu } from "@headlessui/react";
import { useState } from "react";
import Chevron from "./icons/chevron";

export type ListBoxItem = {
  name: string;
  href?: string;
  target?: string;
};

type Props = {
  items: ListBoxItem[];
};

const ListBox = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="relative">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="text-white h5-inter uppercase flex justify-center font-light">
          {selectedItem.name}
          <Chevron className="ml-2 h-[13px] w-[13px] mt-0.5" />
        </Listbox.Button>
        <Listbox.Options className="absolute mt-2.5 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)]">
          {items.map((item) => (
            <Listbox.Option
              key={item.name}
              value={item}
              className="bg-white text-needus-black font-light h5-inter uppercase cursor-pointer py-1 px-3 border-b border-color-[rgba(217, 217, 217, 1)]"
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ListBox;
