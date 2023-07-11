import { Layout, Typography } from "antd";
import Game from "../components/Home/Game";
import { AppMenu } from "../components/common/navigation/NavBar";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Layout>
          <Header
            style={{
              padding: 0,
              marginBottom: "24px",
              backgroundColor: "#fff",
            }}
          >
            <AppMenu />
          </Header>
          <Content
            style={{
              margin: "24px 0",
            }}
          >
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
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          Matching Cards Game ©2023 Created by Mohamad Khalil
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
