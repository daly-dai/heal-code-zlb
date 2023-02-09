/**
 * @description 是否是浙里办的环境
 * @returns {Boolean}
 */
export function isZhelibanClient() {
  return !!navigator.userAgent.toLocaleLowerCase().match('dtdreamweb')
}

type zlbLocation = 'localhost' | 'reserved' | 'lastTest'

/**
 * @description 判断浙里办当前所处的环境
 * @returns String
 */
export const JudgeZlbEnvironment = (): zlbLocation => {
  const location = window.location.href || ''

  if (location.includes('localhost')) return 'localhost'

  if (location.includes('reserved')) return 'reserved'

  if (location.includes('lastTest')) return 'lastTest'

  return 'lastTest'
}

// 是否是浙里办的微信环境
export function isZLBWx() {
  return (
    window.navigator.userAgent.toLowerCase().includes('miniprogram/wx') ||
    (window as any).__wxjs_environment === 'miniprogram'
  )
}

/**
 * @description 获取url路由指定参数
 * @param url 地址
 * @param params 参数名称
 * @returns String | ''
 */
export function getUrlParams(url: string, params: string) {
  const res = new RegExp('(?:&|/?)' + params + '=([^&$]+)').exec(url)
  return res ? res[1] : ''
}

/**
 * @description 关闭浙里办app
 * @param event
 */
export const closeApp = () => {
  console.log('触发了，pageShow')

  ZWJSBridge.close()
}
