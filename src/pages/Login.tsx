import * as React from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import { Button, Form, Input } from 'antd'
import { login } from "../modules/auth";
import { useAuthContext } from "../context/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const authContext = useAuthContext()

  async function handleSubmit(args: { email: string, password: string }) {
    const email = args.email
    const password = args.password
    const res = await login({ email, password });
    if (res) {
      const from = location.state?.from?.pathname || `/me/prizeList`;
      authContext.setUser({ email: res.data.email, name: res.data.name, id: res.data.id, prizes: [] })
      navigate(from, { replace: true });
    }

  }

  return (
    <div>
      <h1>로그인</h1>
      <Form
        onFinish={handleSubmit}
        initialValues={{ remember: true }}
        style={{ padding: "16px" }}
      >
        <Form.Item
          label="이메일"
          name="email"
          rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          style={{ width: "100%", height: "50px", marginTop: "32px", marginBottom: "16px" }}
          htmlType="submit">
          Login
        </Button>
      </Form>

      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=client_id&redirect_uri=http://localhost:3000/auth/google/callback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code">
        <img src="/img/button_google.png" alt="" />
      </a>

    </div>
  );
}

