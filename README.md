# FlatTail 電気料金診断ランディングページ

電気料金の診断フォームを提供する React SPA ランディングページです。

## 公開 URL

[https://flattail-landingpage-website-bwmk9y2n.devinapps.com](https://flattail-landingpage-website-bwmk9y2n.devinapps.com)

## 実装内容

1. **ランディングページ**

   - Figma デザインに基づいたレスポンシブデザイン
   - 「診断スタート」ボタンで診断フォームに遷移

2. **6 ステップ診断フォーム**

   - ステップ 1：エネルギータイプの選択（電気＆都市ガス、電気＆プロパンガス、オール電化）
   - ステップ 2：物件タイプの選択（戸建て、マンション・アパート、店舗）
   - ステップ 3：物件状況の選択（現在のお住まい、引越し先）
   - ステップ 4：場所情報の入力（郵便番号、都道府県、住所）
   - ステップ 5：電気使用量の選択
   - ステップ 6：連絡先情報の入力（名前、メール、電話番号）

3. **Kintone API 連携**
   - 環境変数を使用した API 設定
   - フォームデータを Kintone に送信する機能

## 技術スタック

- **フロントエンド**: React + TypeScript + Vite
- **UI ライブラリ**: Tailwind CSS + shadcn/ui
- **アイコン**: Lucide React
- **フォーム管理**: React Hooks (useState)
- **API 連携**: Fetch API

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/keigo9/FlatTail.git
cd FlatTail

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数の設定

`.env`ファイルを作成し、以下の変数を設定してください：

```
VITE_KINTONE_API_KEY=your_api_key
VITE_KINTONE_DOMAIN=example.kintone.com
VITE_KINTONE_APP_ID=your_app_id
```

## Kintone API 連携

現在、API リクエストはシミュレーションされています。実際の Kintone API を使用するには、`src/services/kintoneService.ts`ファイルのコメントアウトされたコードを有効にしてください。

## ビルドとデプロイ

```bash
# プロダクションビルド
npm run build

# ビルド後、distフォルダをデプロイサーバーにアップロード
```

## プロジェクト構造

```
/
├── public/          # 静的ファイル
├── src/
│   ├── components/  # UIコンポーネント
│   │   ├── form/    # フォームステップコンポーネント
│   │   ├── layout/  # レイアウトコンポーネント
│   │   └── ui/      # 共通UIコンポーネント
│   ├── services/    # APIサービス
│   ├── types/       # TypeScript型定義
│   ├── App.tsx      # メインアプリケーション
│   └── main.tsx     # エントリーポイント
└── .env             # 環境変数
```

## メンテナンス

### デザインの更新

- UI コンポーネントは`src/components`ディレクトリにあります
- フォームのステップは`src/components/form`ディレクトリにあります
- スタイルは Tailwind CSS を使用しています

### 今後の改善点

1. フォームバリデーションの強化
2. 郵便番号から住所の自動入力機能
3. 診断結果の詳細表示
4. アニメーションの追加
5. SEO 最適化

## GitHub Pages デプロイ

このプロジェクトは GitHub Pages を使用して自動的にデプロイされます。

### 自動デプロイ

`main`ブランチにプッシュすると、GitHub Actions を通じて自動的にビルドとデプロイが行われます。デプロイされたサイトは以下の URL で閲覧できます：

https://keigo9.github.io/FlatTail/

### 環境変数

GitHub Pages 上で Kintone API を使用するには、以下の環境変数を GitHub リポジトリの Secrets に設定する必要があります：

- `VITE_KINTONE_API_KEY`: Kintone API キー
- `VITE_KINTONE_DOMAIN`: Kintone ドメイン
- `VITE_KINTONE_APP_ID`: Kintone アプリ ID

## ライセンス

© 2025 株式会社フラット TAIL All Rights Reserved.

## アーキテクチャ

```
ブラウザ <-> Firebase Functions <-> Kintone
```

## 環境構築

### フロントエンド

1. 必要な環境変数を`.env`ファイルに設定:

```env
VITE_FIREBASE_FUNCTION_URL=your-firebase-function-url
```

2. 依存関係のインストール:

```bash
npm install
```

3. 開発サーバーの起動:

```bash
npm run dev
```

### Firebase Functions 設定

1. Firebase CLI をインストール:

```bash
npm install -g firebase-tools
```

2. Firebase にログイン:

```bash
firebase login
```

3. プロジェクトの初期化:

```bash
firebase init functions
```

4. 環境変数の設定:

```bash
firebase functions:config:set kintone.api_key="YOUR_API_KEY" kintone.domain="YOUR_DOMAIN" kintone.app_id="YOUR_APP_ID"
```

5. ローカルでのテスト:

```bash
firebase functions:config:get > .runtimeconfig.json
firebase emulators:start
```

6. デプロイ:

```bash
firebase deploy --only functions
```

デプロイ完了後、以下の形式の Function URL が表示されます：

```
Function URL (submitToKintone(us-central1)): https://submittokintone-XXXXXXXXXXXX-XX.a.run.app
```

この URL を`.env`ファイルの`VITE_FIREBASE_FUNCTION_URL`に設定してください。

### Cloud Run 認証の設定

1. プロジェクトの設定：

```bash
# 現在のログインアカウントを確認
gcloud auth list

# 必要に応じて、別のアカウントでログイン
gcloud auth login

# アカウントの切り替え（複数のアカウントがある場合）
gcloud config set account YOUR_EMAIL@example.com

# プロジェクトIDの確認（Firebase Consoleから確認可能）
# 例：kintone-keigo-dev

# プロジェクトの設定
gcloud config set project kintone-keigo-dev

# Application Default Credentialsのクォータプロジェクトを更新
gcloud auth application-default set-quota-project kintone-keigo-dev

# 設定の確認
gcloud config get-value project
```

注意：

- Firebase Console で対象のプロジェクトに対して編集者（Editor）以上の権限が必要です
- 権限がない場合は、プロジェクト管理者に以下のロールの付与を依頼してください：
  - `roles/editor`（編集者）
  - `roles/firebase.admin`（Firebase 管理者）

権限の確認方法：

1. [Firebase Console](https://console.firebase.google.com/)にアクセス
2. プロジェクトを選択
3. 設定（⚙）> ユーザーと権限
4. 自分のメールアドレスの権限を確認

5. サービスアカウントの作成：

```bash
# サービスアカウントの作成
gcloud iam service-accounts create flattail-frontend \
  --display-name="FlatTail Frontend Service Account"

# サービスアカウントのメールアドレスを取得
export SA_EMAIL=$(gcloud iam service-accounts list \
  --filter="displayName:FlatTail Frontend" \
  --format='value(email)')

# Cloud Run起動者ロールの付与
gcloud projects add-iam-policy-binding $(gcloud config get-value project) \
  --member="serviceAccount:$SA_EMAIL" \
  --role="roles/run.invoker"
```

3. 認証情報の取得：

```bash
# サービスアカウントキーの作成
gcloud iam service-accounts keys create key.json \
  --iam-account=$SA_EMAIL

# key.jsonの内容をbase64エンコード
# macOSの場合
CREDENTIALS_BASE64=$(base64 -i key.json)
echo $CREDENTIALS_BASE64 | pbcopy

# Linuxの場合
CREDENTIALS_BASE64=$(base64 key.json)
echo $CREDENTIALS_BASE64 | xclip -selection clipboard
```

4. 環境変数の設定：
   `.env`ファイルに以下を追加：

```env
VITE_FIREBASE_FUNCTION_URL=https://submittokintone-XXXXXXXXXXXX-XX.a.run.app
VITE_GOOGLE_CLOUD_CREDENTIALS_BASE64='base64エンコードされたkey.jsonの内容'  # 上記でコピーした値を貼り付け
```

本番環境での環境変数の設定：

```bash
# Vercelの場合
CREDENTIALS_BASE64=$(base64 key.json)
vercel secrets add google-cloud-credentials-base64 "$CREDENTIALS_BASE64"

# Netlifyの場合
CREDENTIALS_BASE64=$(base64 key.json)
netlify env:set VITE_GOOGLE_CLOUD_CREDENTIALS_BASE64 "$CREDENTIALS_BASE64"

# GitHub Actionsの場合
# GitHubのSecretsに'GOOGLE_CLOUD_CREDENTIALS_BASE64'として key.json をbase64エンコードした内容を追加
```

注意：

- base64 エンコードされた認証情報は機密情報なので、必ず環境変数として扱い、ソースコードにハードコードしないでください
- 本番環境の環境変数は、各デプロイプラットフォームの管理画面から設定することもできます

5. フロントエンドでの認証設定：

```typescript
// src/services/kintoneService.ts
import { GoogleAuth } from "google-auth-library";

const FIREBASE_FUNCTION_URL = import.meta.env.VITE_FIREBASE_FUNCTION_URL;
const CREDENTIALS_BASE64 = import.meta.env.VITE_GOOGLE_CLOUD_CREDENTIALS_BASE64;

// base64デコードしてJSONに変換
const credentials = JSON.parse(atob(CREDENTIALS_BASE64));

const auth = new GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/cloud-platform"],
});

export const submitToKintone = async (
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const client = await auth.getIdTokenClient(FIREBASE_FUNCTION_URL);
    const response = await client.request({
      url: FIREBASE_FUNCTION_URL,
      method: "POST",
      data: formData,
    });

    const data = response.data;
    // ... 残りのコード
  } catch (error) {
    // ... エラーハンドリング
  }
};
```

6. 必要なパッケージのインストール：

```bash
npm install google-auth-library
```

注意：

- キーファイル（key.json）は必ず Gitignore に追加し、公開リポジトリにコミットしないでください
- 本番環境では環境変数経由で認証情報を設定することを推奨します
- Cloud Run の認証を有効にした後は、認証なしのリクエストは 403 エラーを返すようになります

## セキュリティ注意事項

- Kintone API キーは必ず Firebase Functions の環境変数として設定し、フロントエンドコードには含めない
- Firebase Functions の適切なリージョンを選択
- 本番環境では適切な CORS 設定を行う
- Blaze プラン（従量課金制）へのアップグレードが必要
