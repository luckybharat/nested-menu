/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

const NavItem = ({ name, index, array, id }) => {
  const childs = array.filter((x) => x.parent === id);
  return (
    <>
      {childs && childs.length === 0 ? (
        <li>
          <a href="">{name}</a>
        </li>
      ) : (
        <li className="dropdown">
          <a href="">{name}</a>
          <ul className="submenu">
            {childs &&
              childs.map((c, i) => {
                return <NavItem array={array} {...c} key={i} />;
              })}
          </ul>
        </li>
      )}
    </>
  );
};

export default function Navbar() {
  const { data } = useSelector((state) => state.navbar);
  return (
    <div className="nav-wrapper">
      <div className="brand">Brand</div>
      {data && data.length > 0 && (
        <ul className="menu">
          {data
            .filter((i) => i.parent === 0)
            .map((item, index) => {
              return (
                <NavItem array={data} {...item} index={index} key={index} />
              );
            })}
        </ul>
      )}
    </div>
  );
}
