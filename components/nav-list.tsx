import Link from "next/link";

export type NavLink = {
  name: string;
  href: string;
  target?: string;
};

type Props = {
  header?: string;
  items: NavLink[];
};

const NavList = ({ header, items }: Props) => {
  return items.length > 0 ? (
    <div className="pl-9">
      {header && <h3 className="h3-inter uppercase pb-7">{header}</h3>}
      <ul className="list-none">
        {(items ?? []).map((navLink) => {
          return (
            <li key={navLink.name} className="">
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
