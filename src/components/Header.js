/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  return (
    <ContainerFluid>
      <div className="container p-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid gap-3">
            <Link to="/" style={{width:"4rem"}}>
              {" "}
              <img
                src={require("../assets/images/Rosavan-Logo-Png-removebg-preview.png")}
                alt="logo"
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>setIsNavCollapsed(!isNavCollapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/org">
                    Organize
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link ">
                    Help
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/admin" className="nav-link ">
                    Create
                  </Link>
                </li>
              </ul>
              <Form className="d-flex gap-2" role="search">
                <input
                  className=" me-2 rounded"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  style={{ border: "1px solid #7848f4" }}
                  className="btn "
                  type="submit"
                >
                  Login
                </button>
                <button className="btn " type="submit">
                  Sign Up
                </button>
              </Form>
            </div>
          </div>
        </nav>
      </div>
    </ContainerFluid>
  );
};

export default Header;

const ContainerFluid = styled.div``;

const Form = styled.form`
  button:first-child {
    border: 1px solid #7848f4;
    color: white;
  }
  button:last-child {
    background-color: #7848f4;
    color: white;
  }
`;
