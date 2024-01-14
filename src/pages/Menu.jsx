import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  font-family: serif;
  font-style: italic;
  .menu-center {
    /* height: 100vh; */
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
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .menu-cost,
  .menu-title {
    /* height: 50vh; */
    margin-top: 1rem;
    display: grid;
    place-items: center;
    font-weight: 900;
  }
  .single-item {
    display: grid;
    place-items: center;
    /* font-family: serif;
    font-style: italic; */
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
