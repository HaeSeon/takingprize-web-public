import React from "react";
import { Col } from 'antd'
import { useParams } from "react-router-dom";
import { PrizeComponent } from '../../components/layout/Prize'
import { Prize } from '../../models/prize'
import { PrizeListHeader } from "./PrizeListHeader";
import { PrizeListFooter } from "./PrizeListFooter";
import { usePrizes } from "../../hooks/usePrizes";
import styled from "styled-components";
import { PrizeList } from "./PrizeList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: 16px 32px;
`

export function PrizeListPage() {
  const { id } = useParams()
  const {
    prizes,
    userName,
    totalPage,
    hasPrize,
    page,
    goPrev,
    goNext
  } = usePrizes(id)

  return (
    <Container>
      <PrizeListHeader name={userName} />

      <ContentContainer>
        <PrizeList
          hasPrize={hasPrize}
          prizes={prizes}
          onPrev={goPrev}
          onNext={goNext}
          currentPage={page}
          totalPage={totalPage}
          name={userName}
        />
        {/*<Row gutter={[16, 16]} style={{*/}
        {/*  height: "490px",*/}
        {/*  rowGap: "0px",*/}
        {/*  backgroundImage: `url(/img/bg_trophy.png)`,*/}
        {/*  backgroundSize: "100% 100% ",*/}
        {/*  backgroundRepeat: "no-repeat",*/}
        {/*  backgroundPosition: "center",*/}
        {/*  padding: "16px",*/}
        {/*  paddingTop: "0px"*/}
        {/*}}>*/}
        {/*  {prizes &&*/}
        {/*    prizes.map((prize, index) => (*/}
        {/*      <React.Fragment key={index}>*/}
        {/*        <GridCards prize={prize}></GridCards>*/}
        {/*      </React.Fragment>*/}
        {/*    ))}*/}
        {/*</Row>*/}
      </ContentContainer>
      {/*{hasPrize*/}
      {/*  ? (*/}
      {/*    <div style={{display: "flex"}}>*/}
      {/*      <div style={{textAlign: "start", marginLeft: "auto", marginRight: "16px"}} onClick={goPrev}>*/}
      {/*        <DoubleLeftOutlined/>*/}
      {/*      </div>*/}
      {/*      {page} / {totalPage}*/}
      {/*      <div style={{textAlign: "end", marginRight: "auto", marginLeft: "16px"}} onClick={goNext}>*/}
      {/*        <DoubleRightOutlined/>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*  : <></>*/}
      {/*}*/}

      <PrizeListFooter userId={id!!} userName={userName} />
    </Container>
  )
}

function GridCards(props: { prize: Prize }) {
  return (
    <Col lg={8} md={8} xs={8}>
      <div style={{ position: 'relative' }}>
        <PrizeComponent
          prize={props.prize}
        />
      </div>
    </Col>
  );
}