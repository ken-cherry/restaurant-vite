import React from "react";
import styled from "styled-components";
import { LuAmpersand } from "react-icons/lu";

// import { heroImages } from "../data";

const heroImages = [
  {
    id: 2,
    image: "../src/images/cheers1.jpg",
    title: "cheers",
    name: "single-image image-1",
  },
  {
    id: 3,
    image: "../src/images/eating1.jpg",
    title: "food",
    name: "single-image image-2",
  },
  {
    id: 4,
    image: "../src/images/tables1.jpg",
    title: "tables",
    name: "single-image image-3",
  },
  {
    id: 5,
    image: "../src/images/foodPrep1.jpg",
    title: "food prep",
    name: "single-image image-4",
  },
];

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
      <div className="images-container">
        <div className="images-center">
          {heroImages.map((item) => {
            const { id, image, title, name } = item;
            return (
              <article key={id}>
                <img src={image} alt={title} className="hero-image" />
              </article>
            );
          })}
        </div>
      </div>
      <div className="bar-container">
        <div className="bar-center">bar</div>
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
  .images-container {
    background: var(--slate-600);
    /* background: var(--slate-200); */
    padding: 1rem;
    display: grid;
    place-content: center;
  }
  .images-center {
    /* width: 90vw; */
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    transition: var(--transition);
  }
  .hero-image {
    height: 15rem;
    width: 20rem;
    object-fit: cover;
    border-radius: var(--borderRadius);
  }
  .bar-container {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 768px) {
    .hero-icon {
      font-size: 6rem;
      transition: var(--transition);
    }
    h1 {
      font-size: 4rem;
      transition: var(--transition);
    }
    .images-center {
      grid-template-columns: 1fr 1fr;
      transition: var(--transition);
    }
  }
  @media screen and (min-width: 1170px) {
    .images-center {
      transition: var(--transition);
      grid-template-rows: 300px 300px;
      gap: 2rem;
      grid-template-areas:
        "a b d"
        "a c d";
    }
    .single-image {
      height: 100%;
    }
    .hero-image {
      height: 100%;
    }
    .image-1 {
      grid-area: b;
    }
    .image-2 {
      grid-area: a;
    }
    .image-3 {
      grid-area: c;
    }
    .image-4 {
      grid-area: d;
    }
  }
`;
export default Hero;
