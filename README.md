# FlatTail 電気料金診断ランディングページ

電気料金の診断フォームを提供する React SPA ランディングページです。

## 公開 URL

- [https://keigo9.github.io/FlatTail/](https://keigo9.github.io/FlatTail/)

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

## 環境変数・デプロイ手順

デプロイや環境変数の詳細な手順は[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)を参照してください。

## プロジェクト構造

```
/
├── public/          # 静的ファイル
├── functions        # KintoneAPIを叩くためのFirebase Functions管理
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

## アーキテクチャ

```
ブラウザ <-> Firebase Functions <-> Kintone
```

### Firebase Functions 設定

デプロイや環境変数の詳細な手順は[functions/README.md](functions/README.md)を参照してください。
