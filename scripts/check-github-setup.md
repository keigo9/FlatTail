# GitHub 設定チェックリスト

## 1. ブランチ保護ルールの確認

### 確認手順：

1. リポジトリの **Settings** タブを開く
2. 左メニューから **Branches** を選択
3. **Branch protection rules** を確認

### チェック項目：

- [ ] `main` ブランチに保護ルールが設定されているか？
- [ ] 保護ルールがある場合、以下を確認：
  - [ ] Require pull request reviews before merging
  - [ ] Require status checks to pass before merging
  - [ ] Restrict who can push to matching branches
  - [ ] Include administrators

## 2. Environments の確認

### 確認手順：

1. リポジトリの **Settings** タブを開く
2. 左メニューから **Environments** を選択

### チェック項目：

- [ ] `production` environment が存在するか？
- [ ] 存在する場合：
  - [ ] **Environment secrets** に `VITE_FIREBASE_FUNCTION_URL` が設定されているか？
  - [ ] **Deployment branches** の設定は適切か？（通常は `main` のみ）
  - [ ] **Required reviewers** が設定されているか？（必須ではない）

## 3. Secrets の確認

### 確認手順：

1. **Settings** → **Secrets and variables** → **Actions** を開く

### チェック項目：

- [ ] **Repository secrets** に `VITE_FIREBASE_FUNCTION_URL` が存在するか？
- [ ] **Environment secrets** と **Repository secrets** の両方に同じ名前の Secret がある場合、どちらを使うか理解しているか？

## 4. 問題解決フローチャート

```
環境変数が取得できない
│
├─ environment: production を追加した？
│  ├─ Yes → production environment に Secret が設定されているか確認
│  │         └─ No → Environment secrets に追加
│  └─ No → Repository secrets を確認
│
├─ ブランチ保護ルールがある？
│  ├─ Yes → Environment を使用する必要がある可能性
│  └─ No → Repository secrets が使えるはず
│
└─ Actions のログで何と表示される？
   ├─ "❌ VITE_FIREBASE_FUNCTION_URL is NOT set" → Secret が見つからない
   └─ エラーなし → Secret は取得できているが、別の問題の可能性
```

## 5. よくある問題と解決策

### 問題 1: Repository secrets を設定したのに取得できない

**原因**: `environment: production` を追加したため、Environment secrets を探している
**解決策**:

- Environment secrets に同じ値を設定する
- または、`environment: production` を削除する

### 問題 2: Environment が見つからない

**原因**: `production` environment が作成されていない
**解決策**: Settings → Environments で新規作成

### 問題 3: ブランチ保護ルールでブロックされる

**原因**: Required reviewers や deployment protection rules
**解決策**: 開発中は一時的に無効化するか、適切な権限を付与
