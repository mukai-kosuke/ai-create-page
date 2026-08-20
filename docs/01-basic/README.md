# Basic 30分で「調査 → Plan → 実装 → 確認」を体験する

Basicは、Claude Codeを初めて実務で使う人向けのコースです。最初からコードを書かせず、プロジェクトの調査から始めます。最後にFAQセクションを追加し、Git差分とビルド結果を確認できれば完了です。

## 30分の進め方

| 時間 | ミッション | 到達点 |
|---:|---|---|
| 0〜5分 | Claude Codeを起動する | 対象リポジトリを間違えていない |
| 5〜10分 | [プロジェクトを調査する](01-explore.md) | コードを貼らずに構成を説明させられる |
| 10〜15分 | [指示を具体化する](02-prompt.md) | 目的・要件・制約を渡せる |
| 15〜22分 | [Plan modeから実装する](03-plan.md) | 計画を確認してからFAQを追加できる |
| 22〜28分 | [diffとビルドを確認する](04-review.md) | AIの変更をそのまま採用しない |
| 28〜30分 | CLAUDE.mdを読む | 毎回伝えるルールの置き場がわかる |

## 開始前の状態を確認する

```bash
git status --short
npm run validate:starter
```

`npm run validate:starter` は、FAQとTestimonialsがまだ追加されていない開始状態を確認します。演習後の確認には `npm run validate` を使ってください。

## 完了条件

- FAQが3項目ある
- 既存のCSS Variablesを使っている
- 幅390px前後でも内容が読める
- キーボードで質問を開閉できる
- `git diff` で変更範囲を説明できる
- `npm run build` が成功する

途中で進めなくなった場合は、講師へエラーと直前のプロンプトを共有してください。実装例は講師用の [`answer/basic-faq.md`](../../answer/basic-faq.md) にあります。
