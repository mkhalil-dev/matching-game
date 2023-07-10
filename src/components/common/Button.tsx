import { Button as AntButton } from "antd";

type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: "small" | "middle" | "large";
};

const Button = (props: ButtonProps) => {
  return (
    <AntButton
      style={props.style}
      size={props.size}
      loading={props.loading}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </AntButton>
  );
};

export default Button;
