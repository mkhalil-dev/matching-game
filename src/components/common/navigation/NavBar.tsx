import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { useAuthContext } from "../../../context/AppContext";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
];

export const AppMenu: React.FC = () => {
  const navigate = useNavigate();
  const { setUsername } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  const [selectedKey, setSelectedKey] = useState<MenuProps["selectedKeys"]>();

  useEffect(() => {
    setSelectedKey([window.location.pathname.slice(1)]);
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Flex
      style={{
        alignItems: "center",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={items}
        selectedKeys={selectedKey}
        style={{
          lineHeight: "64px",
          width: "100%",
          borderBottom: "none",
        }}
      />
      <Button
        onClick={handleLogout}
        danger
        icon={<LogoutOutlined />}
        style={{
          marginRight: "16px",
        }}
        type="link"
      >
        Logout
      </Button>
    </Flex>
  );
};
