export interface Profile {
  name: string
  tagline: string
  bio: string[]
  tags: string[]
}

export const profile: Profile = {
  name: '伊藤祐輝（スノウ）',
  tagline: 'いろいろやっているエンジニアです。よろしくお願いいたします。',
  bio: [
    'PHP/Laravelでシステムを組み、夜はTypeScriptとAI駆動開発を勉強するエンジニア。',
    '気づいたことはとりあえずQiitaに投稿してます、供養みたいなもんです。',
    '趣味は雑食気味で、VRChatとルアーフィッシングはその中の常連です。',
  ],
  tags: ['エンジニア', 'VRChat', 'ルアーフィッシング', '謎解き'],
}
