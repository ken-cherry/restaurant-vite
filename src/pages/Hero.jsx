import React from "react";
import styled from "styled-components";
import { LuAmpersand } from "react-icons/lu";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero-center">
          <h1>Simply Elegant</h1>
          <div className="hero-icon">
            <LuAmpersand />
          </div>
          <h1>Tastefully Refreshing</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-container {
    min-height: calc(100vh - 3rem);
    display: grid;
    place-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
  }
  .hero-center {
    color: var(--slate-100);
    font-style: italic;
  }
  .hero-icon {
    font-size: 4rem;
    padding-top: 0.7rem;
    transition: var(--transition);
  }
  h1 {
    font-size: 2rem;
    transition: var(--transition);
  }
  @media (min-width: 768px) {
    .hero-icon {
      font-size: 6rem;
      transition: var(--transition);
    }
    h1 {
      font-size: 4rem;
      transition: var(--transition);
    }
  }
`;
export default Hero;
