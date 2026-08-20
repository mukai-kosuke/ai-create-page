# Claude Code × TaskFlow AI Workshop

TaskFlow AIのLPを少しずつ改善しながら、Claude Codeとの仕事の進め方を学ぶハンズオン教材です。30分、60分、90分の3コースを同じリポジトリで実施できます。

この教材で覚えるのは、コマンドの暗記ではありません。Claude Codeに調査を任せ、計画を確認し、実装結果をレビューしてからGitに残すまでの流れを体験します。

## 最初の10分で環境を確認する

講習前に、次のコマンドを実行してください。

```bash
npm install
npm run workshop:check
npm run dev
```

ブラウザで `http://localhost:5173` を開き、TaskFlow AIのLPが表示されたら準備完了です。Claude Codeは、このリポジトリのルートで起動します。

```bash
claude
```

`npm run workshop:check` でエラーが出た場合は、[講習前セットアップ](docs/00-setup/README.md)を確認してください。

## 参加時間に合わせてコースを選ぶ

| コース | 所要時間 | 学ぶこと | 開始場所 |
|---|---:|---|---|
| Basic | 30分 | 調査、具体的な指示、Plan mode、実装、diff | [Basic教材](docs/01-basic/README.md) |
| Figma | 60分 | Basic + Figma MCPからデザインを読み、既存LPへ実装 | [Figma教材](docs/02-figma/README.md) |
| Advanced | 90分 | Basic + Figma + CLAUDE.md、Skill、Subagent、Hook | [Advanced教材](docs/03-advanced/README.md) |

初めて参加する場合はBasicから順に進めます。Figma編とAdvanced編は、それぞれ前のコースを終えた状態が前提です。

## このLPには、演習用の未完成部分がある

画面はそのままでも動きますが、次の要素は意図的に未実装です。

- よくある質問（Basicで追加）
- お客様の声（Figmaで追加）
- UIレビューの再利用手順（AdvancedでSkill化）
- 独立したレビュー担当（AdvancedでSubagent化）
- 作業終了時の自動検証（AdvancedでHook化）

実装例は [`answer/`](answer/README.md) にあります。参加者は先に見ず、講師が詰まったときの復帰用として使ってください。

## 開発コマンド

| コマンド | 用途 |
|---|---|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ファイルを生成 |
| `npm run validate` | 教材の必須ファイルとビルドを確認 |
| `npm run validate:starter` | FAQとTestimonialsが未実装の開始状態も確認 |
| `npm run check:links` | Markdown内のローカルリンクを確認 |
| `npm run workshop:check` | Node.js、npm、Git、Claude Code、依存関係、ビルドを一括確認 |
| `npm run workshop:advanced:install -- <stage>` | Advanced教材を段階的に有効化 |

技術構成はVite、HTML、CSS、JavaScriptだけです。フレームワーク固有の知識を減らし、Claude Codeとの進め方に集中できるようにしています。

## 講師はRunbookから始める

講師は、開催前に[準備チェックリスト](instructor/prep-checklist.md)を確認してください。各コースの進行台本と復帰方法も `instructor/` にまとめています。

- [Basic 30分の進行台本](instructor/basic.md)
- [Figma追加30分の進行台本](instructor/figma.md)
- [Advanced追加30分の進行台本](instructor/advanced.md)
- [トラブルシューティング](instructor/troubleshooting.md)

## 公式ドキュメント

- [Claude Codeをセットアップする](https://code.claude.com/docs/en/setup)
- [Plan modeを含む権限モード](https://code.claude.com/docs/en/permissions)
- [CLAUDE.mdによるプロジェクト指示](https://code.claude.com/docs/en/memory)
- [Skills](https://code.claude.com/docs/en/skills)
- [Subagents](https://code.claude.com/docs/en/sub-agents)
- [Hooks](https://code.claude.com/docs/en/hooks)
- [Figma MCPをClaude Codeへ接続する](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server)

教材の最終更新日: 2026-08-19
