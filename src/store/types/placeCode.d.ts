export interface HealthCode {
  name: string // 名称
  colorCode: string // 码色
  qrCode: string // 二维码的图片
  qrCodeUrl: string // 二维码链接
  unitName: string //单位名称
  goldWire: number | string //核酸状态
  codeDescribe: string // 健康码描述
}

export interface ChangeType {
  [key: string]: Function
}

export interface NucleicAcid {
  time: number | string
  timeUnit: string
  colorCss: string
  newPcrStatusDesc: string
  newPcrStatus: number | string
  pcrDisplayStatus: string
}
export interface KeyArea {
  travelInfo: string | number
  desensitizePhone: string
  phoneSec: string
}

export enum UiStyle {
  normal = 'normal',
  elder = 'elder'
}

export interface AcidCountdownPanel {
  leftLabel: string
  thresholdDaysAsDisplayDayHour: number
  textColor: string
  expireTimestamp: any
}

export interface LimitGatherConfig {
  title: string
  content: string
}
export interface PlaceState {
  healthCode: HealthCode
  nucleicAcid: NucleicAcid
  keyArea: KeyArea
  communityCode: string
  placeData: any // 场所码所有的数据
  uiStyle: string
  acidCountdownPanel: AcidCountdownPanel
  limitGatherConfig: LimitGatherConfig | null
}
