import type { Disposable, ExtensionContext } from 'vscode'
import { getLocale, message } from '@vscode-use/utils'

export async function activate(context: ExtensionContext) {
  const disposes: Disposable[] = []
  const lan = getLocale() // 获取本地语言
  const isZh = lan.includes('zh')
  message.info(isZh ? '你好' : 'Hello') // 发出消息弹窗

  context.subscriptions.push(...disposes)
}

export function deactivate() {

}
