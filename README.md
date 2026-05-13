# SellLight Marketing LP

SellLightのiOS/iPadOS向けマーケティングLPです。GitHub Pagesで公開しやすいよう、React/Vite/Next.jsなどのビルド環境を使わず、HTML/CSS/JavaScriptだけで構成しています。

## ファイル構成

```text
.
├── index.html
├── styles.css
├── app.js
├── .nojekyll
├── README.md
└── assets/
    ├── app-icon.png
    ├── app-settings-preview.png
    ├── favicon.svg
    ├── feature-overview.svg
    ├── hero-app.svg
    ├── og-image.png
    └── og-image.svg
```

## GitHub Pages公開手順

このLPは、専用のpublic repository `selllight-lp` のroot直下に置く前提です。

1. GitHubに `selllight-lp` リポジトリを作成
2. このLP一式を `main` にpush
3. Settings → Pages
4. Sourceを「Deploy from a branch」にする
5. Branchを `main`、Folderを `/` にする
6. Save
7. `https://tenten-10-10.github.io/selllight-lp/` を確認

公開予定URL:

```text
https://tenten-10-10.github.io/selllight-lp/
```

## App Store URL差し替え箇所

現在のApp Store CTAは仮URLです。

```js
const APP_STORE_URL = "https://apps.apple.com/jp/search?term=SellLight";
```

TODO: 正式なSellLightのApp Store URLが確定したら、`app.js` の `APP_STORE_URL` を差し替える。

`index.html` のCTAにも初期値として同じ仮URLを入れていますが、ページ読み込み後は `app.js` が全CTAのリンクを `APP_STORE_URL` に揃えます。

## 画像差し替え方法

画像は `assets/` 配下にまとめています。差し替える場合は同じファイル名で置き換えると、HTML側の変更なしで反映できます。

- アプリアイコン: `assets/app-icon.png`
- ヒーロー画面プレビュー: `assets/app-settings-preview.png`
- ヒーロー代替SVG: `assets/hero-app.svg`
- 機能説明画像: `assets/feature-overview.svg`
- OGP画像: `assets/og-image.png`
- OGP画像の編集元: `assets/og-image.svg`
- favicon: `assets/favicon.svg`

アクセントカラーはSellLightアプリアイコンとアプリUIの赤に合わせて、`styles.css` の `--accent` / `--accent-dark` で管理しています。

OGP画像を作り直す場合は、`assets/og-image.svg` を編集してからPNGを書き出してください。

## macOS版を正式公開するときの変更箇所

macOS版は現在 `Coming Soon` として表示しています。正式公開時は次を更新してください。

- `index.html` の `macOS版 Coming Soon` ボタン文言
- `index.html` の対応端末セクション内 `macOS / Coming Soon`
- FAQの「macOS版はいつ出ますか？」の回答
- 必要であれば `app.js` にmacOS版のURL定数を追加

## ローカル確認方法

ビルドは不要です。次のどちらかで確認できます。

```sh
open index.html
```

ローカルサーバーで確認する場合:

```sh
python3 -m http.server 4173
```

その後、ブラウザで `http://localhost:4173/` を開きます。
