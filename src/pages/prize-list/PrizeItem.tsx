import styled from "styled-components";
import { message } from "antd";
import { Prize } from "../../models/prize";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -12px;
  width: 100%;
  height: 24px;
  z-index: 1;

  background-image: url("/img/bg_trophy_name.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`

const Name = styled.div`
  margin-top: 0;
  font-size: 20px;
  width: 84px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface PrizeItemProps {
  prize: Prize
  name: string
}

export function PrizeItem(props: PrizeItemProps) {
  const { prize, name } = props
  const { user } = useAuthContext()

  const { id } = useParams()

  const navigate = useNavigate()

  return (
    <Container>
      <img
        alt="img"
        src={`/img/trophy/trophy_${prize.trophyIndex}.png`}
        style={{
          height: "130px",
          padding: "8px",
          paddingBottom: "4px",
        }}
        onClick={() => {
          // 모두가 상 볼 수 있도록 변경
          navigate("/prize", { state: { prize: props.prize, name } })
          // if (user?.id === id) {
          //   navigate("/prize", { state: { prize: props.prize } })
          // } else {
          //   message.open({
          //     content: "나만의 진열장을 만들어보세요! ",
          //     icon: " 🏆 ",
          //     style: {
          //       marginTop: "75vh",
          //       fontFamily: "nanum",
          //       fontSize: "1.5rem"
          //     }
          //   })
          // }
        }}
      />
      <Bottom>
        <Name>{props.prize.author}</Name>
      </Bottom>
    </Container>
  )
}