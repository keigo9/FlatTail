# FlatTail 電気料金診断ランディングページ

電気料金の診断フォームを提供するReact SPAランディングページです。

## 公開URL

[https://flattail-landingpage-website-bwmk9y2n.devinapps.com](https://flattail-landingpage-website-bwmk9y2n.devinapps.com)

## 実装内容

1. **ランディングページ**
   - Figmaデザインに基づいたレスポンシブデザイン
   - 「診断スタート」ボタンで診断フォームに遷移

2. **6ステップ診断フォーム**
   - ステップ1：エネルギータイプの選択（電気＆都市ガス、電気＆プロパンガス、オール電化）
   - ステップ2：物件タイプの選択（戸建て、マンション・アパート、店舗）
   - ステップ3：物件状況の選択（現在のお住まい、引越し先）
   - ステップ4：場所情報の入力（郵便番号、都道府県、住所）
   - ステップ5：電気使用量の選択
   - ステップ6：連絡先情報の入力（名前、メール、電話番号）

3. **Kintone API連携**
   - 環境変数を使用したAPI設定
   - フォームデータをKintoneに送信する機能

## 技術スタック

- **フロントエンド**: React + TypeScript + Vite
- **UIライブラリ**: Tailwind CSS + shadcn/ui
- **アイコン**: Lucide React
- **フォーム管理**: React Hooks (useState)
- **API連携**: Fetch API

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

## Kintone API連携

現在、APIリクエストはシミュレーションされています。実際のKintone APIを使用するには、`src/services/kintoneService.ts`ファイルのコメントアウトされたコードを有効にしてください。

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

- UIコンポーネントは`src/components`ディレクトリにあります
- フォームのステップは`src/components/form`ディレクトリにあります
- スタイルはTailwind CSSを使用しています

### 今後の改善点

1. フォームバリデーションの強化
2. 郵便番号から住所の自動入力機能
3. 診断結果の詳細表示
4. アニメーションの追加
5. SEO最適化

## ライセンス

© 2025 株式会社フラットTAIL All Rights Reserved.
