import React from "react";

const ThreeCourseItems = ({ title, desc, category }) => {
  return (
    <div>
      <article className="single-item">
        <h1>{title}</h1>
        <p>{desc}</p>
      </article>
    </div>
  );
};

export default ThreeCourseItems;
