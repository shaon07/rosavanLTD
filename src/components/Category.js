import React from "react";
import styled from "styled-components";

const Category = () => {
  const categories = [
    {
      title: "Music",
      icon: "fa-solid fa-music",
    },
    {
      title: "Performing & VisualArts",
      icon: "fa-solid fa-masks-theater",
    },
    {
      title: "Travel and Outdoor",
      icon: "fa-solid fa-route",
    },
    {
      title: "Health",
      icon: "fa-solid fa-hand-holding-heart",
    },
    {
      title: "Hobby",
      icon: "fa-solid fa-kitchen-set",
    },
    {
      title: "Business",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Food and Drink",
      icon: "fa-solid fa-mug-saucer",
    },
    {
      title: "Sports and Buisnees",
      icon: "fa-solid fa-person-snowboarding",
    },
  ];
  return (
    <ContainerFluid className="container-fluid py-3">
      <Container className="container">
        <div className="row text-start">
          <h3>
            Check out Trending Categories{" "}
            <span className="px-2">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </h3>
          <div className="Catagory-Container py-4">
            <div className="row">
              {categories.map((item, ind) => {
                return (
                  <div className="col-12 col-md-4" key={ind}>
                    <CategoryBox className="category-box d-flex my-2">
                      <CategoryIcon>
                        <i className={item.icon}></i>
                      </CategoryIcon>
                      <h5>{item.title}</h5>
                    </CategoryBox>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Category;

const ContainerFluid = styled.div``;
const Container = styled.div``;
const CategoryBox = styled.div`
  background: #dbdbdb59;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const CategoryIcon = styled.div`
  background: #80808094;
  padding: 10px 15px;
  color: #7848F4;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
