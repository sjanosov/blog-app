import React from "react";
import styled from "styled-components";
import babySheep from "../Img/babySheep.jpg";

const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 100px;
`;

const MainBackground = styled.section`
  background-image: url(${babySheep});
  background-size: cover;
  background-position: center;
  height: 130vh;
  width: 100vw;
  background-attachment: fixed;
  color: #fff;
`;

const Styledh3 = styled.h3`
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #696773;
  letter-spacing: 1px;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

const MainText = styled.h3`
  font-family: "Roboto", Sans-serif;
  padding: 50px auto;
  margin-bottom: 30px;
  width: 70%;
  font-size: 20px;
  line-height: 30px;
  font-weight: normal;
  color: #696773;
  letter-spacing: 1px;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

const About = () => {
  return (
    <div>
      <MainContainer>
        <Styledh3>
          <h3>About Mudita</h3>
        </Styledh3>
        <MainText>
          Mudita is a sanctuary in Dordogne, France which rescues animals from
          all walks of life and gives them a chance to live out the rest of
          their lives peacefully. Although we would love nothing more than to
          save every animal in need we come across, unfortunately our space and
          finances are limited. We try to place as many as we can in loving
          homes. Animals who become permanent guests of the sanctuary are
          typically those for whom we could not find a suitable home.
        </MainText>
      </MainContainer>
      <MainBackground />
    </div>
  );
};

export default About;
