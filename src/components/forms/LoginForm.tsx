import { Button, Input } from "../common/index";
import { Form } from "antd";
import { validateUsername } from "../validations/loginValidations";
import { Divider } from "antd";

type LoginFormProps = {
  onSubmit: (username: string) => void;
  loading?: boolean;
};

const { Item } = Form;

const LoginForm = (props: LoginFormProps) => {
  // When the user submits the form, we run the handleSubmit function and pass the username to the onSubmit function.
  const handleSubmit = (values: any) => {
    props.onSubmit(values.username);
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
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
        <Button loading={props.loading} htmlType="submit" type="primary">
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
