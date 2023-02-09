import { Toast } from 'antd-mobile'

/**
 * @description 浙里办函数的运行环境
 * @returns
 */
async function containerReady() {
  return new Promise(resolve => {
    try {
      ZWJSBridge.onReady(async () => {
        //初始化完成 扫码

        resolve(true)
      })
    } catch (e) {
      console.log(e)
      Toast.show({ content: '浙里办环境异常' })

      closeZWJSBridge()
      resolve(false)
    }
  })
}
// 关闭浙里办
async function closeZWJSBridge() {
  await containerReady()

  ZWJSBridge.close({})
}

// 设置用户信息埋点
export function setZwUserAplus({ username = '', userId = '' } = {}) {
  console.log('用户信息埋点', aplus_queue)
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_hold', 'BLOCK']
  })
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_user_nick', username]
  })
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_user_id', userId]
  })
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_hold', 'START']
  })
}
// PV日志埋点
export function setZwPvAplus({
  long = 0,
  lati = 0,
  userType = 1
}: {
  long: string | number
  lati: string | number
  userType: number
}) {
  // 单页应用 或 “单个页面”需异步补充 PV 日志参数还需进行如下埋点：
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-waiting', 'MAN']
  })
  // 单页应用路由切换后 或 在异步获取到 pv 日志所需的参数后再执行 sendPV：
  aplus_queue.push({
    action: 'aplus.sendPV',
    arguments: [
      {
        is_auto: false
      },
      {
        miniAppId: '2002202111',
        miniAppName: '杭州扫码通行',
        long: long,
        lati: lati,
        userType: userType
      }
    ]
  })
  console.log('PV日志埋', aplus_queue)
}

// 基础信息埋点配置
export function setZwaplus() {
  ; (function (w: any, d, s, q, i) {
    w[q] = w[q] || []
    const f = d.getElementsByTagName(s)[0] as any
    const j = d.createElement(s) as any
    j.async = true
    j.id = 'beacon-aplus'
    j.src = 'https://d.alicdn.com/alilog/mlog/aplus.js?id=202951085'
    f.parentNode.insertBefore(j, f)
  })(window, document, 'script', 'aplus_queue')

  console.log('基础信息埋点', aplus_queue)
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-rhost-v', 'alog.zjzwfw.gov.cn']
  })
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-rhost-g', 'alog.zjzwfw.gov.cn']
  })
  // 这个会落到 app_key 字段上
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['appId', '60506758']
  })
}

/**
 * @description 请求函数
 * @param api
 * @param params
 * @returns
 */
function request(api: string, params = {}) {
  return new Promise((resolve, reject) => {
    mgop({
      api,
      dataType: 'JSON',
      data: JSON.parse(JSON.stringify(params)),
      timeout: 7000,
      header: {},
      type: 'POST',
      appKey: 'a5l0tx3a+2002202111+qgnhhz',
      host: 'https://mapi.zjzwfw.gov.cn/', // 固定不变的
      onSuccess: (data: {
        ret: string[]
        data: { errors: any; data: unknown }
      }) => {
        resolve(data)
      },
      onFail: (error: any) => {
        reject(error)
      }
    })
  })
}

export { containerReady, closeZWJSBridge, request }
