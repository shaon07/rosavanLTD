import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <ContainerFluid
      img={require("../assets/images/bg.png")}
      className="container-fluid"
    >
      <Container className="container py-5 px-5">
        <div className="row px-0 px-md-5">
          <div className="col-12 col-md-5">
            <h2>DISCOVER POPULAR EVENTS TODAY</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <button>Find Your Next Project</button>
          </div>
        </div>
        <div className="row px-0 px-md-5">
          <HeroBanner className="col-12 rounded">
            <h6>
              Re-open confidently with Eventbrite’s COVID-19 Safety Playbook
            </h6>
            <p>
              We partnered with risk management and health experts to empower
              event creators to thoughtfully consider potential safety and
              security risks at your event. See the playbook.
            </p>
          </HeroBanner>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Hero;

const ContainerFluid = styled.div`
  background: url(${(props) => props.img});
  background-position: top center;
  background-repeat: no-repeat;
  object-fit: cover;
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000066;
    z-index: -1;
  }
`;
const Container = styled.div`

height: 70%;
  h2 {
    font-size: 3rem;
    color: white;
  }

  button {
    background-color: #7848f4;
    border: none;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 10rem;
  }
`;

const HeroBanner = styled.div`
        background: white;
    color: black;
    border-left: 0.6rem solid #7848F4;
    padding: 1.5rem 2rem;
    margin-top: 2rem;
`