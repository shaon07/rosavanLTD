import React from "react";
import styled from "styled-components";

const Tellus = () => {
  return (
    <ContainerFluid
      className="container-fluid"
      img={require("../assets/images/Background.png")}
    >
      <Container className="container py-4 py-md-0">
        <div className="row align-items-center py-md-0">
          <TellUs className="col-12 col-md-8 TellUs">
            <div className="tellus-content w-md-25">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <h6>TELL US WHAT <br /> YOU LOVE</h6>
              <button>See All</button>
            </div>
          </TellUs>
          <div className="col-12 col-md-4 TellUsImage my-4 my-md-0">
            <img
              src={require("../assets/images/person.png")}
              alt="person"
              className="img-fluid"
            />
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Tellus;

const ContainerFluid = styled.div`
  overflow: hidden;
  background-image: url(${(props) => props.img});
  color: white;
`;
const Container = styled.div``;
const TellUs = styled.div`
  h6 {
    font-size: 3rem;
  }
  button {
    background: transparent;
    color: white;
    border: 2px solid white;
    padding: 5px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
