import React from "react";
import styled from "styled-components";

import horse from "../Img/horse.jpg";

const MainBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${horse});
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

const Styledh3 = styled.h3`
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #edc79b;
  letter-spacing: 1px;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
  text-align: center;
  margin: auto;
`;

const MainText = styled.h2`
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 100;
  font-style: italic;
  letter-spacing: 1.7px;
  text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

const Favicon = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  color: white;
  font-size: 30px;
`;

const Contact = () => {
  return (
    <div>
      <MainBackground>
        <MainContainer>
          <Styledh3>
            <h3>CONTACT US</h3>
          </Styledh3>
          <MainText>
            <Favicon>
              <i class="fas fa-map-marked-alt">
                24140 St Julien de Crempse, France
              </i>
            </Favicon>
            <Favicon>
              <i class="fas fa-phone"> +33 6 88 02 06 59</i>
            </Favicon>
            <Favicon>
              <i class="fas fa-envelope"> info@muditasanctuary.org</i>
            </Favicon>
          </MainText>
        </MainContainer>
      </MainBackground>
    </div>
  );
};

export default Contact;
