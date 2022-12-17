# FreaSearch-www

Standalone web client for Frea Search

## Getting Started

これらがインストールされている必要があります:

- node: version 16
- npm (Node Package Manager): used to maintain and update packages required to build the site

次に、環境変数を設定します。
`.env.local`ファイルを作成し、API サーバーの URL を貼り付けます。
例:

```
API_URL=https://api.freasearch.org
```

開発用のサーバーを立ち上げます:

```bash
npm run dev
```

すると、[localhost:3000](localhost:3000)にアプリケーションが立ち上がっているはずです。
