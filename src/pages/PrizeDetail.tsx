import { Button, Input, Divider } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { prizeComponentSet } from '../components/prizeSheet/CompleteTemplate'
import { Prize } from '../models/prize'
export function PrizeDetail() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const prize: Prize = state.prize
  const name = state.name
  const imgUrl = `/img/frames/frame_${prize.frameIndex}.png`

  const { TextArea } = Input;
  const prizeComponents = Object.values(prizeComponentSet(prize, name))

  return <div >
    <img src="/img/leaf.png" alt="" width={"50px"} />
    <h2 style={{ marginBottom: 0, fontWeight: 600 }}>{prize.author}님이 준 상</h2>
    <div style={{ display: "flex", width: "100%", padding: "16px", height: "600px", }}>

      <div style={{ marginLeft: "16px", marginRight: "16px", flexGrow: 8, width: "100%", height: "100%", backgroundImage: `url(${imgUrl})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        {prizeComponents[prize.templateIndex]}
      </div>
    </div>

    <Divider></Divider>

    <div style={{ padding: "32px", margin: "16px", paddingTop: "48px", backgroundImage: `url("/img/note.png")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <div style={{ margin: "10%", marginTop: '56px' }}>
        <TextArea
          autoSize={{ minRows: 6, maxRows: 6 }}
          maxLength={200}
          bordered={false}
          value={prize.message}
          style={{ color: "black", fontWeight: 600 }}
          disabled={true}
        />
        <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>

          from.
          <Input
            className='underline-input'
            maxLength={8}
            bordered={false}
            style={{ width: "130px", marginLeft: "8px", color: "black", fontWeight: 600 }}
            value={prize.author}
            disabled={true} />
        </div>
      </div>
    </div>

    <div style={{ marginBottom: "32px" }}>
      <div style={{
        backgroundImage: `url("/img/button.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "auto"
      }}>
        <Button type="link" style={{ width: "200px", height: "50px", color: "black" }}
          onClick={() => {
            navigate(-1)
          }}
        >
          <div style={{ fontWeight: 600 }}>
            확인
          </div>
        </Button>
      </div>
    </div>
  </div >
}