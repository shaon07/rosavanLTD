import React, { useState } from "react";
import styled from "styled-components";

const Popular = () => {
  const [list, setList] = useState("All");
  return (
    <ContainerFluid className="container-fluid py-5">
      <Container className="container">
        <div className="row text-start">
          <h3>
            Popular in{" "}
            <span className="px-2">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </h3>
          <List className="popular-lists">
            <ul className="p-0 flex-wrap">
              {[
                "All",
                "For you",
                "Online",
                "Today",
                "This Weekend",
                "Free",
                "Music",
                "Food & Drink",
                "Charity & Causes",
              ].map((item) => {
                return (
                  <li
                    className={item === list ? "line2" : "lineh2"}
                    onClick={() => setList(item)}
                    key={item}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </List>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Popular;

const ContainerFluid = styled.div``;
const Container = styled.div``;
const List = styled.div`
  ul {
    display: flex;
    justify-content: start;
    gap: 2rem;
    list-style: none;
    margin: 10px 0;
    cursor: pointer;
  }
`;
