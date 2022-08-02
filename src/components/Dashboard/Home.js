import React, { useState } from "react";
import styled from "styled-components";
import Dash1 from "./Dash1";
import Dash2 from "./Dash2";
import Dash3 from "./Dash3";
import Dash4 from "./Dash4";
import SearchBar from "./SearchBar";

const Home = () => {
  const [pages, setPages] = useState(0);
  const Links = [<Dash1 />, <Dash2 />, <Dash3 />, <Dash4 />];
  return (
    <ContainerFluid className="container-fluid">
      <Menu className="menu">
        <Avatar className="avater">
          <img
            src={require("../../assets/images/avater.png")}
            alt="avatar"
            className="img-fluid"
          />
        </Avatar>

        <MenuLink>
          <div
            className={
              pages === 0
                ? "active-link links my-3 text-center"
                : "links my-3 text-center"
            }
            onClick={() => setPages(0)}
          >
            <img
              src={require("../../assets/images/layout.png")}
              alt="layout"
              className="img-fluid"
            />
          </div>
          <div
            className={
              pages === 1
                ? "active-link links my-3 text-center"
                : "links my-3 text-center"
            }
            onClick={() => setPages(1)}
          >
            <img
              src={require("../../assets/images/peaples.png")}
              alt="layout"
              className="img-fluid"
            />
          </div>
          <div className={
              pages === 2
                ? "active-link links my-3 text-center"
                : "links my-3 text-center"
            }
            onClick={() => setPages(2)}>
            <img
              src={require("../../assets/images/cup.png")}
              alt="layout"
              className="img-fluid"
            />
          </div>
          <div className={
              pages === 3
                ? "active-link links my-3 text-center"
                : "links my-3 text-center"
            }
            onClick={() => setPages(3)}>
            <img
              src={require("../../assets/images/phone.png")}
              alt="layout"
              className="img-fluid"
            />
          </div>
          <div className="links my-3 text-center">
            <img
              src={require("../../assets/images/gear.png")}
              alt="layout"
              className="img-fluid"
            />
          </div>
        </MenuLink>
      </Menu>

      <Dash>
        <SearchBar />
        {Links[pages]}
      </Dash>
    </ContainerFluid>
  );
};

export default Home;

const ContainerFluid = styled.div`
  background-color: #f2f5fa;
  padding: 0.8rem;
  display: flex;
  gap: 1rem;
  overflow-y: hidden;
`;
const Menu = styled.div`
  width: 100%;
  height: 96vh;
  background-color: #25253b;
  border-radius: 1rem;
  max-width: 4rem;
  min-width: 4rem;
`;
const Dash = styled.div`
  width: 95%;
  height: 100vh;
`;
const Avatar = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding: 20%;

  img {
    border-radius: 50%;
  }
`;
const MenuLink = styled.div`
  margin-top: 1rem;

  img {
    width: 70%;
  }
  .active-link {
    background: #7848f4;
    width: 85% !important;
    padding: 4px;

    img {
      width: 90% !important;
    }
  }
  .links {
    width: 100%;
    border-radius: 0 10px 10px 0;

    cursor: pointer;
    padding: 22%;
  }
`;
