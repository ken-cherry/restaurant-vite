import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">restaurant</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
          <NavLink to="/menu" className="nav-link">
            menu
          </NavLink>
          {/* <NavLink to="/newsletter" className="nav-link">
            newsletter
          </NavLink> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--slate-50);
  .nav-center {
    text-transform: capitalize;
    width: var(--view-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* padding: 0.5rem 2rem; */
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    letter-spacing: var(--letterSpacing);
    font-weight: 700;
    color: var(--slate-950);
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--slate-400);
    font-weight: 500;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
    text-decoration: none;
  }
  .nav-link:hover {
    color: var(--slate-950);
  }
  .active {
    color: var(--slate-950);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Navbar;
