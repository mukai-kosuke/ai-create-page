# Mission 3: 実装担当とは別のコンテキストでレビューする

同じ会話で実装とレビューを続けると、実装時の前提をそのまま受け入れやすくなります。Subagentを使い、コードを変更しないレビュー担当を追加します。

```bash
npm run workshop:advanced:install -- agent
```

追加されるファイルを読みます。

```text
.claude/agents/ui-reviewer.md
```

Claude Codeを再起動し、次のように依頼します。

```text
@agent-ui-reviewer 現在のgit diffをレビューしてください。
コードは変更せず、問題と根拠だけを返してください。
```

Subagentは、メインの会話とは別のコンテキストで調査し、結果を返します。この雛形では書き込みツールを渡さないため、レビュー中にソースを変更しません。

## Skillとの違い

- Skillは、メインのClaudeへ「この手順で進めて」と渡す
- Subagentは、別担当へ仕事を分けて結果を受け取る

手順を再利用したいだけならSkillで足ります。実装担当とレビュー担当を分けたい場合にSubagentを選びます。
