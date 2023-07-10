import { Layout, Typography } from "antd";
import Game from "../components/Home/Game";

const { Header, Content } = Layout;

const Home = () => {
  return (
    <>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
          }}
        >
          Matching Cards
        </Typography.Title>
      </Header>
      <Content>
        <Game />
      </Content>
    </>
  );
};

export default Home;
