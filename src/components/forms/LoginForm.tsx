import React from "react";
import { Button, Input } from "../common/index";
import { Form } from "antd";
import { validateUsername } from "../validations/loginValidations";

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
            validator: validateUsername,
          },
        ]}
        label="Username"
      >
        <Input />
      </Item>
      <Item>
        <Button loading={props.loading} htmlType="submit">
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
