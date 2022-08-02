import React from "react";
import styled from "styled-components";

const SalesCard = ({item}) => {
  return (
    <div>
      <Heading className="Heading">
        <h6>{item.title}</h6>
        <div className="salesCard d-flex justify-content-between align-items-center my-3">
          <div className="cardHolder d-flex justify-content-around">
            <div className="img">
              <img
                src={item.photo}
                alt="person"
                className="img-fluid"
              />
            </div>
            <TextContent className="TextContent">
              <h6>{item.name}</h6>
              <p>{item.time}</p>
            </TextContent>
          </div>
          <Ticket className="Ticket">
            <button>{item.ticket}</button>
          </Ticket>
        </div>
      </Heading>
    </div>
  );
};

export default SalesCard;

const Heading = styled.div`
  h6 {
    font-size: 17px !important;
  }
`;

const TextContent = styled.div`
  padding: 0 10px;
  h6 {
    font-size: 12px !important;
    margin: 0;
  }
`;

const Ticket = styled.div`
  button {
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: #7848f4;
    font-weight: bold;
  }
`;
