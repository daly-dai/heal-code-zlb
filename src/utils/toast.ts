// 提示消息
import { Toast } from 'antd-mobile'

type ToastFn = (content: string, config: any) => any

const toastMt = (config = {}) => {
  Toast.show({
    afterClose: () => {
      return false
    },
    duration: 1000,
    ...config
  })
  return Toast
}

export const toastNormal: ToastFn = (content, config) => {
  toastMt({ content, ...config })
}
export const toastSuccess: ToastFn = (content = '保存成功', config) => {
  toastMt({ icon: 'success', content, ...config })
}
export const toastFailed: ToastFn = (content = '错误提示', config) => {
  toastMt({ icon: 'fail', content, ...config })
}
export const toastLoading: ToastFn = (content = '加载中…', config) => {
  toastMt({ icon: 'loading', content, ...config })
}
