export interface StrObj {
  [key: string]: any
}

export interface EncryptSM {
  (value: string | StrObj, props?: string[]): any
}
