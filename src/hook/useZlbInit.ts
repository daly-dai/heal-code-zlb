import { useCallback } from 'react'
import { H5_HEALTH_CODE_MAP, REDIRECT_URL_MAP } from '@/constant/constant-zlb'
import { appStore } from '@/store/appState'
import {
  closeApp,
  getUrlParams,
  isZLBWx,
  JudgeZlbEnvironment,
  urlConcatParams
} from '@/utils/tools'
import { containerReady } from '@/utils/zlb-utils'
import { history } from 'umi'

// 单点登录
const handleLogin = async () => {
  const AUTHORISE = 'https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=BCDSGA_5f2d6d0d631bcb18da0113a8f946acb5'
  await containerReady()
  const searchParams = new URLSearchParams(window.location.search)

  if (isZLBWx()) {
    const { ticketId = null } = await ZWJSBridge.ssoTicket({})

    if (ticketId) {
      appStore.ticket = ticketId
      return true
    }
  }

  const ticket = searchParams.get('ticket') || '' // 从url参数获取ticketId

  if (ticket) {
    appStore.ticket = ticket
    return ticket
  }

  const redirectUrl = REDIRECT_URL_MAP[JudgeZlbEnvironment()]
  const authoriseUrl = AUTHORISE + redirectUrl

  window.location.replace(authoriseUrl)

  return ''
}

// 获取当前的ui模式（青少年、老年版）
export const getUiStyle = async () => {
  await containerReady()

  return new Promise(resolve => {
    ZWJSBridge.getUiStyle({}).then((res: any) => {

      resolve(res?.uiStyle || 'normal');
      return res?.uiStyle || 'normal'
    })
  })
}


const useZlbInit = async () => {
  const ticket = await handleLogin()

  if (!ticket) return

  const uiStyle = await getUiStyle()

  const params = {
    ticket,
    uiStyle
  }


  // 健康码相关地址
  const healthCodeHref = H5_HEALTH_CODE_MAP[JudgeZlbEnvironment()]

  const healthFullUrl = urlConcatParams(healthCodeHref, params);


  // 跳转健康码
  window.location.href = healthFullUrl

}

export default useZlbInit
