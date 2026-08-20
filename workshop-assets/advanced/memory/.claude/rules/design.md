# Design implementation rules

- `src/styles/variables.css` にある既存の色、spacing、radiusを優先する
- 新しい色や余白を直書きする前に、意味が近い既存変数がないか調べる
- breakpointは既存CSSに合わせ、基本のモバイル切り替えは767px以下とする
- PCと幅390px前後のモバイルで、横方向のはみ出しと読み順を確認する
- 操作要素にはキーボードフォーカスとわかるラベルを用意する
- 見た目のためだけに意味のあるHTML要素を `div` へ置き換えない
- UI変更後は `npm run validate` を実行する
