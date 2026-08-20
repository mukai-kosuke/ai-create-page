# Testimonials / Desktop デザイン仕様

この仕様は、講習用Figmaファイルを作るときの基準であり、Figma MCPへ接続できない参加者の代替入力でもあります。

## セクション構造

```text
Testimonials / Desktop
├── Section heading
│   ├── Eyebrow: VOICES
│   ├── Heading: チームの毎日に、余白が生まれた。
│   └── Description
└── Testimonial list
    ├── Testimonial card / 01
    ├── Testimonial card / 02
    └── Testimonial card / 03
```

## Desktopフレーム

| 項目 | 値 |
|---|---|
| 幅 | 1440px |
| セクション左右padding | 80px |
| セクション上下padding | 96px |
| 見出しとカード一覧のgap | 48px |
| カード一覧 | 横方向Auto Layout、3列 |
| カード間gap | 24px |
| 背景 | `surface/default` = `#FFFFFF` |

## Testimonial card

| 項目 | 値 |
|---|---|
| 幅 | Fill container |
| 最小高さ | 320px |
| padding | 32px |
| 内部gap | 24px |
| 角丸 | `radius/lg` = 32px |
| 背景 | 1枚目 `accent/lime-soft`、2枚目 `accent/blue-soft`、3枚目 `accent/orange-soft` |
| 引用文 | 18px / 1.7 / Medium |
| 氏名 | 14px / 1.4 / Bold |
| 役割 | 12px / 1.5 / Regular |
| アバター | 44px円、氏名のイニシャル |

## 文言

### Card 01

- 引用: 「朝いちばんに優先順位が見えるので、迷わず仕事を始められるようになりました。」
- 氏名: 青木 奈緒
- 役割: プロダクトマネージャー
- イニシャル: AN

### Card 02

- 引用: 「状況確認のミーティングが減り、チームで考える時間をきちんと取れています。」
- 氏名: 佐久間 健
- 役割: エンジニアリングマネージャー
- イニシャル: SK

### Card 03

- 引用: 「会議メモからタスクが整理されるので、抜け漏れへの不安がかなり軽くなりました。」
- 氏名: 森川 央
- 役割: カスタマーサクセス
- イニシャル: MO

## Variablesの対応候補

| Figma Variable | 値 | 既存CSS Variable候補 |
|---|---|---|
| `text/primary` | `#18352F` | `--color-ink` |
| `text/secondary` | `#49615B` | `--color-ink-soft` |
| `surface/default` | `#FFFFFF` | `--color-surface` |
| `accent/lime-soft` | `#F1FFC3` | `--color-lime-soft` |
| `accent/blue-soft` | `#DFF0FF` | `--color-blue-soft` |
| `accent/orange-soft` | `#FFE4C8` | `--color-orange-soft` |
| `spacing/3` | `16px` | `--space-3` |
| `spacing/4` | `24px` | `--space-4` |
| `spacing/6` | `48px` | `--space-6` |
| `radius/lg` | `32px` | `--radius-lg` |

## Figmaで講師が作るときの条件

- カードを1つのComponentにし、文言と背景をPropertiesで変える
- カード一覧とカード内部にAuto Layoutを使う
- 色、spacing、radiusはVariablesを参照する
- レイヤー名を `Frame 123` のままにせず、役割がわかる名前にする
- 対象フレームは `Testimonials / Desktop` と命名する

## 未確定

- 講習用Figma URL: TBD
- Figmaファイル所有者: TBD
- 参加者への閲覧権限付与方法: TBD

未確定項目は開催前に講師が埋めます。値や権限を推測して進めないでください。
