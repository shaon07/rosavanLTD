import React from "react";
import styled from "styled-components";

const Posts = ({item}) => {
    
  return (
    <div>
      
        <div className="contentBox">
          <BlogImg className="imageSec">
            <div>
              <img
                src={require(`../assets/images/blog${item.photo}.png`)}
                alt="blog"
                className="img-fluid "
              />
            </div>

            <ImgTag className="ImgTag gap-3 d-flex justify-content-around align-items-center px-2">
              <img
                src={require("../assets/images/blogIcon.png")}
                alt="icon"
                className="img-fluid"
              />
              <h6 style={{ marginBottom: "3px" }}>IrisReading.com</h6>
            </ImgTag>
          </BlogImg>
          <div className="contentBox py-3">
            <div className="row d-flex justify-content-around ">
              <div className="col-2">
                <p>OCT</p>
                <h6 className="font-weight-bold">19</h6>
                <p>7PM</p>
              </div>
              <div className="col-8">
                <h6>{item.title}</h6>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit,
                  iduva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Posts;

const ImgTag = styled.div`
  position: absolute;
  top: 8%;
  left: 10%;
  width: 50%;
  height: 2rem;
  background-color: white;
  z-index: 1;
  border-radius: 30px;

  img {
    width: 15%;
  }

  h6 {
    font-size: 70% !important;
  }
`;

const BlogImg = styled.div`
  position: relative;
  z-index: 0;
`;