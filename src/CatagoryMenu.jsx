import React from "react";

export const CatagoryMenu = ({ filterMenu, catItems }) => {
  return (
    <>
      <div className="menu-tab d-flex justify-content-around">
        {catItems.map((curElem, index) => {
          return (
            <button
              className="btn btn-warning"
              key={index}
              onClick={() => filterMenu(curElem)}
            >
              {curElem}
            </button>
          );
        })}
        {/* <button
          className="btn btn-warning"
          onClick={() => filterMenu("breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn btn-warning"
          className="btn btn-warning"
          onClick={() => filterMenu("lunch")}
        >
          Lunch
        </button>
        <button
          className="btn btn-warning"
          className="btn btn-warning"
          onClick={() => filterMenu("evening")}
        >
          Evening
        </button>
        <button
          className="btn btn-warning"
          className="btn btn-warning"
          onClick={() => filterMenu("dinner")}
        >
          Dinner
        </button> */}
        {/* <button
          className="btn btn-warning"
          className="btn btn-warning"
          onClick={() => setItems(Menu)}
        >
          All
        </button> */}
      </div>
    </>
  );
};
