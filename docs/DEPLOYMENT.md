# デプロイメントガイド

## GitHub Actions の環境変数設定

### 1. Secrets の設定

1. GitHub リポジトリの **Settings** タブを開く
2. 左側のメニューから **Secrets and variables** → **Actions** を選択
3. **New repository secret** ボタンをクリック
4. 以下の情報を入力：
   - **Name**: `VITE_FIREBASE_FUNCTION_URL`
   - **Value**: Firebase Function のエンドポイント URL（例: `https://asia-northeast1-your-project.cloudfunctions.net/submitToKintone`）

### 2. 環境変数が正しく設定されているか確認

- GitHub Actions のログで以下のメッセージを確認：
  - `✅ VITE_FIREBASE_FUNCTION_URL is set` - 正常に設定されている
  - `❌ VITE_FIREBASE_FUNCTION_URL is NOT set or empty` - 設定されていない

### 3. トラブルシューティング

#### 環境変数が取得できない場合：

1. **Secrets の名前を確認**

   - 大文字・小文字を含めて正確に一致している必要があります
   - スペースや特殊文字が含まれていないか確認

2. **リポジトリの権限を確認**

   - Private リポジトリの場合、適切な権限が必要です

3. **Workflow の environment を設定**（必要な場合）

   ```yaml
   jobs:
     build:
       runs-on: ubuntu-latest
       environment: production # この行を追加
   ```

4. **ブランチ保護ルールを確認**

   - main ブランチに保護ルールがある場合、Secrets へのアクセスが制限される可能性があります

   #### ブランチ保護ルールの確認方法：

   1. **GitHub リポジトリの Settings → Branches** を開く
   2. **Branch protection rules** セクションを確認
   3. `main` ブランチにルールがある場合、そのルールをクリック
   4. 以下の設定を確認：
      - **Restrict who can push to matching branches** が有効になっているか
      - **Require deployments to succeed before merging** が有効になっているか

   #### Environments の確認と設定：

   1. **Settings → Environments** を開く
   2. `production` environment が存在するか確認
   3. 存在しない場合は **New environment** で作成
   4. Environment を作成/編集して以下を設定：
      - **Environment secrets** に `VITE_FIREBASE_FUNCTION_URL` を追加
      - **Deployment branches** で `main` ブランチからのデプロイを許可
      - **Required reviewers** は必要に応じて設定（開発中は無効で OK）

   #### Secrets の優先順位：

   GitHub では以下の優先順位で Secrets が適用されます：

   1. **Environment secrets** (最優先)
   2. **Repository secrets**
   3. **Organization secrets** (もしあれば)

   ⚠️ **重要**: `environment: production` を workflow に追加した場合、その environment に設定された secrets のみが使用されます。Repository secrets は使用されません。

### 4. ローカル開発環境

ローカルで開発する場合は、プロジェクトルートに `.env` ファイルを作成：

```bash
# .env
VITE_FIREBASE_FUNCTION_URL=https://your-firebase-function-url
```

**注意**: `.env` ファイルは Git にコミットしないでください。`.gitignore` に含まれていることを確認してください。
