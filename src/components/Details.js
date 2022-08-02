/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <ContainerFluid className="container-fluid pt-5">
      <Container className="container">
        <div className="row">
          <div className="col-12 eventDetail d-flex justify-content-between">
            <div className="eventText">
              <h5>Event Detail</h5>
            </div>
            <div className="eventButton">
              <button>Register</button>
            </div>
          </div>

          <EventDate className="d-md-flex justify-content-center py-4">
            <div className="eventDate col-12 col-md-3">
              <div className="w-50">
                <h6>Date</h6>
                <p className="text-muted">29 JUNE 2022</p>
              </div>
            </div>
            <div className="eventDate col-12 col-md-3">
              <div className="w-50">
                <h6>Time</h6>
                <p className="text-muted">9:00 AM - 3:00 PM</p>
              </div>
            </div>
            <div className="eventDate col-12 col-md-3">
              <div className="w-50">
                <h6>Location</h6>
                <p className="text-muted">LAHORE</p>
              </div>
            </div>
            <div className="eventDate col-12 col-md-3">
              <div className="w-50">
                <h6>Organizer</h6>
                <p className="text-muted">IrisReading.com</p>
              </div>
            </div>
          </EventDate>
        </div>

        <div className="row pt-5">
          <div className="col-12 col-md-8 pt-5 pr-3">
            <div className="eventContents">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="aboutEvent">
              <h6 className="fw-bold">About this event</h6>
              <p className="text-muted">This is an online event.</p>
              <p style={{color:"#7848F4"}}>Click here to watch the Broadcast Live</p>
              <p className="text-muted">What You'll Learn:</p>
              <ul className="text-muted">
                <li>How fast you currently read.</li>
                <li>How to improve reading speed & comprehension</li>
                <li>Drills & exercises</li>
              </ul>
            </div>
          </div>
          <Sidebar className="col-12 col-md-4 rounded mt-5">
            <div className="mediafiles w-50">
              <h6 className="fw-bold">Share With Friends</h6>
              <div className="social d-flex justify-content-between ">
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-youtube"></i>
                </span>
                <span>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </div>
            <div className="locations mt-2">
                <h6 className="fw-bold">Locations</h6>
              <div className="map my-3 rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14390.078952655263!2d88.624134!3d25.6208704!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1658986753567!5m2!1sbn!2sbd"
                  width="100%"
                  height="350"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Sidebar>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Details;

const ContainerFluid = styled.div``;
const Container = styled.div`
  h5 {
    font-weight: bold;
    font-size: 2rem;
  }

  button {
    background: #7848f4;
    color: white;
    border: none;
    padding: 7px 30px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const EventDate = styled.div`
  background: #f8f7fa;
  margin: 10px;
  width: 98%;
  border-radius: 10px;

  div {
    text-align: start;
    margin: auto;
  }
  .eventDate {
    border-right: 2.5px solid #d7d7d7;
  }
  .eventDate:last-child {
    border-right: none;
  }
  h6 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const Sidebar = styled.div`
  background-color: #f8f7fa;
  padding: 2rem;
`;

