import { Prize } from "../../models/prize";
import styled from "styled-components";
import { PrizeListIndicator } from "./PrizeListIndicator";
import { PrizeListRow } from "./PrizeListRow";


const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
  color: #6e6e6e;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100%;

  background-image: url("/img/bg_trophy.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`

interface PrizeListProps {
  prizes: Prize[]
  name: string
  hasPrize: boolean
  totalPage: number
  currentPage: number,
  onPrev: () => void,
  onNext: () => void
}

export function PrizeList(args: PrizeListProps) {
  const {
    hasPrize,
    prizes,
    name,
    onNext,
    onPrev,
    totalPage,
    currentPage
  } = args

  if (!hasPrize) {
    return (
      <EmptyContainer>
        공유해서 진열장을 채워주세요!
      </EmptyContainer>
    )
  }

  return (
    <Container>
      <PrizeListRow name={name} prizes={prizes.slice(0, 3)} />
      <PrizeListRow name={name} prizes={prizes.slice(3, 6)} />
      <PrizeListRow name={name} prizes={prizes.slice(6, 9)} />
      <PrizeListIndicator
        totalPage={totalPage}
        currentPage={currentPage}
        onNext={onNext}
        onPrev={onPrev}
      />
    </Container>
  )
}
