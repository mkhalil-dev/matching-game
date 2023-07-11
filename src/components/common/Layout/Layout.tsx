import { Layout } from "antd";
import { AppMenu } from "../navigation/NavBar";

const { Header, Content, Footer } = Layout;

interface ILayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: ILayoutProps) => {
  return (
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
          {children}
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
  );
};
