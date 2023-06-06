import React from 'react';

import '../Css/ThreeColumnGrid.css';

const ThreeColumnGrid = ({ children }) => {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
};

export default ThreeColumnGrid;
