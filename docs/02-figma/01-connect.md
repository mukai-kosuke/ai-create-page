# Mission 1: 対象フレームだけを指定し、接続を確認する

講習開始前にFigma公式プラグインの認証は完了している前提です。未完了の場合は、[Figma MCPのセットアップ](../00-setup/figma.md)へ戻ります。

## 1. 対象フレームのURLを取得する

Figmaで `Testimonials / Desktop` フレームを選び、Copy link to selectionを実行します。ファイル全体のURLではなく、選択したフレームのnode-idを含むURLを使ってください。

```text
講習用Figma URL: TBD
対象フレーム: Testimonials / Desktop
```

## 2. 読み取りだけを依頼する

```text
このFigma URLの対象フレームへアクセスできるか確認してください。

確認できたら、次の2点だけを答えてください。
- フレーム名
- 直下にある要素の名前

まだコードは変更しないでください。

<Copy link to selectionのURL>
```

フレーム名と直下の要素が返れば接続確認は完了です。ここではコード生成を頼みません。

## 接続できない → デザイン仕様へ切り替える

認証、利用制限、組織ポリシーの問題が出た場合は、エラー解決に講習時間を使い切らないようにします。講師へ状況を伝え、[Testimonialsのデザイン仕様](design-spec.md)をFigmaの代わりにClaude Codeへ読ませてください。
