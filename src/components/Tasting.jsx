import React from "react";
import TastingItem from "./TastingItem";

const Tasting = ({ items }) => {
  return (
    <div className="section-center">
      <header>Chef's Tasting</header>
      <div className="menu-cost menu-taste"> $180 per person</div>
      {items.map((tastingItem) => {
        return <TastingItem key={tastingItem.id} {...tastingItem} />;
      })}
    </div>
  );
};

export default Tasting;
