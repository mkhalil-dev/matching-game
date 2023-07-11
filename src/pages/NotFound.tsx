import { Result } from "antd";
import { Button, FlexCenter } from "../components/common/index";
import { useAuthContext } from "../context/AppContext";

const NotFound = () => {
  const { username } = useAuthContext();
  return (
    <FlexCenter
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => window.location.replace(username ? "/home" : "/")}
          >
            Back Home
          </Button>
        }
      />
    </FlexCenter>
  );
};

export default NotFound;
