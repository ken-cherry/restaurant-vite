import React from "react";
import styled from "styled-components";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-center">
        <div className="contact-info">
          <div className="phone-number">
            <FaMobileScreenButton /> 123-456-7890
          </div>
          <div className="address">
            <FaMapLocationDot /> 1234 Eat Here Rd
          </div>
          <div className="hours">
            <FaDoorOpen /> 4pm-11pm Tues - Sun
          </div>
        </div>
        <div className="footer-bottom">
          <p>Cherry Web Development. All Rights Reserved.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--slate-700);
  .footer-center {
    text-transform: capitalize;
    width: var(--view-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: var(--slate-100);
    text-align: center;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .footer-bottom {
    margin: 0.5rem auto;
  }
  @media (min-width: 768px) {
    .contact-info {
      flex-direction: row;
      justify-content: space-between;
      /* margin: 1rem 7rem; */
      margin: 1rem auto;
      max-width: 700px;
      gap: 2rem;
    }
  }
`;

export default Footer;
