import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function PrizeListHeader(args: {
  name: string
}) {
  const {name} = args

  return (
    <Container>
      <img src="/img/leaf.png" alt="" width={"50px"}/>
      <h1 style={{margin: "0"}}>
        {name}님의 진열장
      </h1>
    </Container>
  )
}