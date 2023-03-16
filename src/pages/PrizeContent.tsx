import { Button, message } from 'antd'
import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { prizeComponentSet, Textfield } from '../components/prizeSheet/Template'
export function PrizeContent() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const imgUrl = `/img/frames/frame_${state.frameIndex}.png`
  const templateIndex = state.templateIndex
  const { id } = useParams()

  let textForm = {}
  const getTextValue = (textField: Textfield) => {
    textForm = textField
  }
  const prizeComponents = Object.values(prizeComponentSet(true, state.userName, getTextValue))
  useEffect(() => {
    if (state == null || state === undefined) {
      message.warning("잘못된 접근입니다.")
      navigate("/home")
    }
  }, [state, navigate])

  return <div >
    <img src="/img/leaf.png" alt="" width={"50px"} />
    <h2 style={{ marginBottom: 0 }}>4. 내용을 채워서 완성해주세요.</h2>
    <div style={{ display: "flex", width: "100%", padding: "16px", height: "600px", minHeight: "600px" }}>

      <div style={{ marginLeft: "16px", marginRight: "16px", flexGrow: 8, width: "100%", height: "100%", backgroundImage: `url(${imgUrl})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        {prizeComponents[templateIndex]}
      </div>

    </div>

    <div style={{ display: "flex", marginBottom: "16px" }}>
      <div style={{
        backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
      }}>
        <Button type="link" style={{ width: "160px", height: "50px", color: "grey" }}
          onClick={() => {
            navigate(-1)
          }}
        >
          <div style={{ fontWeight: 600 }}>
            이전단계로
          </div>
        </Button>
      </div>

      <div style={{
        backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
      }}>
        <Button type="link" style={{ width: "160px", height: "50px", color: "black" }}
          onClick={() => {
            if (Object.keys(textForm).length !== 0) {
              navigate(`/users/${id}/prize/message`, { state: { ...state, templateIndex, contents: textForm } })
            } else {
              message.open({
                content: "빈 칸을 모두 채워주세요! ",
                icon: " 🏆 ",
                style: {
                  marginTop: "75vh",
                  fontFamily: "nanum",
                  fontSize: "1.5rem",
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
    </div >
  </div>
}