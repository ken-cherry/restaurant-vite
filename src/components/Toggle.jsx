import React from "react";
import { useState } from "react";

import { useGlobalContext } from "../context";
import Tasting from "../components/Tasting";
import ThreeCourse from "../components/ThreeCourse";
import { tasting, threeCourse } from "../data";

const Toggle = () => {
  const [tastingItems, setTastingItems] = useState(tasting);
  const [threeCourseItems, setThreeCourseItems] = useState(threeCourse);
  const { isChefsTasting, toggleChefsTasting } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button
        className="tasting"
        onClick={() => toggleChefsTasting(!isChefsTasting)}
      >
        {isChefsTasting ? "Chefs Tasting" : "Three Courses"}
      </button>
      <div className="tasting-menu">
        {(isChefsTasting && <Tasting items={tastingItems} />) || (
          <ThreeCourse items={threeCourseItems} />
        )}
        {/* <p>chef's tasting: $180 per person</p> */}
      </div>
    </section>
  );
};

export default Toggle;
