# Figma追加30分で「デザインを読み、既存コードへ適応する」を体験する

Figma編はBasicを終えた参加者向けです。Figma MCPでTestimonialsフレームを読み、TaskFlow AIの既存LPへ「お客様の声」セクションを追加します。

Figma MCPを完成コードの変換器として扱わず、デザインの構造化された情報を調査する手段として使います。実装方法は、Figmaの情報と既存コードの両方を見て決めます。

## 追加30分の進め方

| 時間 | ミッション | 到達点 |
|---:|---|---|
| 30〜35分 | [接続を確認する](01-connect.md) | 対象フレームをClaude Codeから読める |
| 35〜42分 | [デザインを言語化する](02-read-design.md) | 構造、余白、色、Typographyを説明できる |
| 42〜52分 | [既存LPへ実装する](03-implement.md) | Figmaとコードのルールを両立できる |
| 52〜58分 | [差分をレビューする](04-review.md) | Figmaとの差とコード上の問題を分けて確認できる |
| 58〜60分 | MCPの役割を整理する | 外部コンテキストを渡す意味を説明できる |

## 開始条件

- BasicでFAQを追加済み
- `npm run build` が成功する
- Figma公式プラグインがconnectedになっている
- 講習用Figmaファイルの閲覧権限がある
- `Testimonials / Desktop` のCopy link to selectionを取得できる

Figmaへ接続できない人は、[同じ内容のデザイン仕様](design-spec.md)で演習を続けられます。

## 完了条件

- Testimonialsが3件表示される
- デスクトップは3列、モバイルは1列になる
- Figmaの色や余白を、既存のCSS Variablesへ対応づけている
- 引用文、氏名、役割の読み上げ順が自然である
- 新しい依存ライブラリを追加していない
- `npm run build` が成功する

実装例は講師用の [`answer/figma-testimonials.md`](../../answer/figma-testimonials.md) にあります。
