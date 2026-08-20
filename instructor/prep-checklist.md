# 開催前に、環境・Figma・復帰手段を確認する

このチェックリストは講師が開催1週間前から当日までに使います。参加者向けの案内は [`docs/00-setup/`](../docs/00-setup/README.md) を共有してください。

## 1週間前

- [ ] 参加人数、OS、Claude Code利用可否を確認した
- [ ] 社用PCのインストール、外部通信、プラグイン利用ポリシーを確認した
- [ ] 講習用Figmaファイルを用意した
- [ ] Figma URL、ファイル所有者、閲覧権限の付与方法を確定した
- [ ] `docs/00-setup/figma.md` と `docs/02-figma/design-spec.md` のTBDを更新した
- [ ] 30分、60分、90分のどこまで実施するか参加者へ伝えた

## 2日前

- [ ] macOSまたはLinux系環境で `npm install` と `npm run workshop:check` を確認した
- [ ] WindowsまたはWSL参加者がいる場合は、同じコマンドを該当環境で確認した
- [ ] Claude CodeからFigmaの `Testimonials / Desktop` を読めた
- [ ] Figma MCPへ接続できない場合の代替進行を確認した
- [ ] BasicとFigmaの実装例を手元で適用できた
- [ ] Advancedの4ステージを順番に導入できた

## 当日30分前

- [ ] 開始状態のLPをブラウザで開いた
- [ ] `npm run validate:starter` が成功した
- [ ] Claude Codeへログインできた
- [ ] Figma公式プラグインがconnectedになっていた
- [ ] デモ用ターミナルの文字を参加者が読める大きさにした
- [ ] 実装例とトラブルシューティングをすぐ開ける状態にした

## Gitチェックポイントは、コミット方針の合意後に作る

この作業ツリーは教材ファイルの実装状態を提供しますが、チェックポイント用のコミットやブランチは自動作成しません。commit、push、公開は別の操作として扱い、リポジトリ管理者の方針を確認してから作成してください。

推奨する名前は次のとおりです。

```text
main
checkpoint/basic-complete
checkpoint/figma-complete
checkpoint/advanced-complete
```

チェックポイントを作る前に、各状態で `npm run build` が成功し、演習外の差分が入っていないことを確認します。

## 開催後

- [ ] 参加者が止まった箇所とエラーメッセージを記録した
- [ ] 時間が不足したMissionを記録した
- [ ] FigmaやClaude Codeの手順に変化がないか公式ドキュメントを確認した
- [ ] 質問が集中した章だけを更新した

教材で解決できない環境問題は、参加者の所属組織のClaude Code管理者または開発環境担当へ引き継いでください。
