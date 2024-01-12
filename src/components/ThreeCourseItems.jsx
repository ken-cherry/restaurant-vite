import React from "react";

const ThreeCourseItems = ({ title, desc, category }) => {
  return (
    <article className="single-item">
      <h1>{title}</h1>
      <p>{desc}</p>
    </article>
  );
};

export default ThreeCourseItems;
