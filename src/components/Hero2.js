import React from "react";
import styled from "styled-components";

const Hero2 = () => {
  return (
    <ContainerFluid
      className="container-fluid py-5"
      img={require("../assets/images/bg2.png")}
    >
      <Container className="container py-5">
        <div className="row">
          <div className="container">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <h4>FREE SPEED <br /> READING COURSE <br /> LAHORE</h4>
            </div>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Hero2;

const ContainerFluid = styled.div`
  background: url(${(props) => props.img});
  background-position: top center;
  background-repeat: no-repeat;
  object-fit: cover;
  position: relative;
  z-index: 1;
  color: white;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0b043491;
    z-index: -1;
  }

  h4{
    font-size: 3rem;
    line-height: 1.5;
    font-weight: bold;
  }
`;
const Container = styled.div``;
