# ポートフォリオサイト編集ガイド

このポートフォリオサイトは編集しやすいように構成されています。

## 📁 プロジェクト構造

```
src/
├── App.vue                 # メインアプリケーション
├── data/
│   └── portfolio.json      # ★ コンテンツデータ（編集推奨）
├── components/             # 再利用可能なコンポーネント
│   ├── NavigationComponent.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ProjectsSection.vue
│   ├── TimelineSection.vue
│   ├── ContactSection.vue
│   └── FooterComponent.vue
└── style.css              # グローバルスタイル
```

## ✏️ 簡単な編集方法

### 1. コンテンツの編集 (最も簡単)
`src/data/portfolio.json` ファイルを編集するだけで、以下が変更できます：
- 個人情報（名前、タイトル、説明文）
- スキル一覧
- 資格・成果
- プロジェクト情報
- タイムライン
- ナビゲーション項目

### 2. 新しいプロジェクトの追加
```json
{
  "id": "new-project",
  "title": "新しいプロジェクト",
  "description": "プロジェクトの説明",
  "technologies": ["技術1", "技術2"],
  "link": "https://example.com",
  "emoji": "🚀"
}
```

### 3. タイムラインの追加
```json
{
  "year": "2025年",
  "title": "新しい経歴",
  "details": ["詳細1", "詳細2"]
}
```

## 🎨 スタイルの変更

### カラーパレット
`tailwind.config.js` で色を変更できます：
- primary: #213555 (ダークブルー)
- secondary: #3E5879 (ブルー)
- accent: #D8C4B6 (ベージュ)
- light: #F5EFE7 (ライトベージュ)

### コンポーネントのスタイル変更
各コンポーネントファイル内でTailwind CSSクラスを直接編集できます。

## 🔧 コンポーネントの編集

### 新しいセクションの追加
1. `src/components/` に新しい `.vue` ファイルを作成
2. `App.vue` でインポートして使用

### 既存コンポーネントの変更
個別のコンポーネントファイルを編集すれば、該当セクションのみが変更されます。

## 🚀 開発サーバーの起動

```bash
npm run dev
```

ファイルを保存すると自動的にブラウザが更新されます。

## 📝 編集のヒント

1. **データの変更**: `portfolio.json` を編集（最も簡単）
2. **レイアウト変更**: 各コンポーネントの `<template>` を編集
3. **機能追加**: 各コンポーネントの `<script>` を編集
4. **新機能**: 新しいコンポーネントを作成

## 🔄 変更の確認
ファイルを保存すると、ブラウザで即座に変更が確認できます（ホットリロード機能）。

Happy coding! 🎉
