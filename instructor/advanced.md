# Advanced編は、前半で繰り返した仕事を4つの仕組みへ移す

Advanced編では、新しい機能を単独で紹介しません。BasicとFigmaで繰り返した依頼を題材にし、CLAUDE.md / Rules、Skill、Subagent、Hookの責任を分けます。

## 60:00〜66:00 毎回守るルールを分離する

```bash
npm run workshop:advanced:install -- memory
```

`.claude/rules/design.md` を開き、ルートの `CLAUDE.md` との違いを説明します。長い手順をRulesへ入れないことも伝えます。

## 66:00〜74:00 UIレビューをSkill化する

```bash
npm run workshop:advanced:install -- skill
```

必要に応じてClaude Codeを再起動し、`/ui-review` を実行します。参加者に、前半で使ったレビュー用プロンプトと見比べてもらいます。

## 74:00〜82:00 独立レビューをSubagentへ任せる

```bash
npm run workshop:advanced:install -- agent
```

Claude Codeを再起動し、`@agent-ui-reviewer` へ現在のdiffを渡します。Skillは手順、Subagentは担当という違いを、結果を見ながら説明します。

## 82:00〜88:00 検証をStop Hookへ移す

```bash
npm run workshop:advanced:install -- hook
```

`.claude/settings.json` のイベント、handler、commandを読みます。自動化の便利さだけでなく、リポジトリを開いた人の環境で実行されるコードであることも説明します。

## 88:00〜90:00 5機能を口頭で選んでもらう

次の問いを参加者へ出します。

- コーディング規約を毎回守らせたい → CLAUDE.md / Rules
- リリース前チェックを必要なときだけ呼びたい → Skill
- セキュリティ担当の視点で別に調査したい → Subagent
- ファイル編集後にformatterを必ず実行したい → Hook
- JiraやFigmaの情報を読みたい → MCP

名前を覚えたかではなく、責任から選べたかを確認します。

## 5分以上遅れたときの短縮箇所

- Rulesはファイル内容の説明だけにする
- Skillは実行結果の読み合わせを1項目に絞る
- Subagentはデモのみとし、全員実行を省く
- Hookの安全性説明と5機能の使い分けは省略しない
