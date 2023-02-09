import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "../../service/api/login";
import { router } from "../../router";
import { setToken } from "../../config/token";
import "./index.less";
export default function Login() {
  const onFinish = async (values) => {
    const { username, password } = values;
    const result = await login({ username, password });
    setToken(result.data.token);

    router.navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <div className="login-from">
        <Form
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 14,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
              {
                min: 3,
                message: "用户名不能少于三个字符",
              },
              {
                max: 8,
                message: "用户名不能大于八个字符",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              {
                min: 6,
                message: "密码不能小于6个字符",
              },
              {
                max: 20,
                message: "密码不能大于20个字符",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 15,
              //   span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
