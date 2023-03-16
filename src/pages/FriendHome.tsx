import { useEffect, useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../modules/user';
import { User } from '../models/user';

export function FriendHome() {
  const navigate = useNavigate();
  const params = useParams()
  const [user, setUser] = useState<User>({} as User)
  const id = params.id
  useEffect(() => {
    if (!id || id === undefined) {
      return
    }
    getUserById(id).then(setUser)
  }, [id])

  return (
    <div style={{ padding: "16px", width: "100%", height: "90vh", display: "flex", flexDirection: "column", justifyContent: "space-evenly", backgroundImage: `url("/img/background.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <h3 style={{ fontWeight: 600 }}>별걸 다 시상하는 <br />킹받는 어워즈</h3 >
      <h1 style={{ fontWeight: 600 }}>#킹받즈</h1>
      <h3 style={{ fontWeight: 600 }}>오늘도 숨 쉬느라 수고한<br />{user.name}님을 위해 </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{
          backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
        }}>
          <Button type="link" style={{ width: "200px", height: "50px", color: "black" }}
            onClick={() => { navigate(`/prizeList/${id}`) }}
          >
            <div style={{ fontWeight: 600 }}>
              시상하러가기
            </div>
          </Button>
        </div>
      </div >
    </div >
  )
}
