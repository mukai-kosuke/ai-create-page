# Figma MCPは講習前に接続を終える

この章は、60分・90分コースの参加者だけが読みます。Figma MCPは、Claude CodeからFigmaファイルのレイアウト、コンポーネント、Variablesなどの構造化データを参照するための接続です。

FigmaはRemote MCPの利用を推奨しています。Claude Codeでは、MCP設定とFigma向けAgent Skillsをまとめて導入できる公式プラグインを使います。

## 1. Figmaプラグインを導入する

Claude Codeを終了した状態で、ターミナルから実行します。

```bash
claude plugin install figma@claude-plugins-official
```

組織のポリシーでプラグイン導入が禁止されている場合は、コマンドを繰り返さずClaude Codeの管理者へ相談してください。

## 2. Figmaアカウントを認証する

Claude Codeを再起動し、次を入力します。

```text
/plugin
```

Installedタブから `figma` を選び、表示される認証ページでアクセスを許可します。認証後、もう一度 `/plugin` を開き、`figma` がconnectedと表示されることを確認してください。

## 3. 講習用Figmaファイルを開ける

講習用URLは開催ごとに講師が共有します。

```text
講習用Figma URL: TBD
対象フレーム: Testimonials / Desktop
```

URLを開き、対象フレームを閲覧できることまで事前に確認します。検索結果に名前が出るだけでは、ファイルの閲覧権限があるとは限りません。

## 4. Claude Codeから対象フレームを読める

Figmaで対象フレームを選び、Copy link to selectionでURLを取得します。Claude Codeへ次のように依頼してください。

```text
このFigma URLのフレーム名だけを教えてください。
コードは変更しないでください。

<ここにCopy link to selectionのURL>
```

フレーム名が返れば準備完了です。講習前の確認では、デザインの実装まで進めません。

## 接続できない場合は、代替教材で進行できる

認証や組織ポリシーの問題を講習時間内に解決できない場合は、[Testimonialsのデザイン仕様](../02-figma/design-spec.md)をFigmaの代わりに使います。MCP接続の体験はできませんが、外部デザインを調査し、既存コードへ適応する流れは続けられます。

最新の手順と利用条件は、[Figma公式のClaude Code接続ガイド](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server)を確認してください。

最終更新日: 2026-08-19
