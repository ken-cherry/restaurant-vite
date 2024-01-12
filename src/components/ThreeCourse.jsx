import React from "react";
import ThreeCourseItems from "./ThreeCourseItems";

const ThreeCourse = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((threeCourseItem) => {
        return (
          <ThreeCourseItems key={threeCourseItem.id} {...threeCourseItem} />
        );
      })}
    </div>
  );
};

export default ThreeCourse;
