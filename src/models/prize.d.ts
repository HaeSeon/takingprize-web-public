export interface Prize {
  templateIndex: number
  frameIndex: number
  contents: {
    year: string
    month: string
    day: string
    text1?: string
    text2?: string
    text3?: string
    // text 개수 가변적
  }
  trophyIndex: number
  message: string
  author: string
}
