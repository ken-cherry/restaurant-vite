import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero-center">
          <h1>home page</h1>
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
  }
  .hero-center {
    color: var(--slate-100);
  }
`;
export default Hero;
