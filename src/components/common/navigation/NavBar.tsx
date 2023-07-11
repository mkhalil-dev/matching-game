import { HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
];

export const AppMenu: React.FC = () => {
  const navigate = useNavigate();

  const [selectedKey, setSelectedKey] = useState<MenuProps["selectedKeys"]>();

  useEffect(() => {
    setSelectedKey([window.location.pathname.slice(1)]);
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      items={items}
      selectedKeys={selectedKey}
    />
  );
};
