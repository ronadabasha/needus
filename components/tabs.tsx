"use client";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const Tabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log("selectedIndex", selectedIndex);
  return (
    <div className="max-w-8xl mx-auto text-center px-5">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="border-b border-color-[rgba(217, 217, 217, 1)]">
          <Tab
            className={clsx(
              "tabs text-black py-2 md:py-4 px-0 md:px-9 mx-3 md:mx-10 outline-none ui-selected:text-red border-b",
              selectedIndex === 0 ? "border-needus-light-red" : "border-white"
            )}
          >
            Description
          </Tab>
          <Tab
            className={clsx(
              "tabs text-black py-2 md:py-4 px-0 md:px-9 mx-3 md:mx-10 outline-none ui-selected:text-red border-b",
              selectedIndex === 1 ? "border-needus-light-red" : "border-white"
            )}
          >
            Specification
          </Tab>
          <Tab
            className={clsx(
              "tabs text-black py-2 md:py-4 px-0 md:px-9 mx-3 md:mx-10 outline-none ui-selected:text-red border-b",
              selectedIndex === 2 ? "border-needus-light-red" : "border-white"
            )}
          >
            Reviews
          </Tab>
        </Tab.List>
        <Tab.Panels className="max-w-[1016px] mx-auto py-4 text-left">
          <Tab.Panel>
            The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around
            OLED TV we have tested. Although all OLEDs deliver similar fantastic
            picture quality, this one stands out for its value because it has
            many gaming oriented features that are great for gamers. *Only 65G2
            is shown in the image for example purposes. All 2022 LG OLED models
            feature eco-friendly packaging. **65C2 Stand model is at a minimum
            39% lighter than the C1 series.
            <Link href="#" className="text-needus-light-red">
              {" "}
              More...
            </Link>
          </Tab.Panel>
          <Tab.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id
            consectetur nunc purus in lectus. Donec non velit a odio volutpat
            volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit
            sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque.
            Integer efficitur interdum nunc, ut elementum nulla. Phasellus
            feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis
            porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi
            at nunc suscipit malesuada.
          </Tab.Panel>
          <Tab.Panel>
            Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam
            tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean
            magna massa, tempus quis risus nec, sollicitudin consectetur mi.
            Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices
            risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at
            pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet
            velit laoreet, non feugiat tellus elementum.
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
