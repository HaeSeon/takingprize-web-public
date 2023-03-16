import { useLocation, useNavigate, } from "react-router-dom";
import { Button, Form, Input } from 'antd'
import { signUp } from "../modules/auth";
import { useAuthContext } from "../context/AuthContext";


export function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();

  const authContext = useAuthContext()

  async function handleSubmit(args: { email: string, name: string, password: string }) {
    const email = args.email
    const name = args.name
    const password = args.password
    const res = await signUp({ email, name, password });
    if (res) {
      const from = location.state?.from?.pathname || `/me/prizeList`;
      authContext.setUser({ email: res.data.email, name: res.data.name, id: res.data.id, prizes: [] })
      navigate(from, { replace: true });
    }

  }
  // const callbackUrl = "https://api.takingprize.com/auth/google/callback"
  const callbackUrl = "http://localhost:3000/auth/google/callback"
  return (
    <div>
      <h1>회원가입</h1>
      <Form
        onFinish={handleSubmit}
        initialValues={{ remember: true }}
        style={{ padding: "16px" }}
      >
        <Form.Item
          label="이메일"
          name="email"
          rules={[{ required: true, message: '올바른 형식의 이메일을 입력해주세요!', type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="닉네임"
          name="name"
          rules={[{ required: true, message: '10자리 이하 닉네임을 입력해주세요!', max: 10 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '6-12자리 비밀번호를 입력해주세요!', min: 6, max: 12 }]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          style={{ width: "100%", height: "50px", marginTop: "32px", marginBottom: "16px" }}
          htmlType="submit">
          Sign Up
        </Button>
      </Form>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=373927685467-r0j87gsi6cq3qu2s4g43k7c6iptn7emh.apps.googleusercontent.com&redirect_uri=http://localhost:3000/auth/google/callback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code">
        <img src="/img/button_google.png" alt="" />
      </a>
    </div>
  );
}

