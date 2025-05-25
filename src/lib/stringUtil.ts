// 全角を半角に変換
export function toHalfWidth(str: string) {
  return str
    .replace(/[！-～]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/\u3000/g, " "); // 全角スペースも半角に！
}
