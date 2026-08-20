# Project

TaskFlow AIという架空のAIタスク管理サービスのLPです。Claude Code初心者向けの教材として使います。

## Stack

- Vite
- Vanilla HTML
- CSS
- JavaScript

## Commands

- 開発: `npm run dev`
- ビルド: `npm run build`
- 一括検証: `npm run validate`
- 講習前チェック: `npm run workshop:check`

## Rules

- 既存のデザインとCSS Variablesを優先する
- 新しい依存ライブラリは、必要性を説明して合意を得るまで追加しない
- PC表示だけでなく、幅390px前後のモバイル表示も考慮する
- 見た目の変更ではキーボード操作と読み上げ順を崩さない
- 大きな変更は、現在の実装を調査してPlanを示してから着手する
- 変更後は `npm run validate` を実行する

## Workshop boundaries

- FAQがないのはBasic演習のための意図した状態
- TestimonialsがないのはFigma演習のための意図した状態
- `workshop-assets/advanced/` はAdvanced演習で使う雛形。指示がない限り直接編集しない
- `answer/` は講師用の実装例。参加者の演習中は参照しない
