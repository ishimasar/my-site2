// 1. `astro:content` をインポート
import { z, defineCollection } from 'astro:content';

// 2. 記事のスキーマを定義。zodを利用したバリデーション
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.string(),
    updateDate: z.string(),
    description: z.string(),
    thumb: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});
// 3. ブログ一覧を取得するため、collectionsとして定義
export const collections = <const>{
  blog: blogCollection,
};