import { Input as AntdInput } from "antd";

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  size?: "small" | "middle" | "large";
  type?: "text" | "password";
};

export const Input = (props: InputProps) => {
  return (
    <AntdInput
      style={props.style}
      size={props.size}
      value={props.value}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};
