import '../styles/input.css';
import { Input, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { postPrize } from '../modules/prize';
import Loading from '../components/Loading';
const { TextArea } = Input;
export function PrizeMessagePage() {
  const { state } = useLocation()

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (state == null || state === undefined) {
      message.warning("잘못된 접근입니다.")
      navigate("/home")
    }
  }, [state, navigate])

  const [messageText, setMessageText] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  return <div>
    <img src="/img/leaf.png" alt="" width={"50px"} />
    <h2 style={{ marginBottom: 0 }}>5. 상과 함께 전할 <br /> 축하메세지를 작성해주세요.</h2>
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "64px" }}>

      <div style={{ height: "100%", width: "100%", padding: "32px", paddingTop: "48px", backgroundImage: `url("/img/note.png")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div style={{ margin: "10%", marginTop: '56px' }}>
          <TextArea
            placeholder="친구에게 상과 함께 보낼 메세지를 입력해주세요! 메세지는 모두가 읽을 수 있어요."
            autoSize={{ minRows: 6, maxRows: 6 }}
            maxLength={200}
            bordered={false}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>

            트로피 이름 :
            <Input placeholder='연구대상'
              className='underline-input'
              maxLength={8}
              bordered={false}
              style={{ width: "130px", marginLeft: "8px" }}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}></Input>
          </div>
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
            onClick={async () => {
              if (author && messageText) {
                const body = { ...state, author: author, message: messageText }
                await postPrize(id!, body)

                navigate(`/users/${id}/prizeList`)
              } else {
                message.open({
                  content: "모든 항목을 입력해주세요! ",
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
              상장 발행
            </div>
          </Button>
        </div>
      </div>
    </div>
  </div >
}