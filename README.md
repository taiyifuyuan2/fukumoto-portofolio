# Code Grimoire — 福元太一のポートフォリオ

営業からエンジニアへ。ダークファンタジーの世界観で紡ぐ福元太一のポートフォリオサイトです。

## 🚀 特徴

- **美しいデザイン**: ダークファンタジーをテーマにした美しいUI/UX
- **動的コンテンツ**: Railsアプリケーションとして、プロジェクトとスキルを動的に管理
- **管理画面**: プロジェクトとスキルの追加・編集・削除が可能
- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **インタラクティブ**: 星の瞬き、パララックス効果、タイプライター効果など

## 🛠️ 技術スタック

- **Backend**: Ruby on Rails 7.1
- **Database**: PostgreSQL
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: TailwindCSS + カスタムCSS
- **JavaScript**: Stimulus, Turbo
- **Deployment**: 準備中

## 📁 プロジェクト構造

```
app/
├── controllers/
│   ├── portfolio_controller.rb      # メインポートフォリオ
│   ├── admin/                       # 管理画面
│   │   ├── projects_controller.rb
│   │   └── skills_controller.rb
│   └── api/v1/                      # API
│       ├── projects_controller.rb
│       └── skills_controller.rb
├── models/
│   ├── project.rb                   # プロジェクト管理
│   └── skill.rb                     # スキル管理
├── views/
│   ├── portfolio/                   # メインビュー
│   ├── admin/                       # 管理画面ビュー
│   └── layouts/
└── assets/
    ├── stylesheets/                 # カスタムCSS
    └── javascript/                  # インタラクティブ機能
```

## 🚀 セットアップ

### 前提条件
- Ruby 3.2.0以上
- PostgreSQL
- Node.js

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd fukumoto-portofolio
```

2. 依存関係をインストール
```bash
bundle install
```

3. データベースをセットアップ
```bash
rails db:create
rails db:migrate
rails db:seed
```

4. サーバーを起動
```bash
rails server
```

5. ブラウザで `http://localhost:3000` にアクセス

## 📊 管理画面

- **プロジェクト管理**: `/admin/projects`
- **スキル管理**: `/admin/skills`

管理画面からプロジェクトやスキルの追加・編集・削除が可能です。

## 🌟 主な機能

### ポートフォリオ表示
- プロジェクト一覧（動的表示）
- スキル一覧（熟練度表示）
- 美しいアニメーション効果

### 管理機能
- プロジェクトのCRUD操作
- スキルのCRUD操作
- 画像URL、GitHubリンク、ライブリンクの管理

### API
- プロジェクト一覧・詳細: `/api/v1/projects`
- スキル一覧: `/api/v1/skills`

## 🎨 デザインの特徴

- **カラーパレット**: ダークテーマ（#0b0b12）
- **アクセントカラー**: パープル（#a781ff）、レッド（#b21a3c）
- **フォント**: Cinzel（見出し）、Noto Sans JP（本文）
- **アニメーション**: 星の瞬き、パララックス、フェードイン効果

## 📱 レスポンシブ対応

- モバイルファーストデザイン
- グリッドレイアウトによる柔軟な配置
- タッチフレンドリーなインターフェース

## 🔧 カスタマイズ

### 新しいプロジェクトを追加
1. 管理画面（`/admin/projects`）にアクセス
2. 「新規作成」ボタンをクリック
3. プロジェクト情報を入力
4. 保存

### 新しいスキルを追加
1. 管理画面（`/admin/skills`）にアクセス
2. 「新規作成」ボタンをクリック
3. スキル情報を入力
4. 保存

## 🚀 デプロイ

現在、デプロイの準備中です。Render、Heroku、Vercelなどでのデプロイに対応予定です。

## 📄 ライセンス

このプロジェクトは個人のポートフォリオ用です。

## 📞 お問い合わせ

- **Email**: taiyifuyuan2@gmail.com
- **X**: [@i_nv99](https://x.com/i_nv99)
- **Note**: [note.com/human_quoll6139](https://note.com/human_quoll6139)

---

**Code Grimoire** — 闇に鍛える物語  
*Forged in the dark.*
