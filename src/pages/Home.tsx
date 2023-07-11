import { Layout, Typography } from "antd";
import Game from "../components/Home/Game";
import { AppMenu } from "../components/common/navigation/NavBar";

const { Header, Content } = Layout;

const Home = () => {
  return (
    <>
      <AppMenu />
      <Content>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
          }}
        >
          Matching Cards
        </Typography.Title>
        <Game />
      </Content>
    </>
  );
};

export default Home;
