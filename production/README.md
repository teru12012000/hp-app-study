# アプリ起動について

## 使用技術

-   Next.js
-   Typescript
-   vanilla-extract

## 起動方法

### 前提条件

-   `node.js`が入っていることを確認してください
-   パッケージマネージャーは`pnpm`を使うので`npm install -g pnpm`を実行してください

### 起動

1. `pnpm install`をしてパッケージをインストールしてください
1. `pnpm dev`で development 版のアプリが起動します
1. 本番用のアプリを起動したい場合にはまず、`pnpm build`を実行します
1. `pnpm start`で立ち上がります

> [!WARNING]
> 本番用の場合ポート番号が被ってしまうとアプリが起動しません。基本は 3000 番で立ち上がるので起動しているアプリが被っていないことを確認しましょう。
