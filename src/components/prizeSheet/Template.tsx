import { Input } from "antd"

import '../../styles/input.css';
export interface Textfield {
  year: string
  month: string
  day: string
  text1: string
  text2: string
  text3: string
}

export function Template1(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield



  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2 && textForm.text3) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        위촉장
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 <Input type="text"
            className="underline-input"
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="살아 숨쉬기"
            maxLength={8}
            bordered={false}
            disabled={!props.available ? true : false} /> 로
          <br />타의 모범이 되므로
          <br /><Input
            className="underline-input"
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="대한들숨날숨"
            maxLength={8}
            bordered={false}
            disabled={!props.available ? true : false}></Input> 위원회
          <br />
          위원장으로 위촉합니다.
        </div>
        <div>
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            onChange={(e) => {
              textForm.text3 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="대표 김 활어"
            maxLength={10}
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}


export function Template2(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        상장
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 평소 근면한 생활태도와
          <br />성실한 자기주도적
          <br />
          <Input type="text"
            className="underline-input"
            maxLength={8}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="취침"
            disabled={!props.available ? true : false} /> 능력이 뛰어나
          <br />
          타의 모범이 되므로
          <br />이 상장을 수여합니다.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="국립베개안전연구원"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}

export function Template3(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        임명장
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 평소 근면성실한 자세로
          <br />최선을 다하여
          <Input type="text"
            className="underline-input"
            maxLength={8}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="만취하였으므로"
            disabled={!props.available ? true : false} />
          <br />
          <Input type="text"
            className="underline-input"
            maxLength={8}
            bordered={false}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="음주측정학과"
            disabled={!props.available ? true : false} />의 과 대표로
          <br />
          임명함.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text3 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="경찰대 총장 포돌이"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}

export function Template4(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        감사패
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          귀하는 타의 모범이되어 열성적으로
          <br />
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="냅다 바닥에 드러눕기"
            disabled={!props.available ? true : false} /> 문화를
          <br />
          주도하였으므로 감사의 뜻을 모아
          <br />
          이 패를 드립니다.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="국민 금쪽이 관리공단"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}


export function Template5(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        표창장
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 투철한 사명의식으로
          <br />
          맡은 바 업무를 성실히 수행하여
          <br />
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="치킨 뼈를 발골"
            disabled={!props.available ? true : false} /> 한
          <br />
          공이 크므로 이에 표창함.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="대한반반무많이협회"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}

export function Template6(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        대상
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="천하제일 밥짓기 대회"
            disabled={!props.available ? true : false} />에서
          <br />
          창의적인 아이디어와 노력으로
          <br />
          우수한 성적을 거두었기에
          <br />
          본 상을 드립니다.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="국밥부장관"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}

export function Template7(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        학위증
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 평소 성실하고 모범적인
          <br />
          배움의 자세로 본교에서 실시한
          <br />
          <Input type="text"
            className="underline-input"
            maxLength={8}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="척척꼰대 박사과정"
            disabled={!props.available ? true : false} />을 이수하였기에
          <br />
          증서를 수여함.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="청와대학교 총장"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}



export function Template8(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        졸업장
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 본교 3개년의
          <br />
          모든
          <Input type="text"
            className="underline-input"
            maxLength={8}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="뚝딱이 양성"
            disabled={!props.available ? true : false} />과정을
          <br />
          우수한 성적으로 수료하였으므로
          <br />
          이 졸업장을 수여합니다.

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="뚝딱고등학교 교장"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}

export function Template9(props: { available: boolean, userName: string, getTextValue: Function }) {
  const today = new Date()
  const year = `${today.getFullYear()}`;
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const textForm = {} as Textfield
  textForm.year = year
  textForm.month = month
  textForm.day = day
  const sendTextValue = (textForm: Textfield) => {
    if (textForm.text1 && textForm.text2) {
      props.getTextValue(textForm)
    }
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2 style={{ paddingTop: "96px", fontWeight: 600 }}>
        공로상
      </h2>
      <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "40px" }}>
        <div style={{ marginLeft: "auto", paddingRight: "40px" }}>
          이름 : {props.userName}
        </div>
        <div>
          위 사람은 탁월한 능력을 발휘하여
          <br />
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            bordered={false}
            onChange={(e) => {
              textForm.text1 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="킹받즈 사이트 제작"
            disabled={!props.available ? true : false} />을(를) 위해
          <br />
          기여한 공이 크므로 이에 표창함

        </div>
        <div >
          {year}년 {month}월 {day}일
        </div>
        <div>
          <Input type="text"
            className="long-underline-input"
            maxLength={10}
            onChange={(e) => {
              textForm.text2 = e.target.value
              sendTextValue(textForm)
            }}
            placeholder="NEVER 대표이사"
            bordered={false}
            disabled={!props.available ? true : false} />
          <img src="/img/stamp_red.png" width={"40px"} alt="" style={{ marginLeft: "16px" }} />
        </div>
      </div>
    </div >
  )
}

export const prizeComponentSet = (available: boolean, userName: string, getTextValue: Function) => {
  return {
    0: <Template1 available={available} userName={userName} getTextValue={getTextValue} />,
    1: <Template2 available={available} userName={userName} getTextValue={getTextValue} />,
    2: <Template3 available={available} userName={userName} getTextValue={getTextValue} />,
    3: <Template4 available={available} userName={userName} getTextValue={getTextValue} />,
    4: <Template5 available={available} userName={userName} getTextValue={getTextValue} />,
    5: <Template6 available={available} userName={userName} getTextValue={getTextValue} />,
    6: <Template7 available={available} userName={userName} getTextValue={getTextValue} />,
    7: <Template8 available={available} userName={userName} getTextValue={getTextValue} />,
    8: <Template9 available={available} userName={userName} getTextValue={getTextValue} />
  }
}