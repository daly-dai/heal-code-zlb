export interface PlaceExternal {
  realNameCertification: string // 实名认证
  claimsHealthCode: string // 申领健康码地址
  healthCodeUrl: string
  NUARecord: string // 核酸检测
}

interface StrObj {
  [key: string]: string
}

// 单点登录跳转地址
const REDIRECT_URL_MAP: StrObj = {
  localhost: '&redirectUrl=http://localhost:8000',
  lastTest:
    '&redirectUrl=https://mapi.zjzwfw.gov.cn/web/mgop/gov-open/zj/2002202111/lastTest/index.html',
  reserved:
    '&redirectUrl=https://mapi.zjzwfw.gov.cn/web/mgop/gov-open/zj/2002202111/reserved/index.html'
}

// 浙里办后端服务地址
const ZLB_SERVER_URL_MAP: StrObj = {
  localhost: 'http://172.18.50.16:8097/thd',
  lastTest: 'https://szhzjkm.hangzhou.gov.cn:8097/thd',
  reserved: 'https://szhzjkm.hangzhou.gov.cn:9092'
}

export { REDIRECT_URL_MAP, ZLB_SERVER_URL_MAP }
