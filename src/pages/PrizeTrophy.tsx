import '../styles/input.css';
import { Button, List, message } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../modules/user';
import { User } from '../models/user';
import '../styles/prize-trophy.css'

const trophyCount = 22
const imageIndexArr = () => {
  let arr = []
  for (let i = 0; i < trophyCount; i++) {
    arr.push({ index: i })
  }
  return arr
}
export function PrizeTrophy() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({} as User)
  const [trophyIndex, setTrophyIndex] = useState(undefined as unknown as number);
  useEffect(() => {
    if (!id || id === undefined) {
      return
    }
    getUserById(id).then(setUser)
  }, [id])


  useEffect(() => {
    if (state == null || state === undefined) {
      message.warning("잘못된 접근입니다.")
      navigate("/home")
    }
  }, [state, navigate])

  return <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
    <div>
      <img src="/img/leaf.png" alt="" width={"50px"} />
      <h2 style={{ marginBottom: 0 }}>1. {user.name} 님에게 <br /> 주고싶은 트로피를 골라주세요.</h2>
    </div>

    <List
      style={{ padding: "16px", height: "500px", overflow: "scroll" }}
      grid={{
        gutter: 16,
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={imageIndexArr()}
      renderItem={(item) => (
        <List.Item
          style={{ padding: 0 }}>
          <img alt="img" src={`/img/trophy/trophy_${item.index}.png`}
            className={"prizeIcon" + (item.index === trophyIndex ? " active" : "")}
            style={{
              height: "150px",
              padding: "8px",
              objectFit: "contain"
            }}
            onClick={() => {
              setTrophyIndex(item.index);
            }}
          />
        </List.Item>
      )}
    />


    <div style={{ display: "flex", marginBottom: "16px", width: "100%" }}>
      <div style={{
        backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
      }}>
        <Button type="link" style={{ width: "160px", height: "50px", color: "grey" }}
          onClick={() => {
            navigate(-1)
          }}
        >
          <div style={{ fontWeight: 600 }}>
            진열장으로
          </div>
        </Button>
      </div>


      <div style={{
        backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
      }}>
        <Button type="link" style={{ width: "160px", height: "50px", color: "black" }}
          onClick={() => {
            if (trophyIndex !== undefined) {
              // navigate(`/users/${id}/prize/message`, { state: { ...state, trophyIndex } })
              navigate(`/users/${id}/prize/frame`, { state: { ...state, trophyIndex } })
            } else {
              message.open({
                content: "트로피를 골라주세요! ",
                icon: " 🏆 ",
                style: {
                  marginTop: "75vh",
                  fontFamily: "nanum",
                  fontSize: "1.5rem"
                }
              })
            }
          }}
        >
          <div style={{ fontWeight: 600 }}>
            다음으로
          </div>
        </Button>
      </div>
    </div>

  </div >
}


