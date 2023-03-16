import React from 'react';
import { Button, message } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";

export function Home() {

  const navigate = useNavigate();
  const authContext = useAuthContext()
  const handleClickButton = () => {
    if (authContext.user?.id) {
      navigate(`/users/${authContext.user?.id}/prizeList`)
    } else {
      message.open({
        content: "로그인을 해주세요! ",
        icon: " 🏆 ",
        style: {
          marginTop: "75vh",
          fontFamily: "nanum",
          fontSize: "1.5rem"
        }
      })
      navigate("/auth/login")
    }
  }
  return (
    <div style={{ padding: "16px", width: "100%", height: "90vh", display: "flex", minHeight: "600px", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", backgroundImage: `url("/img/background.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <h3 style={{ fontWeight: 600 }}>별걸 다 시상하는 <br />킹받는 어워즈</h3 >
      <img

        src="/img/typography.png"
        alt=""
        width={"200px"}
      />
      <h3 style={{ fontWeight: 600 }}>오늘도 숨 쉬느라 고생하신<br />귀하의 노고에 상을 드립니다. </h3>
      <div style={{ display: "flex", gap: "16px" }}>
        <h3 style={{ fontWeight: 600, margin: 0 }}>온국민킹받위원회</h3>
        <img
          src="/img/stamp_black.png"
          alt=""
          width={"40px"}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{
          backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
        }}>
          <Button type="link" style={{ width: "200px", height: "50px", color: "black" }}
            onClick={() => { navigate(`/auth/signup`) }}
          >
            <div style={{ fontWeight: 600 }}>
              내 진열장 만들기
            </div>
          </Button>
        </div>
        <div style={{
          backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
        }}>
          <Button type="link" style={{ width: "200px", height: "50px", color: "black" }}
            onClick={handleClickButton}
          >
            <div style={{ fontWeight: 600 }}>
              내 진열장 보러가기
            </div>
          </Button>
        </div>
      </div >
    </div >
  )
}
