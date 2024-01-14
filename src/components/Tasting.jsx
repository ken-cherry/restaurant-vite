import React from "react";
import TastingItem from "./TastingItem";

const Tasting = ({ items }) => {
  return (
    <div className="section-center">
      <div className="menu-cost">Chef's Tasting: $180 per person</div>
      {items.map((tastingItem) => {
        return <TastingItem key={tastingItem.id} {...tastingItem} />;
      })}
    </div>
  );
};

export default Tasting;
