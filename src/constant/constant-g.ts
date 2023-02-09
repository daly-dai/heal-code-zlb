// 市民卡appId
const citizenAppId = '354803484987518976'
const LOCAL_STORAGE_KEY = 'cacheData'

const AES_KEY = '309afbf7f4b5ae5ce78c2d733fff2a98'

// sm加密相关
const SM_ENCRYPT = {
  SM2: {
    PUBLIC_KEY:
      '0450568b9861309b14f31c22f8f6328567dde9e85691a653e78e5aa2542fe26a3f476c56a58c848ec315ce6fba1bd123b6ea4218de5a27227a93c228a5e6bdaf55',
    CIPHER_MODE: 1,
    PRIVATE_KEY:
      '5461f43ee73f6b9921d25f6228626562402e1fcdb854ac63c871754cca7001ae'
  },
  SM4: {
    PUBLIC_KEY: '38353636336332323637653534323537'
  }
}

const AXIOS_CONFIG: any = {
  TIMEOUT: 7000,
  SUCCESS_CODE: 200
}

// 浙里办请求地址
const ZLB_PROD_URL = 'https://szhzjkm.hangzhou.gov.cn:8097'

export {
  citizenAppId,
  AXIOS_CONFIG,
  LOCAL_STORAGE_KEY,
  AES_KEY,
  SM_ENCRYPT,
  ZLB_PROD_URL
}
