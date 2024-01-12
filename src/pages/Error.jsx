import React from "react";
// import Wrapper from "../assets/wrappers/ErrorPage";
import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We couldn't find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--slate-800);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
    text-decoration: none;
  }
`;
export default Error;
