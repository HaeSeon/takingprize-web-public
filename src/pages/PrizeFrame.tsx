import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
export function PrizeFrame() {
  const [index, setIndex] = useState<number>(0)
  const imgUrl = `/img/frames/frame_${index}.png`
  const imageCount = 9

  const { id } = useParams()
  const { state } = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    if (state == null || state === undefined) {
      message.warning("잘못된 접근입니다.")
      navigate("/home")
    }
  }, [state, navigate])

  const handleClickRight = () => {
    if (index >= imageCount - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const handleClickLeft = () => {
    if (index === 0) {
      setIndex(imageCount - 1)
    } else {
      setIndex(index - 1)
    }
  }
  return <div >
    <img src="/img/leaf.png" alt="" width={"50px"} />
    <h2 style={{ marginBottom: 0 }}>2. 상장 틀을 선택해주세요.</h2>
    <div style={{ display: "flex", width: "100%", padding: "16px", height: "600px", minHeight: "600px" }}>
      <div style={{ flexGrow: 1, textAlign: "start", margin: "auto" }} onClick={handleClickLeft}><DoubleLeftOutlined /></div>
      <div style={{ flexGrow: 8, height: "100%", width: "100%", backgroundImage: `url(${imgUrl})`, backgroundSize: "95% 95%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      </div>
      <div style={{ flexGrow: 1, textAlign: "end", margin: "auto" }} onClick={handleClickRight}>
        <DoubleRightOutlined />
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
          onClick={() => { navigate(`/users/${id}/prize/name`, { state: { ...state, frameIndex: index } }) }}
        >
          <div style={{ fontWeight: 600 }}>
            다음으로
          </div>
        </Button>
      </div>
    </div>
  </div >
}