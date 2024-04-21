"use client";

import { Listbox, Menu } from "@headlessui/react";
import { useState } from "react";
import Chevron from "./icons/chevron";
import clsx from "clsx";

export type ListBoxItem = {
  name: string;
  href?: string;
  target?: string;
};

type Props = {
  items: ListBoxItem[];
  listStyle?: string;
  selectedItemCustomStyle?: string;
  listItemCustomStyle?: string;
};

const ListBox = ({
  items,
  listStyle,
  selectedItemCustomStyle,
  listItemCustomStyle,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="relative">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button
          className={clsx(
            "h5-inter flex justify-center font-light",
            selectedItemCustomStyle
          )}
        >
          {selectedItem.name}
          <Chevron className="ml-2 h-[13px] w-[13px] mt-0.5" />
        </Listbox.Button>
        <Listbox.Options
          className={clsx(
            "absolute bg-white z-10 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)]",
            listStyle
          )}
        >
          {items.map((item) => (
            <Listbox.Option
              key={item.name}
              value={item}
              className={clsx(
                "bg-white text-needus-gray font-light h5-inter xl:h4-inter cursor-pointer border-b border-color-[rgba(217, 217, 217, 1)]",
                listItemCustomStyle
              )}
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
