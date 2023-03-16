import styled from "styled-components";
import { Prize } from "../../models/prize";
import { PrizeItem } from "./PrizeItem";

const Container = styled.div`
  height: 158px;
  contain: content;
  margin: 0 -20px;
`

const Items = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  padding: 0 18px;
  gap: 16px;
  justify-content: space-between;
`

const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
`

Bottom.defaultProps = {
  src: "/img/bg_trophy_row.png"
}

interface PrizeListRowProps {
  prizes: Prize[]
  name: string
}

export function PrizeListRow(props: PrizeListRowProps) {
  const { prizes, name } = props
  const first = prizes[0]
  const second = prizes[1]
  const third = prizes[2]

  return (
    <Container>
      <Items>
        {first && <PrizeItem prize={first} name={name} />}
        {second && <PrizeItem prize={second} name={name} />}
        {third && <PrizeItem prize={third} name={name} />}
      </Items>

      <Bottom />
    </Container>
  )
}