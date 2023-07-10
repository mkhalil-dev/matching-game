import { Button, Input } from "../common/index";
import { Form } from "antd";
import { validateUsername } from "../validations/loginValidations";
import { Divider } from "antd";
import { TLoginFormValues } from "../hooks/useLogin";

type LoginFormProps = {
  onSubmit: (values: TLoginFormValues) => void;
  loading?: boolean;
};

const { Item } = Form;

const LoginForm = ({ loading, onSubmit }: LoginFormProps) => {
  // When the user submits the form, we run the handleSubmit function and pass the username to the onSubmit function.

  return (
    <Form onFinish={onSubmit} layout="vertical">
      <Item
        name="username"
        rules={[
          {
            required: true,
            validator: validateUsername,
          },
        ]}
        label="Username"
      >
        <Input />
      </Item>
      <Divider />
      <Item>
        <Button loading={loading} htmlType="submit" type="primary">
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
