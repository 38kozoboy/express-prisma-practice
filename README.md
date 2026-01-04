# セットアップ手順 (TypeScript + Express + Prisma 6)

1. 依存関係をインストール:

```bash
npm install
```

2. Prisma クライアント生成 + マイグレーション (SQLite):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

3. 開発サーバ起動:

```bash
npm run dev
```

エンドポイント:

- `GET /` : ヘルスチェック
- `GET /users` : ユーザー一覧取得
- `POST /users` : ユーザー作成 (JSON `{ "email": "...", "name": "..." }`)