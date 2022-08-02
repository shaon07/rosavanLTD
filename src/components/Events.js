import React from "react";
import styled from "styled-components";
import Posts from "./Posts";

const Events = () => {
  const blogs = [
    {
      photo: "1",
      title: "How To Improve your Memory - Lahore",
    },
    {
      photo: "2",
      title: "Free Speed Reading Course - Lahore",
    },
    {
      photo: "3",
      title: "Develop a Successful Healthcare Tech",
    },
    {
      photo: "4",
      title: "Develop a Successful Healthcare Tech",
    },
    {
      photo: "5",
      title: "How To Improve your Memory - Lahore",
    },
    {
      photo: "6",
      title: "Free Speed Reading Course - Lahore",
    },
  ];
  return (
    <ContainerFluid className="container-fluid py-5">
      <Container className="container">
        <div className="event-title py-4">
          <h4>Events in Punjab</h4>
        </div>
        <div className="row">
          {blogs.map((item, ind) => {
            return (
              <div className="col-12 col-md-4" >
              <Posts item={item} key={ind}/>
              </div>
            );
          })}
          <div className="All d-flex justify-content-center align-items-center">
            <Button>See All</Button>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Events;

const ContainerFluid = styled.div``;
const Container = styled.div``;
const BlogImg = styled.div`
  position: relative;
  z-index: -1;
`;
const ImgTag = styled.div`
  position: absolute;
  top: 8%;
  left: 10%;
  width: 50%;
  height: 2rem;
  background-color: white;
  z-index: 1;
  border-radius: 30px;
`;
const Button = styled.div`
    background-color: #7848F4;
    color: white;
    padding: 7px 30px;
    border-radius: 10px;
    cursor: pointer;
`