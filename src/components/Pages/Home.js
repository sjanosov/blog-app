import React from "react";
import styled from "styled-components";

import BackgroundImg from "../Img/BackgroundImg.jpg";

const MainBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  height: 82vh;
  width: 100vw;
  background-attachment: fixed;
  color: #fff;
`;

const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 100px;
`;

const MainText = styled.h2`
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 100;
  font-style: italic;
  letter-spacing: 1.7px;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

const Home = () => {
  return (
    <MainBackground>
      <MainContainer>
        <MainText>
          <h2>
            We want to change the world by reconnecting humans with nature
          </h2>
        </MainText>
      </MainContainer>
    </MainBackground>
  );
};

export default Home;
