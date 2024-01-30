import React from "react";
import ThreeCourseItems from "./ThreeCourseItems";

const ThreeCourse = ({ appetizer, entree, desert }) => {
  return (
    <div className="section-center">
      <header>3 Course Prix Fixe</header>
      <div className="menu-cost"> $100 per person</div>
      <div className="menu-courses">
        <div className="menu-title">
          <h2>Appetizers</h2>
          <div className="underline"></div>
        </div>
        {appetizer.map((threeCourseItem) => {
          return (
            <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
          );
        })}
      </div>
      <div className="menu-courses">
        <div className="menu-title">
          <h2>Entrees</h2>
          <div className="underline"></div>
        </div>
        {entree.map((threeCourseItem) => {
          return (
            <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
          );
        })}
      </div>
      <div className="menu-courses">
        <div className="menu-title">
          <h2>Desserts</h2>
          <div className="underline"></div>
        </div>
        {desert.map((threeCourseItem) => {
          return (
            <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
          );
        })}
      </div>
    </div>
  );
};

export default ThreeCourse;
