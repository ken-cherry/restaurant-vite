import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Tasting from "../components/Tasting";
import ThreeCourse from "../components/ThreeCourse";
import Toggle from "../components/Toggle";

// const courseCategories = [...new Set(threeCourse.map((item) => item.category))];
// console.log(courseCategories);

const Menu = () => {
  return (
    <Wrapper>
      <div className="menu-center">
        <div className="menu-selection">
          <Toggle />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--slate-500);
  .menu-center {
    height: 100vh;
    /* text-transform: capitalize; */
    color: var(--slate-100);
    font-weight: 500;
    font-size: 1.25rem;
  }
  .menu-selection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }

  .menu-cost {
    /* height: 50vh; */
    margin-top: 5rem;
    display: grid;
    place-items: center;
  }
  .single-item {
    display: grid;
    place-items: center;
    font-family: serif;
    font-style: italic;
    text-align: center;
    margin: 1rem auto;
  }
  h1 {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
  }
`;

export default Menu;
