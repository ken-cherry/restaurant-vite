import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-center">
        <div className="contact-info">
          <div className="phone-number">1-123-456-7890</div>
          <div className="address">1234 Eat Here Rd</div>
          <div className="hours">Hours: 4pm-11pm Daily</div>
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
  @media (min-width: 768px) {
    .contact-info {
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem 7rem;
    }
  }
`;

export default Footer;
