import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/es/button/button";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return <AntButton {...rest}>{children}</AntButton>;
};
