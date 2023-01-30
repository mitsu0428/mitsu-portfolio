import React from "react";
import styled from "styled-components";
import HomeSeoSettings from "./components/libs/HomeSeoSettings";
import FooterComponents from "./components/libs/FooterComponents";
import Button from "./components/common/Button";
import ImageContainer from "./components/common/ImageContainer";
import InstagramContainer from "./components/common/InstagramContainer";
import TwitterContainer from "./components/common/TwitterContainer";
import LinkedinComtainer from "./components/common/LinkedinComtainer";

const Home = () => {
  return (
    <div>
      <HomeSeoSettings />
      <Main>
        <Title>mi2のページ</Title>
        <TitleContainer>
          <Subtitle>Webサイト | LP制作 | SNS運用</Subtitle>
          <LoremText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </LoremText>
        </TitleContainer>
        <Container>
          <ImageContainer />
          <SnsArea>
            <Container>
              <LinkedinComtainer />
            </Container>
            <Container>
              <InstagramContainer />
            </Container>
            <Container>
              <TwitterContainer />
            </Container>
          </SnsArea>
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Webサイト | LP制作</Subtitle>
        </TitleContainer>
        <Container>
          <CardContainer>
            <Button title="Hayato Kajiwara" url="https://kajikazi.com"></Button>
          </CardContainer>
          <CardContainer>
            <Button title="sorette掲示板" url="https://sorette.jp"></Button>
          </CardContainer>
          <CardContainer>
            <Button title="CSV比較ツール" url="https://csvhikakun.com"></Button>
          </CardContainer>
          <CardContainer>
            <Button title="Pharcyde Menu" url="https://pharcyde.tokyo"></Button>
          </CardContainer>
          {/* <CardContainer>
            <CardButton>
              <URL href="https://www.cosmictheta.space" target="_blank">
                Cosmittheta
              </URL>
            </CardButton>
          </CardContainer> */}
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Instagram | SNS運用</Subtitle>
        </TitleContainer>
        <Container>
          <CardContainer>
            <Button
              title="神楽坂マップ"
              url="https://www.instagram.com/kagurazaka_map/?hl=ja"
            ></Button>
          </CardContainer>
        </Container>
        <FooterComponents />
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main``;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 32px;
`;

const Title = styled.h1`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
  margin-top: 32px;
  margin-left: 32px;
  font-size: 24px;
  font-weight: 1200;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
  margin-top: 32px;
  margin-left: 32px;
  font-size: 22px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
`;

const Hr = styled.hr`
  margin-top: 32px;
  border-width: 0 0 1px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 50%,
      hsla(0, 0%, 35%, 0) 100%
    )
    0 0 100%;
  border-style: solid;
`;

const SnsArea = styled.span`
  display: flex;
  width: 300px;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

const CardContainer = styled.div`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 32px;
  cursor: pointer;
  transition: 1s;

  width: 300px;
  height: 100px;
  &:hover {
    background-color: #f5f5f5;
  }

  animation-name: slideIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s; /* 追加 */

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const LoremText = styled.p`
  color: #fff;
  margin-top: 32px;
  margin-left: 32px;
  font-size: 18px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
