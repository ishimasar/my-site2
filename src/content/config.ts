// 1. `astro:content` をインポートします
import { z, defineCollection } from "astro:content";

// 2. 記事のスキーマを定義します。zodを利用したバリデーションを行います。
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
// 3. ブログ一覧を取得するため、collections　として定義します
export const collections = <const>{
  blog: blogCollection,
};