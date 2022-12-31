import styled from "styled-components";
import SeoSettings from "./components/SeoSettings";
import { FaTwitter, FaInstagram, FaLinux } from "react-icons/fa";
import FooterComponents from "./components/FooterComponents";

export default function Home() {
  return (
    <div>
      <SeoSettings
        pageTitle={"mi2のポートフォリオサイト"}
        pageDescription={
          "okada mitsuhiroのポートフォリオサイトです。普段は、フロントエンジニアをしています。 | Webサイト作成 | SNS運用"
        }
        pagePath={"https://mitsuhiro-okada.com"}
        pageImg={"https://mitsuhiro-okada.com"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <main>
        <Container>
          <CardContainer>
            <Title>mi2</Title>
            <Text>#information</Text>
          </CardContainer>
          <Text>Webサイト | LP作成 | SNS運用</Text>
          <MyInformation>
            <URL
              href="https://www.instagram.com/mi2__user/?hl=ja"
              target="_blank"
            >
              <FaInstagram size={30} color={"#595959"} />
            </URL>
            <URL href="https://twitter.com/mi2__user" target="_blank">
              <FaTwitter size={30} color={"#595959"} />
            </URL>
          </MyInformation>
        </Container>
        <Hr />
        <Container>
          <CardContainer>
            <Subtitle>Webサイト</Subtitle>
            <Text>#portfolio</Text>
          </CardContainer>
          <CardContainer>
            <Button>
              <URL href="https://sorette.jp" target="_blank">
                sorette
                <FaLinux size={80} color={"#595959"} />
              </URL>
            </Button>
          </CardContainer>
          <CardContainer>
            <Button>
              <URL href="https://csvhikakun.com" target="_blank">
                csvひかくん
                <FaLinux size={80} color={"#595959"} />
              </URL>
            </Button>
          </CardContainer>
          {/* <CardContainer>
            <Button>
              <URL href="https://www.cosmictheta.space" target="_blank">
                Cosmittheta
                <FaLinux size={80} color={"#595959"} />
              </URL>
            </Button>
          </CardContainer> */}
          <CardContainer>
            <Button>
              <URL href="https://pharcyde.tokyo" target="_blank">
                Pharcyde
                <FaLinux size={80} color={"#595959"} />
              </URL>
            </Button>
          </CardContainer>
          {/* <CardContainer>
            <Button>
              <URL href="https://kajikazi.jp" target="_blank">
                Kajikazi
                <FaLinux size={80} color={"#595959"} />
              </URL>
            </Button>
          </CardContainer> */}
        </Container>
        <Hr />
        <Container>
          <CardContainer>
            <Subtitle>Instagram/SNS</Subtitle>
            <Text>#media</Text>
          </CardContainer>
          <CardContainer>
            <Button>
              <URL
                href="https://www.instagram.com/kagurazaka_map/?hl=ja"
                target="_blank"
              >
                神楽坂マップ
                <FaLinux size={80} color={"#595959"} />
              </URL>
            </Button>
          </CardContainer>
        </Container>
        <FooterComponents />
      </main>
    </div>
  );
}

const Title = styled.h1`
  color: #595959;
  text-align: center;
`;

const Subtitle = styled.h2`
  color: #595959;
  text-align: center;
`;

const Text = styled.p`
  color: #595959;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  min-width: 200px;
  height: 100%;
  border: none;
  border-radius: 8px;
  background-color: #595959;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  &:hover {
    background-color: #fff;
    color: #595959;
  }
`;

const URL = styled.a`
  width: 100%;
`;

const Hr = styled.hr`
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

const MyInformation = styled.span`
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(108, 155, 210, 0.2);
  @media screen and (max-width: 480px) {
    /* 画面サイズが480まではここを読み込む */
    width: 350px;
  }
  @media screen and (min-width: 481px) and (max-width: 1023px) {
    /* 画面サイズが481pxから1023pxまではここを読み込む */
    width: 400px;
  }
  @media screen and (min-width: 1024px) {
    /* 画面サイズが1024pxからはここを読み込む */
    width: 450px;
  }
`;
