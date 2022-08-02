/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styled from "styled-components";
import Posts from "../Posts";

const Dash2 = () => {
  const SelectEvent = [
    "Date",
    "Price",
    "Category",
    "Formate",
    "Language",
    "Currency",
  ];
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
    <div className="bg-white rounded p-3">
      <div className="row">
        <DashCont className="col-12 col-md-9">
          <div className="Switches d-flex justify-content-between flex-wrap align-items-center">
            <div className="switch-title">
              <h6>Home > Events</h6>
            </div>
            <div className="switch-icon d-flex gap-2 align-items-center">
              <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Show events from organisers I follow
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  Search for online events
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
          </div>
          <div className="Select-event-date d-flex flex-wrap flex-md-nowrap gap-2 my-2">
            {SelectEvent.map((item, ind) => {
              return (
                <select
                  class="form-select"
                  aria-label="Disabled select example"
                  key={ind}
                  style={{ borderRadius: "3rem" }}
                >
                  <option selected>{item}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              );
            })}
          </div>
          <div className="EventResult my-3 px-2">
            <h5>
              Search Result{" "}
              <span style={{ color: "#7848F4" }}>
                “Events in San Francisco”
              </span>{" "}
              <span style={{ color: "#CACACA" }}>20 Results show</span>
            </h5>
          </div>

          <div className="EventPosts my-3 px-3">
            <div className="row">
              {blogs.map((item, ind) => {
                return (
                  <div className="col-12 col-md-6">
                    <Posts item={item} key={ind} />
                  </div>
                );
              })}
            </div>
          </div>
        </DashCont>
        <Dash1Side
          className="col-12 col-md-3 p-3 rounded"
          style={{ background: "#F8F7FA" }}
        >
          <DashOne className="row p-2">
            {blogs.slice(0, 1).map((item, ind) => {
              return (
                <div className="col-12 mx-auto ">
                  <Posts item={item} key={ind} />
                </div>
              );
            })}
          </DashOne>

          <div className="col-12">
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
        </Dash1Side>
      </div>
    </div>
  );
};

export default Dash2;

const DashCont = styled.div`
  height: 90vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const DashOne = styled.div`
  h6,
  p {
    font-size: 13px;
  }
`;
const Dash1Side = styled.div`
  background: rgb(248, 247, 250);
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
