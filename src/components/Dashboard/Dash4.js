import React from "react";
import styled from "styled-components";

const Dash4 = () => {
  return (
    <Main className="bg-white rounded p-4">
      <div className="row">
        <div className="col-12 col-md-6 my-2">
          <div className="links">
            <h6>Home > Inquiry / Contact Us</h6>
          </div>
          <ContactForm className="ContactForm p-1 p-md-4">
            <h5>Get in Touch</h5>
            <p className="text-muted">We are here for you! How can we help?</p>
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your Email Address" />
              <textarea
                name=""
                placeholder="Go ahead, we are listening..."
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </ContactForm>
        </div>

        <div className="col-12 col-md-6 my-2 text-center">
          <img
            src={require("../../assets/images/group.png")}
            alt="group"
            className="img-fluid"
          />
          <div className="userInfo text-center py-4">
            <div className="w-75 mx-auto text-center">
              <h6 className="d-flex justify-content-start py-2">
                <span style={{ marginRight: "1rem" }}>
                  <i className="fa-solid fa-location-dot Istyle"></i>
                </span>
                <span>670 abc Avenue, USA</span>
              </h6>
              <h6 className="d-flex justify-content-start py-2">
                <span style={{ marginRight: "1rem" }}>
                <i className="fa-solid fa-phone Istyle"></i>
                </span>
                <span>(+1) 000-000-000</span>
              </h6>
              <h6 className="d-flex justify-content-start py-2">
                <span style={{ marginRight: "1rem" }}>
                <i className="fa-solid fa-envelope Istyle"></i>
                </span>
                <span>Youremail@gmail.com</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Dash4;
const Main = styled.div`
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .Istyle {
    color: #7848f4;
    background: #80808047;
    padding: 5px 7px;
    border-radius: 50%;
  }
`;
const ContactForm = styled.div`
  input {
    border: 1px solid blue;
    padding: 0 10px;
    width: 100%;
    margin: 5px 0;
    border: none;
    outline: none;
    background: #f2f5fa;
    padding: 10px 15px;
    border-radius: 5px;
  }
  h5 {
    font-size: 2rem;
    color: #605cff;
  }

  textarea {
    resize: none;
    border: 1px solid blue;
    padding: 0 10px;
    width: 100%;
    margin: 5px 0;
    border: none;
    outline: none;
    background: #f2f5fa;
    padding: 10px 15px;
    border-radius: 5px;
  }

  button {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    background: #7848f4;
    color: white;
    border-radius: 5px;
  }
`;
