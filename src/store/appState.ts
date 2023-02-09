import { proxy } from 'valtio'

interface AppStore {
  ticket: string
  communityCode: string
  hasRendered: boolean
  platform: string
}

export const appStore = proxy<AppStore>({
  ticket: '',
  communityCode: '',
  hasRendered: false,
  platform: ''
})
