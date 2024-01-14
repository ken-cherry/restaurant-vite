import React from "react";
import TastingItem from "./TastingItem";

const Tasting = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((tastingItem) => {
        return <TastingItem key={tastingItem.id} {...tastingItem} />;
      })}
      <div className="menu-cost">Chef's Tasting: $180 per person</div>
    </div>
  );
};

export default Tasting;
