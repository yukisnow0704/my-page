import { describe, it, expect } from 'vitest'
import app from './index'
import { links } from './links'

describe('GET /', () => {
  it('returns 200', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
  })

  it('includes all links with correct hrefs', async () => {
    const res = await app.request('/')
    const html = await res.text()

    for (const link of links) {
      expect(html).toContain(link.label)
      expect(html).toContain(`href="${link.url}"`)
    }
  })

  it('only the Email link uses mailto:', async () => {
    const emailLink = links.find((l) => l.label === 'Email')!
    expect(emailLink.url.startsWith('mailto:')).toBe(true)

    for (const link of links.filter((l) => l.label !== 'Email')) {
      expect(link.url.startsWith('mailto:')).toBe(false)
    }
  })
})
