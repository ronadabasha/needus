import clsx from "clsx";
import Link from "next/link";

export type NavLink = {
  name: string;
  href: string;
  target?: string;
};

type Props = {
  header?: string;
  items: NavLink[];
  customStyle?: string;
  listItemCustomStyle?: string;
};

const NavList = ({
  header,
  items,
  customStyle,
  listItemCustomStyle,
}: Props) => {
  return items.length > 0 ? (
    <div className="pl-9">
      {header && <h3 className="h3-inter uppercase pb-7">{header}</h3>}
      <ul className={clsx("list-none", customStyle)}>
        {(items ?? []).map((navLink) => {
          return (
            <li key={navLink.name} className={listItemCustomStyle}>
              <Link
                key={navLink.name}
                href={navLink.href}
                target={navLink.target}
                className="h1-inter-m font-normal inline-block mb-2.5"
              >
                {navLink.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};

export default NavList;
