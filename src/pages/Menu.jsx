import React, { useState } from "react";
import styled from "styled-components";

import Toggle from "../components/Toggle";

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
  background: var(--slate-600);
  font-family: serif;
  header {
    font-size: 2rem;
    padding-top: 1rem;
    color: var(--slate-50);
  }
  header,
  .menu-title,
  .single-item h1 {
    font-style: italic;
  }
  .menu-center {
    font-weight: 500;
    font-size: 1.25rem;
    padding: 1.5rem;
  }
  .menu-selection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }
  .btn-container,
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .menu-cost,
  .menu-title {
    display: grid;
    place-items: center;
    font-weight: 900;
    color: var(--slate-50);
    text-align: center;
  }
  .menu-title {
    margin-top: 2.5rem;
  }
  .menu-taste {
    margin-bottom: 2.5rem;
  }
  .single-item {
    display: grid;
    place-items: center;
    text-align: center;
    margin: 1rem auto;
  }
  .single-item h1 {
    color: var(--slate-50);
  }
  .single-item p {
    color: var(--slate-200);
  }
`;

export default Menu;
