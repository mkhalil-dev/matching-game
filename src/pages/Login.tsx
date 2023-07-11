import { Flex, FlexCenter } from "../components/common";
import LoginForm from "../components/Login/forms/LoginForm";
import { Typography } from "antd";
import { useLoginForms } from "../components/Login/hooks/useLogin";

const { Title } = Typography;

const Login: React.FC = () => {
  const { handleSubmit, loading } = useLoginForms();
  return (
    <FlexCenter
      style={{ height: "100vh", width: "100vw" }}
      dataTestId="login-page"
    >
      <Flex
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <Title data-testid="login-form-title" level={3}>
          Login
        </Title>
        <LoginForm onSubmit={handleSubmit} loading={loading} />
      </Flex>
    </FlexCenter>
  );
};

export default Login;
