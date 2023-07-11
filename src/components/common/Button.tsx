import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/es/button/button";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

interface ISuccessButtonProps extends IButtonProps {
  children: React.ReactNode;
  type?: "primary";
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return <AntButton {...rest}>{children}</AntButton>;
};

export const SuccessButton = ({ children, ...rest }: ISuccessButtonProps) => {
  return (
    <Button
      {...rest}
      type="primary"
      style={{
        backgroundColor: "#52c41a",
        borderColor: "#52c41a",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#73d13d";
        e.currentTarget.style.borderColor = "#73d13d";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#52c41a";
        e.currentTarget.style.borderColor = "#52c41a";
      }}
    >
      {children}
    </Button>
  );
};
