# Advanced追加30分で、繰り返した作業をClaude Codeの仕組みへ移す

Advanced編は、BasicとFigma編を終えた参加者向けです。ここまで毎回プロンプトで頼んでいたルール、レビュー手順、別担当への依頼、検証を、Claude Codeのプロジェクト設定へ移します。

新機能を順番に覚えることが目的ではありません。「繰り返し説明している仕事を、どの仕組みへ移すか」を判断できる状態を目指します。

## 追加30分の進め方

| 時間 | ミッション | 役割 |
|---:|---|---|
| 60〜66分 | [CLAUDE.mdとRules](01-memory.md) | 毎回守ってほしいプロジェクトルール |
| 66〜74分 | [Skill](02-skill.md) | 必要なときに呼ぶ再利用可能な手順 |
| 74〜82分 | [Subagent](03-subagent.md) | 独立したコンテキストで働く別担当 |
| 82〜88分 | [Hook](04-hooks.md) | 決まったイベントで必ず動く処理 |
| 88〜90分 | 5機能を整理する | 使い分けを自分の言葉で説明する |

## 雛形は段階的に有効にする

Advanced用ファイルは `workshop-assets/advanced/` にあります。開始時点ではClaude Codeへ読み込まれません。各Missionで次のコマンドを実行すると、対応するファイルだけが `.claude/` へコピーされます。

```bash
npm run workshop:advanced:install -- memory
npm run workshop:advanced:install -- skill
npm run workshop:advanced:install -- agent
npm run workshop:advanced:install -- hook
```

同名ファイルがすでにあり、内容が異なる場合は上書きせず停止します。参加者が書いた内容を勝手に消さないためです。

## 5機能の使い分け

| 仕組み | 一言でいうと | この教材での例 |
|---|---|---|
| CLAUDE.md / Rules | 常に知っていてほしいルール | CSS Variables、レスポンシブ、検証 |
| Skill | 必要なときに呼ぶ手順 | `/ui-review` |
| Subagent | 別の視点を持つ担当 | `@agent-ui-reviewer` |
| Hook | イベント時に必ず動く処理 | Stop時の `npm run validate` |
| MCP | 外部サービスとの接続 | Figmaのデザインコンテキスト |

## 完了条件

- `.claude/rules/design.md` が読み込まれる
- `/ui-review` の手順でレビューできる
- `@agent-ui-reviewer` に独立レビューを依頼できる
- Stop Hookが `npm run validate` を実行する
- 5機能を目的から選べる

Claude CodeをAdvanced用ファイルの作成前から起動していた場合は、最初のSkillまたはSubagentを読み込むために再起動が必要になることがあります。
