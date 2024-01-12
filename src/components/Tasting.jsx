import React from "react";
import TastingItem from "./TastingItem";

const Tasting = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((tastingItem) => {
        return <TastingItem key={tastingItem.id} {...tastingItem} />;
      })}
    </div>
  );
};

export default Tasting;
