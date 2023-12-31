import { Button, Input } from "../../common/index";
import { Form } from "antd";
import { validateUsername } from "../validations/loginValidations";
import { Divider } from "antd";
import { TLoginFormValues } from "../hooks/useLogin";

type TLoginFormProps = {
  onSubmit: (values: TLoginFormValues) => void;
  loading?: boolean;
};

const { Item } = Form;

const LoginForm = ({ loading, onSubmit }: TLoginFormProps) => {
  // When the user submits the form, we run the handleSubmit function and pass the username to the onSubmit function.

  return (
    <Form onFinish={onSubmit} layout="vertical" data-testid="login-form">
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
        <Input data-testid="login-form-username" />
      </Item>
      <Divider />
      <Item>
        <Button
          loading={loading}
          data-testid="login-form-submit"
          htmlType="submit"
          type="primary"
          block
        >
          Start playing
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
