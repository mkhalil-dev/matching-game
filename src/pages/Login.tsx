import { Flex, FlexCenter } from "../components/common";
import LoginForm from "../components/forms/LoginForm";
import { Typography } from "antd";
import { useState } from "react";

const Login: React.FC = () => {
  // When the user submits the form, we save the username in the local storage.
  const [loading, setLoading] = useState(false);
  const handleSubmit = (username: string) => {
    setLoading(true);
    localStorage.setItem("username", username);
  };

  return (
    <FlexCenter style={{ height: "100vh", width: "100vw" }}>
      <Flex
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <Typography.Title level={3}>Login</Typography.Title>
        <LoginForm onSubmit={handleSubmit} loading={loading} />
      </Flex>
    </FlexCenter>
  );
};

export default Login;
