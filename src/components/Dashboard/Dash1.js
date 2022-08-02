import React from "react";
import styled from "styled-components";
import ChartShaon from "../../Char";
import Posts from "../Posts";
import Bar1 from "./Bar1";
import Circle from "./Circle";
import Line1 from "./Line1";
import PieChart from "./PieChart";
import SalesCard from "./SalesCard";

const Dash1 = () => {
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

  const TickerUser = [
    {
      title: "Free Speed Reading Course - San Francisco",
      name: "Steffany Humble",
      photo: require("../../assets/images/placeholder.png"),
      time: "2m ago",
      ticket: "4 Ticket",
    },
    {
      title: "Improve your Memory",
      name: "Jacob Swing Swing",
      photo: require("../../assets/images/placeholder1.png"),
      time: "6h ago",
      ticket: "2 Ticket",
    },
    {
      title: "How To Improve your Memory - San Francisco",
      name: "Robert Carloz",
      photo: require("../../assets/images/placeholder2.png"),
      time: "10h ago",
      ticket: "1 Ticket",
    },
  ];
  return (
    <DashContent className="DashContent">
      <div className="row pt-3">
        <div className="col-12 order-1 col-md-3 my-3 my-md-0 piechart">
          <div className="PieChart">
            <div className="BestSelling">
              <div className="sellingTitile d-flex justify-content-between">
                <div>
                  <h6 style={{ marginTop: "9px", fontWeight: "bold" }}>
                    Best Selling
                  </h6>
                </div>
                <div>
                  <div class="select">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      style={{ border: "1px solid transparent" }}
                    >
                      <option selected>This Weak</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="PieChart p-4">
                <PieChart />
              </div>

              <div className="cahrtInfo">
                <div className="row p-3">
                  <div className="col-4">
                    <div
                      className="color"
                      style={{ background: "#FFD600" }}
                    ></div>
                    <h6>21,512</h6>
                    <p>Ticket Left</p>
                  </div>
                  <div className="col-4">
                    <div
                      className="color"
                      style={{ background: "#A138E1" }}
                    ></div>
                    <h6>45,612</h6>
                    <p>Ticket Sold</p>
                  </div>
                  <div className="col-4">
                    <div
                      className="color"
                      style={{ background: "#7848F4" }}
                    ></div>
                    <h6>275</h6>
                    <p>Event Held</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Sales className="col-12 my-3">
            <div className="salesContent bg-white rounded">
              <div className="d-flex justify-content-between p-3">
                <div>
                  <h6 style={{ marginTop: "9px", fontWeight: "bold" }}>
                    Latest Sales
                  </h6>
                </div>
                <div></div>
                <div class="select">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ border: "1px solid transparent" }}
                  >
                    <option selected>Newest 25%</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="PersonCard p-3">
                {TickerUser.map((item, ind) => {
                  return <SalesCard item={item} key={ind} />;
                })}
              </div>
            </div>
          </Sales>
        </div>

        <Dashboard className="col-12 order-2 col-md-9 Dashboard">
          <div className="row justify-content-around">
            <div className="col-12 col-md-4 my-3 my-md-0">
              <div className="wrapper bg-white rounded">
                <div class="select">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ border: "1px solid transparent" }}
                  >
                    <option selected>Increase 25%</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="Line">
                  <Line1 />
                </div>
              </div>
            </div>

            <div className="col-12  col-md-4  ">
              <div
                className="wrapper bg-white my-3 my-md-0 rounded NewSales d-flex justify-content-around align-items-center"
                style={{ height: "100%", padding: "0 10px" }}
              >
                <div className="SalesNumber text-center">
                  <h6 className="text-muted" style={{ fontSize: "11px" }}>
                    New Sales
                  </h6>
                  <h5 style={{ fontSize: "25px" }}>
                    63{" "}
                    <span>
                      <i className="fa-solid fa-caret-up"></i>
                    </span>
                  </h5>
                </div>
                <div className="Bar1" style={{ width: "70%" }}>
                  <Bar1 />
                </div>
              </div>
            </div>
            <div className="col-12  col-md-4 ">
              <div
                className="wrapper my-3 my-md-0 bg-white rounded NewSales d-flex justify-content-around align-items-center"
                style={{ height: "100%", padding: "0 10px" }}
              >
                <div className="SalesNumber text-center">
                  <h6 className="text-muted" style={{ fontSize: "11px" }}>
                    Event Held
                  </h6>
                  <h5 style={{ fontSize: "25px" }}>
                    456{" "}
                    <span>
                      <i className="fa-solid fa-caret-up"></i>
                    </span>
                  </h5>
                </div>
                <div className="Bar1" style={{ width: "70%" }}>
                  <Circle />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="col-12 my-3">
                <div className="ana bg-white p-3">
                  <div className="titles d-flex justify-content-between my-3">
                    <div className="SalesRevenue">
                      <h6>Sales Revenue</h6>
                    </div>
                    <Buttons className="Buttons d-flex justify-content-around gap-2">
                      <button className="btn-1">Monthly</button>
                      <button className="btn-2">Weakly</button>
                      <button className="btn-2">Daily</button>
                    </Buttons>
                  </div>
                  <ChartShaon />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="col-12 my-3">
                <div className="ana bg-white p-3">
                  <div className="titles d-flex justify-content-between my-3">
                    <div className="SalesRevenue">
                      <h6>Recent Event</h6>
                    </div>
                    <Buttons className="Buttons d-flex  justify-content-around gap-2">
                      <PreBtn className="preBtn">
                        <i className="fa-solid fa-caret-left"></i>
                      </PreBtn>
                      <Circles className="Circles d-flex justify-content-around gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-circle"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-circle"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-circle"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-circle"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-circle"></i>
                        </span>
                      </Circles>
                      <PreBtn className="NextBtn">
                        <i className="fa-solid fa-caret-right"></i>
                      </PreBtn>
                    </Buttons>
                  </div>

                  <div className="row">
                    {blogs.slice(0, 3).map((item, ind) => {
                      return (
                        <div className="col-12 col-md-4">
                          <Posts item={item} key={ind} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dashboard>
      </div>
    </DashContent>
  );
};

export default Dash1;
const DashContent = styled.div`
  height: 88%;
  overflow-y: scroll;
  padding-bottom: 1rem;
  @media (max-width: 500px) {
    & {
      max-width: 100%;
      width: 100%;
    }

    .wrapper,
    .ana {
      width: 100%;
      max-width: 90%;
    }

    .BestSelling {
      width: 100%;
      max-width: 90%;

      h6 {
        font-size: 90%;
      }
    }

    .SalesRevenue {
      h6 {
        font-size: 10px;
      }
    }

    .salesContent {
      h6 {
        font-size: 90%;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .SalesRevenue {
    h6 {
      font-size: 100%;
    }
  }

  .BestSelling {
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    max-width: 90%;

    h6 {
      font-size: 100%;
    }
  }

  .color {
    width: 1.5rem;
    height: 10px;
    border-radius: 10px;
    margin: 5px 5px 5px 0;
  }

  h6 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  p {
    color: #757575;
  }
`;

const Dashboard = styled.div``;
const Sales = styled.div`
  max-width: 100%;
  width: 100%;
  @media (max-width: 500px) {
    & {
      max-width: 90%;
      width: 100%;
    }
  }
`;
const Buttons = styled.div`
  .btn-1 {
    background-color: #7848f4;
    color: white;
  }
  .btn-2 {
    background-color: white;
    color: black;
  }
  button {
    color: white;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
  }
  @media(max-width:500px){
    button {
    color: white;
    border: none;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 5px;
  }
  }
`;

const PreBtn = styled.div`
  i {
    color: #7848f4;
    padding: 10px 14px;
    text-align: center;
    border-radius: 30px;
    border: 2px solid #7848f4;
    cursor: pointer;
    transition: 0.5s;
  }

  i:hover {
    background-color: #7848f4;
    color: white;
    border: 2px solid white;
  }

  @media(max-width:500px){
    i {
      padding: 5px 5px;
    }
  }
`;
const Circles = styled.div`
  i {
    color: #dedede !important;
    cursor: pointer;
  }

  @media(max-width:500px){
    font-size: 8px;
  }

  span:first-child i {
    color: #7848f4 !important;
  }
`;
