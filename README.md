# FreaSearch-www

Standalone web client for Frea Search

## Memo

このプロジェクトは Next 13 を利用しています。
詳しい使い方については[https://beta.nextjs.org/](https://beta.nextjs.org/)を確認してください。

## Getting Started

ます最初にこれらがインストールされていることを確認しましょう:

- node: version 16
- npm

このレポジトリをクローンしたら、このプロジェクトに使われているパッケージをインストールします。

```
npm i
```

インストールが終わったら、`.env.local`ファイルを作成し、API サーバーの URL を貼り付けます。
例:

```
API_URL=https://api.freasearch.org
```

開発用のサーバーを立ち上げます:

```bash
npm run dev
```

すると、[localhost:3000](localhost:3000)にアプリケーションが立ち上がっているはずです。
