# 株式会社ビッグフューチャー 代表プロフィールサイト

## 概要

このリポジトリは、株式会社ビッグフューチャー代表取締役 福原大貴氏のプロフィールサイトです。

## ファイル構成

- `index.html` - メインのHTMLファイル
- `styles.css` - スタイルシート
- `script.js` - JavaScriptファイル
- `index.md` - Markdown版プロフィール（参考用）
- `images/` - 画像ファイルを配置するディレクトリ

## セットアップ方法

### 1. 画像のアップロード

特集記事の画像を `images/` ディレクトリに配置してください：

- `images/feature-1.jpg` - 特集記事1の画像
- `images/feature-2.jpg` - 特集記事2の画像
- `images/feature-3.jpg` - 特集記事3の画像

画像がない場合は、プレースホルダーが表示されます。

### 2. YouTube動画の設定

`index.html` 内の以下の部分を編集して、実際のYouTube動画IDに置き換えてください：

```html
<!-- ブランディングムービー -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" ...>

<!-- その他の動画 -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" ...>
```

YouTube動画IDの取得方法：
1. YouTube動画のURLから取得（例: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → 動画IDは `dQw4w9WgXcQ`）
2. 埋め込みURLの形式: `https://www.youtube.com/embed/動画ID`

### 3. SNSリンクの設定

`index.html` 内のSNSセクションで、以下のURLを実際のアカウントに置き換えてください：

- Instagram: `https://www.instagram.com/YOUR_INSTAGRAM_ID/`
- 公式LINE: `https://line.me/R/ti/p/@YOUR_LINE_ID`
- Twitter/X: `https://twitter.com/YOUR_TWITTER_ID`
- Facebook: `https://www.facebook.com/YOUR_FACEBOOK_ID`

### 4. GitHub Pagesでの公開

1. このリポジトリをGitHubにプッシュ
2. リポジトリの Settings > Pages に移動
3. Source を "Deploy from a branch" に設定
4. Branch を "main"（または "master"）に設定
5. 数分後に `https://ユーザー名.github.io/profile/` でアクセス可能になります

## カスタマイズ

### 色の変更

`styles.css` の以下の変数を変更することで、サイトの色をカスタマイズできます：

- メインカラー: `#3498db` (青色)
- アクセントカラー: `#667eea`, `#764ba2` (グラデーション)
- 背景色: `#f8f9fa` (セクション背景)

### セクションの追加・削除

`index.html` のセクション構造を参考に、新しいセクションを追加できます。

## ブラウザサポート

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## ライセンス

© 2025 株式会社ビッグフューチャー. All rights reserved.

