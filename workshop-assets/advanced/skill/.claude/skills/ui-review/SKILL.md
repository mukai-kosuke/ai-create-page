---
name: ui-review
description: TaskFlow AIのUI変更を、差分、既存デザイン、レスポンシブ、アクセシビリティ、ビルドの順でレビューする。UI変更後やコミット前の確認で使う。
---

# UI Review

コードを変更せず、次の順にレビューする。

1. `git status --short` と `git diff --stat` で変更範囲を確認する。
2. `git diff` を読み、ユーザーの要件と各変更を対応づける。
3. `src/styles/variables.css` と既存コンポーネントを確認し、直書きや重複を探す。
4. デスクトップと幅390px前後を想定し、折り返し、余白、横方向のはみ出しを確認する。
5. HTMLの意味、読み上げ順、キーボード操作、focus表示を確認する。
6. `npm run validate` を実行する。
7. 結果を次の形式で返す。

```text
## Review result

### Findings
- [High|Medium|Low] 問題 — 根拠ファイルと理由

### Validation
- npm run validate: 成功または失敗

### Good changes
- 要件を満たしている変更
```

問題がなければ `Findings: なし` と明記する。Figmaを参照できない場合は、見た目が一致したと断定せず未確認と書く。
