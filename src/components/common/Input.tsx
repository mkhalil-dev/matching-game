import { Input as AntdInput } from "antd";
import { InputProps as AntdInputProps } from "antd/lib/input";

export const Input = (props: AntdInputProps) => {
  return <AntdInput {...props} />;
};
