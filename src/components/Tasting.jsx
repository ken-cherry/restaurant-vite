import React from "react";
import TastingItem from "./TastingItem";

const Tasting = ({ items }) => {
  return (
    <div className="section-center">
      <header>Chef's Tasting</header>
      <div className="menu-cost menu-taste"> $180 per person</div>
      <div className="menu-tasting">
        {items.map((tastingItem) => {
          return <TastingItem key={tastingItem.id} {...tastingItem} />;
        })}
      </div>
    </div>
  );
};

export default Tasting;
