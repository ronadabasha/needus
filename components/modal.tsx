import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";

export interface Props {
  button?: React.ReactNode | string;
  panel?: React.ReactNode | string;
}

const Modal = ({ button, panel }: Props) => {
  return (
    <Popover.Group className="flex lg:hidden">
      <Popover className="flex justify-center w-full h-full">
        {({ open, close }) => (
          <>
            <Popover.Button className={clsx("outline-none bg-transparent p-0")}>
              {button}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="absolute top-[75px] right-1 z-10 max-w-[352px] overflow-hidden shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] rounded-b-[5px] bg-white"
              >
                {panel}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
};

export default Modal;
