import React from 'react';
import Data from '../../DATA.json';
import './Filters.css'

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="btn-container">
        <button
          className=""
          onClick={() => setItem(Data)}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className=""
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}       
      </div>
    </>
  );
};

export default Buttons;
