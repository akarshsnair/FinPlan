// SmallCard.js

import React from 'react';

const SmallCard = ({ title, value }) => {
  return (
    <div className="border-t border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 rounded-lg p-4 m-4 h-24">
      <h3 className="text-white text-lg mb-2 overflow-hidden">{title}</h3>
      <p className="text-silver text-m overflow-hidden">{value}</p>
    </div>
  );
};

export default SmallCard;

