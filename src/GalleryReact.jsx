import React, { useState } from "react";
import { CatagoryMenu } from "./CatagoryMenu";
import Menu from "./menu";
import MenuItems from "./MenuItems";

const allCatValue = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
// Set is used to remove duplicate value
// ... is used to change data from object to array [...]

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValue);
  const filterMenu = (categItems) => {
    if (categItems === "All") {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItems;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <h3 className="mt-5 text-center main-heading">Order Your Dish</h3>
      <hr />
      <div className="menu-tabs container">
        <CatagoryMenu filterMenu={filterMenu} catItems={catItems} />
      </div>

      {/* main items */}
      <MenuItems items={items} />
    </>
  );
};

export default GalleryReact;
