import React from "react";
import styled from "styled-components";

const Dash3 = () => {
  const users = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <MainDiv className="mainDiv p-3">
      <div className="row">
        <div className="col-12">
          <div className="heading row d-flex justify-content-around align-items-center">
            <div className="col-4">
              <h6 style={{ color: "#605CFF" }}>Event Name </h6>
            </div>
            <List className="col-8 d-flex justify-content-around align-items-center gap-3">
              <span>
                <h6>Exhibitors</h6>
              </span>
              <span>
                <h6>Table No</h6>
              </span>
              <span>
                <h6>Date</h6>
              </span>
              <span>
                <h6>Time</h6>
              </span>
            </List>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-3">
        {users.map((item) => {
          return (
            <div className="col-12 bg-white rounded p-2 my-2" key={item}>
              <div className="heading row d-flex justify-content-around align-items-center px-3">
                <div className="col-4">
                  <h6 style={{ color: "#605CFF" }}>
                    Free Speed Reading Course - Lahore{" "}
                  </h6>
                </div>
                <Lists className="col-8 d-flex justify-content-around align-items-center gap-3">
                  <span className="d-flex align-items-center">
                    <img
                      src={require("../../assets/images/avater.png")}
                      alt="ff"
                      className="img-fluid p-2"
                    />
                    <span>
                      <p style={{ margin: "0", color: "#808080" }}>
                        Pintér Beatrix
                      </p>
                    </span>
                  </span>
                  <span>
                    <h6>21</h6>
                  </span>
                  <span>
                    <h6>29 - 06 - 2022</h6>
                  </span>
                  <span>
                    <h6>09:15 PM</h6>
                  </span>
                </Lists>
              </div>
            </div>
          );
        })}
      </div>
    </MainDiv>
  );
};

export default Dash3;

const MainDiv = styled.div`
  height: 90vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div`
  span {
    width: 100%;
    /* background-color: red; */

    h6 {
      margin: 0;
      border-left: 1px solid #6d6b75;
      text-align: center;
      line-height: 2;
    }
  }
`;
const Lists = styled.div`
  span {
    width: 100%;
    /* background-color: red; */

    h6 {
      margin: 0;
      /* border-left: 1px solid #6d6b75; */
      text-align: center;
      line-height: 2;
    }

    img {
      border-radius: 50%;
    }
  }
`;
