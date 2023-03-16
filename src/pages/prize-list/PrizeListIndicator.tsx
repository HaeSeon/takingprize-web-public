import styled from "styled-components";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

const Content = styled.p`
  text-align: center;
  margin: 0 0 6px;
  font-size: 28px;
`

interface PrizeListIndicator {
  currentPage: number
  totalPage: number
  onNext: () => void
  onPrev: () => void
}

export function PrizeListIndicator(props: PrizeListIndicator) {
  const { currentPage, totalPage, onPrev, onNext } = props

  return (
    <Container>
      <DoubleLeftOutlined onClick={onPrev} />
      <Content>{currentPage} / {totalPage}</Content>
      <DoubleRightOutlined onClick={onNext} />
    </Container>
  )
}