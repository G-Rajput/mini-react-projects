import React from "react";
import MenuList from "./MenuList";
import "./styles.css";

interface MenuItem {
  label: string;
  to: string;
  children?: MenuItem[];
}

interface TreeNavProps {
  menus: MenuItem[];
}

const TreeNav: React.FC<TreeNavProps> = ({ menus }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeNav;
