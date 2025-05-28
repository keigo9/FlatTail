# Firebase Functions 設定 ディレクトリ

このディレクトリは Cloud Run（Firebase Functions 2nd Gen）で動作するバックエンド API を管理します。

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
npm run deploy
```

デプロイ完了後、以下の形式の Function URL が表示されます：

```
Function URL (submitToKintone(us-central1)): https://submittokintone-XXXXXXXXXXXX-XX.a.run.app
```

## Cloud Run(本番用) 環境変数の設定

- 第二世代で動かしているので、こちらの方法で環境変数のセットが必要

Cloud Run で動作させる場合、Kintone 連携用の環境変数を gcloud コマンドで設定する必要があります。

gcloud のプロジェクトを指定

```
gcloud config get-value project
```

```
gcloud config set project kintone-api-form
```

```bash
gcloud run services update submittokintone \
  --region asia-northeast1 \
  --update-env-vars KINTONE_API_KEY=あなたのAPIキー,KINTONE_DOMAIN=あなたのドメイン,KINTONE_APP_ID=あなたのアプリID
```

確認方法

```bash
gcloud run services describe submittokintone --region us-central1 --format="get(spec.template.spec.containers[0].env)" | grep -E "KINTONE_API_KEY|KINTONE_DOMAIN|KINTONE_APP_ID"
```
