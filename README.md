## 🌐 Links

- **Live Site**: https://shotam27.github.io/portfolio-site/
- **Repository**: https://github.com/shotam27/portfolio-site

# Portfolio Site

Vue.js + Tailwind CSSで作成したポートフォリオサイト

## 🚀 GitHub Pagesでの公開手順

### 1. GitHubリポジトリの作成
```bash
# GitHubで新しいリポジトリ 'portfolio' を作成
# 現在のディレクトリをGitリポジトリとして初期化
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/shotam27/portfolio.git
git push -u origin main
```

### 2. GitHub Pagesの設定
1. GitHubリポジトリページの **Settings** タブに移動
2. 左側メニューの **Pages** をクリック
3. **Source** を **GitHub Actions** に設定
4. コードをpushすると自動的にデプロイされます

### 3. 公開URL
設定完了後、以下のURLでアクセス可能：
`https://shotam27.github.io/portfolio/`

## 🛠 開発環境

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```