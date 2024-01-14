import React from "react";
import ThreeCourseItems from "./ThreeCourseItems";

const ThreeCourse = ({ appetizer, entree, desert }) => {
  return (
    <div className="section-center">
      <div className="menu-title">
        <h2>Appetizers</h2>
      </div>
      {appetizer.map((threeCourseItem) => {
        return (
          <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
        );
      })}
      <div className="menu-title">
        <h2>Entrees</h2>
      </div>
      {entree.map((threeCourseItem) => {
        return (
          <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
        );
      })}
      <div className="menu-title">
        <h2>Deserts</h2>
      </div>
      {desert.map((threeCourseItem) => {
        return (
          <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
        );
      })}
      <div className="menu-cost">Three Course Prix Fixe: $100 per person</div>
    </div>
  );
};

export default ThreeCourse;
