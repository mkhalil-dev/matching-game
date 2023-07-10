import { Button as AntButton } from "antd";

type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: "small" | "middle" | "large";
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  htmlType?: "submit" | "button" | "reset";
};

export const Button = (props: ButtonProps) => {
  return (
    <AntButton
      style={props.style}
      size={props.size}
      loading={props.loading}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      htmlType={props.htmlType}
    >
      {props.children}
    </AntButton>
  );
};
