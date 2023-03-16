import { Divider } from 'antd'

export function About() {
  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", width: "100%", height: "100%", minHeight: "600px" }}>
      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        <div
          style={{ width: "100%", height: "70%", minHeight: "600px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", backgroundImage: `url("/img/about_bg.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div>
            Team. 킹받즈
            <br />
            <br />
            <div style={{ fontSize: "20px", fontWeight: 500 }}>
              Designer @mynameisyunz
              <br />
              Developer @haesun_2
              <br />
              Illustrator @byeong___kwon
            </div>
          </div>
        </div>
      </div>

      <Divider style={{ margin: "16px 0" }}></Divider>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 500 }}>
        <div style={{ textAlign: "left" }}>멋지지 않아도 괜찮아 그 자체로도 괜찮아 <br />
          너는 숨 쉬는 것만으로도 멋진 사람이야</div>
        <div style={{ textAlign: "right" }}>© 2022 Copyright 2022 takingprize <br />All rights reserved</div>
      </div>
    </div>
  )
}