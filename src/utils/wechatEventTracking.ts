export function isZLBWx() {
  const ua = window?.navigator?.userAgent
  return (
    (ua && ua.toLowerCase().includes('miniprogram/wx')) ||
    (window as any).__wxjs_environment === 'miniprogram'
  )
}

let startTime: any = null
export const setAppStartTime = () => {
  if (isZLBWx()) {
    startTime = Date.now()
    console.log('setStartTime', startTime)
  }
}

// 微信埋点
export const wxTrackingReport = (userId: any, userName: any) => {
  try {
    // if (isZLBWx()) {
    const zwlog = new ZwLog({
      _user_id: userId,
      _user_nick: userName
    })

    zwlog.onReady(() => {
      const loadingSeconds = (Date.now() - startTime) / 1000

      zwlog.sendPV({
        miniAppId: '2002202111',
        t2: loadingSeconds,
        t0: loadingSeconds,
        log_status: '02'
      })
    })
  } catch (e) {
    return `error-${JSON.stringify(e)}`
  }
}
