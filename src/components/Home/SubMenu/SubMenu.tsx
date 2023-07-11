import { Tag, Typography } from "antd";
import { Button, Flex } from "../../common";

const { Title } = Typography;

interface ISubMenuProps {
  attempts: number;
}

export const SubMenu = ({ attempts }: ISubMenuProps) => {
  return (
    <Flex
      style={{
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "24px",
        alignItems: "flex-end",
      }}
    >
      <Title
        level={5}
        style={{
          textAlign: "center",
          marginBottom: 0,
          width: "70px",
        }}
      >
        <Tag color="blue">Mismatch: {attempts}</Tag>
      </Title>
      <Title
        level={4}
        style={{
          textAlign: "center",
          marginBottom: 0,
        }}
      >
        Find all the matching cards
      </Title>
      <Button>Reset</Button>
    </Flex>
  );
};
