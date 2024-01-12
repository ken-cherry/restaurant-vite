import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      <div className="menu-center">
        <div className="menu-selection">
          <ul>
            <li>full menu</li>
            <li>appetizers</li>
            <li>entrees</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--slate-500);

  .menu-center {
    height: 100vh;
    text-transform: capitalize;
  }
  .menu-selection {
    width: var(--view-width);
    margin: 0 auto;
    padding: 1rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    .ul {
      margin: 1rem 7rem;
    }
  }
`;

export default Menu;
