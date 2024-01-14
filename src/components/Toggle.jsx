import React from "react";
import { useState } from "react";

import Tasting from "../components/Tasting";
import ThreeCourse from "../components/ThreeCourse";
import { tasting, appetizers, entrees, deserts } from "../data";
import { useGlobalContext } from "../context";

const Toggle = () => {
  const [tastingItems, setTastingItems] = useState(tasting);
  const [appetizerItems, setAppetizerItems] = useState(appetizers);
  const [entreeItems, setEntreeItems] = useState(entrees);
  const [desertItems, setDesertItems] = useState(deserts);
  const { isChefsTasting, toggleChefsTasting } = useGlobalContext();

  return (
    <section>
      <div className="btn-container">
        <button
          className="tasting"
          onClick={() => toggleChefsTasting(!isChefsTasting)}
        >
          {isChefsTasting
            ? "Click for 3 Course Menu"
            : "Click for Tasting Menu"}
        </button>
      </div>
      <div className="tasting-menu">
        {(isChefsTasting && <Tasting items={tastingItems} />) || (
          <ThreeCourse
            appetizer={appetizerItems}
            entree={entreeItems}
            desert={desertItems}
          />
        )}
        {/* <p>chef's tasting: $180 per person</p> */}
      </div>
    </section>
  );
};

export default Toggle;
