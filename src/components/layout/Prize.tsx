import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Prize } from '../../models/prize'
import { useAuthContext } from "../../context/AuthContext";

export function PrizeComponent(props: { prize: Prize }) {

  const authContext = useAuthContext()

  const navigate = useNavigate()
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <img alt="img" src={`/img/trophy/trophy_${props.prize.trophyIndex}.png`}
        style={{
          height: "130px",
          padding: "8px",
          paddingBottom: "0px",
        }}
        onClick={() => {
          if (authContext.user?.id) {

            navigate("/prize", { state: { prize: props.prize } })
          } else {
            message.open({
              content: "나만의 진열장을 만들어보세요! ",
              icon: " 🏆 ",
              style: {
                marginTop: "75vh",
                fontFamily: "nanum",
                fontSize: "1.5rem"
              }
            })
          }
        }}
      />
      <div style={{ marginTop: "-12px" }}>
        {props.prize.author}
      </div>
    </div>
  )
}

