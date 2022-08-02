import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFluid className="container-fluid">
      <Container className="container">
        <div className="row">
          <div className="col-12 col-md-4 footer-logo">
            <img
              src={require("../assets/images/Rosavan-Logo-Png-removebg-preview.png")}
              alt="footer"
              className="img-fluid"
              style={{width:"6rem"}}
            />
            <div className="footer-content py-3">
              <p className="text-muted">
                <span style={{marginRight:"10px"}}>
                  <i style={{color:"#7848F4"}} className="fa-solid fa-location-dot"></i>
                </span>
                2118 Lorem Ipsum, dolor sit amet 35624
              </p>
              <p className="text-muted">
                <span style={{marginRight:"10px"}}>
                  <i style={{color:"#7848F4"}} className="fa-solid fa-phone"></i>
                </span>
                (+1) 000-000-000
              </p>
              <p className="text-muted">
                <span style={{marginRight:"10px"}}>
                  <i style={{color:"#7848F4"}} className="fa-solid fa-envelope"></i>
                </span>
                hello@example.com
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 my-3">
            <FooterService className="footer-service d-flex justify-content-around">
              <div className="service">
                <h6>Service</h6>
                <div className="services">
                  <p className="text-muted">SEO Content</p>
                  <p className="text-muted">Website Article</p>
                  <p className="text-muted">Product Description</p>
                  <p className="text-muted">Press Release</p>
                </div>
              </div>
              <div className="service">
                <h6>About</h6>
                <div className="services">
                  <p className="text-muted">About Us</p>
                  <p className="text-muted">Pricing</p>
                  <p className="text-muted">How it Works</p>
                  <p className="text-muted">List Industries</p>
                </div>
              </div>
            </FooterService>
          </div>
          <div className="col-12 col-md-4 my-3">
            <FooterService className="footer-service d-flex justify-content-around">
              <div className="service">
                <h6>Company</h6>
                <div className="services">
                  <p className="text-muted">Become a Writer</p>
                  <p className="text-muted">Our Team</p>
                  <p className="text-muted">Client Help</p>
                  <p className="text-muted">Contact Support</p>
                </div>
              </div>
              <div className="service">
                <h6>Social Media</h6>
                <div className="services d-flex justify-content-around">
                  <P className="text-muted">
                    <span>
                      <i className="fa-brands fa-facebook"></i>
                    </span>
                  </P>
                  <P className="text-muted">
                    <span>
                      <i className="fa-brands fa-instagram"></i>
                    </span>
                  </P>
                  <P className="text-muted">
                    <span>
                      <i className="fa-brands fa-youtube"></i>
                    </span>
                  </P>
                  <P className="text-muted">
                    <span>
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                  </P>
                </div>
              </div>
            </FooterService>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Footer;

const ContainerFluid = styled.div``;
const Container = styled.div``;
const FooterService = styled.div`
  h6 {
    font-size: 1.3rem;
    font-weight: 500;
  }
  p {
    margin-bottom: 5px;
    cursor: pointer;
  }
  i {
    font-size: 1rem;
    margin: 10px;
    color: white;
  }
  
`;

const P = styled.p`
    background-color: #7848F4;
    margin: 5px;
    border-radius: 50%;
`