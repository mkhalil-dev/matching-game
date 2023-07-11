import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { useAuthContext } from "../../../context/AppContext";
import "./NavBar.css";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
];

export const AppMenu: React.FC = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useAuthContext();

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
        backgroundColor: "#fff",
      }}
    >
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={items}
        selectedKeys={selectedKey}
        className="NavMenu"
        style={{
          borderBottom: "none",
        }}
      />
      <Flex
        style={{
          marginRight: "16px",
          width: "170",
          alignItems: "center",
        }}
      >
        <Typography.Text
          style={{
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Welcome {username}
        </Typography.Text>
        <Button
          onClick={handleLogout}
          danger
          icon={<LogoutOutlined />}
          type="link"
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};
