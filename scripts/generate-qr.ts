// ローカル実行専用のビルド前スクリプト（Node.jsのfsを使うため、Cloudflare Workers側の src/ には置かない）
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import QRCode from 'qrcode'

// 本番URLが決まったらここを書き換える
const TARGET_URL = 'https://yourname.pages.dev'

const OUT_DIR = path.resolve(import.meta.dirname, '../public/qr')
const PNG_PATH = path.join(OUT_DIR, 'card-qr.png')
const SVG_PATH = path.join(OUT_DIR, 'card-qr.svg')

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  // 印刷用: 幅1000px、余白あり
  await QRCode.toFile(PNG_PATH, TARGET_URL, {
    type: 'png',
    width: 1000,
    margin: 4,
  })

  // Web確認用
  await QRCode.toFile(SVG_PATH, TARGET_URL, {
    type: 'svg',
    margin: 4,
  })

  console.log(`QR code generated for: ${TARGET_URL}`)
  console.log(`- ${PNG_PATH}`)
  console.log(`- ${SVG_PATH}`)
}

main()
