import React, { useState } from 'react';
import Data from '../../DATA.json';
import FilterCards from './FilterCards';
import Buttons from './FilterButtons';
import './Filters.css'

const App = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.type))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.type === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="overall-container">
        
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <FilterCards item={item} />
        
      </div>
    </>
  );
};

export default App;
