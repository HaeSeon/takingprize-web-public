import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { Button, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 16px 8px;
`

const ButtonBase = styled(Button)`
  width: 100%;
  height: 48px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`

export function PrizeListFooter(args: {
  userId: string,
  userName: string
}) {
  const { userId, userName } = args
  const { user: me } = useAuthContext()
  const isMine = !!me && me.id === userId
  const navigate = useNavigate()

  function handleCopyLink() {
    const link = `https://takingprize.com/users/${userId}/prizeList`

    navigator.clipboard.writeText(link)
      .then(() => {
        message.open({
          content: "링크 복사 완료! ",
          icon: " 🏆 ",
          style: {
            marginTop: "75vh",
            fontFamily: "nanum",
            fontSize: "1.5rem"
          }
        })
      })
      .catch(() => {
        try {
          const textArea = document.createElement('textarea')
          document.body.appendChild(textArea)
          textArea.value = link
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          message.open({
            content: "링크 복사 완료!! ",
            icon: " 🏆 ",
            style: {
              marginTop: "75vh",
              fontFamily: "nanum",
              fontSize: "1.5rem"
            }
          })
        } catch {
          message.open({
            content: "링크 복사 실패 ",
            icon: " ❗ ",
            style: {
              marginTop: "75vh",
              fontFamily: "nanum",
              fontSize: "1.5rem"
            }
          })
        }
      })
  }

  if (isMine) {
    return (
      <Container>
        <ButtonBase
          type={"primary"}
          onClick={handleCopyLink}
        >
          공유 하기
        </ButtonBase>
      </Container>
    )
  }

  return (
    <Container>
      <ButtonContainer>
        <ButtonBase
          type={"primary"}
          onClick={() => {
            navigate(`/users/${userId}/prize/trophy`, { state: { userName } })
          }}
        >
          시상하기
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            navigate("/auth/login")
          }}
        >
          내 트로피 만들기
        </ButtonBase>
      </ButtonContainer>
    </Container>
  )
}