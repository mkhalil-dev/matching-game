import { Result } from "antd";
import { FlexCenter } from "../components/common/Flex";

const NotFound = () => {
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
      />
    </FlexCenter>
  );
};

export default NotFound;
