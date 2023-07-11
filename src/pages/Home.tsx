import { Layout, Typography } from "antd";
import Game from "../components/Home/Game";
import { AppMenu } from "../components/common/navigation/NavBar";
import { SubMenu } from "../components/Home/SubMenu/SubMenu";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

const Home = () => {
  const [attempts, setAttempts] = useState<number>(0);

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
              padding: "0 12px",
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
            <SubMenu attempts={attempts} />
            <Game attempts={attempts} setAttempts={setAttempts} />
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
