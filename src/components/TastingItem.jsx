import React from "react";

const TastingItem = ({ title, desc, category }) => {
  return (
    <article className="single-item">
      <h1>{title}</h1>
      <p>{desc}</p>
    </article>
  );
};

export default TastingItem;
