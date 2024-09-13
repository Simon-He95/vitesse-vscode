import { createExtension, getLocale, message } from '@vscode-use/utils'
import type { Disposable } from 'vscode'

export = createExtension(() => {
  const disposes: Disposable[] = []
  const lan = getLocale() // 获取本地语言
  const isZh = lan.includes('zh')
  message.info(isZh ? '你好' : 'Hello') // 发出消息弹窗

  return disposes
}, () => {

})
