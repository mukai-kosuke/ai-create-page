# 詰まった場所を特定し、講習の本線へ戻す

この章は講師が必要な項目だけを参照します。参加者へエラー全文、実行したコマンド、現在のディレクトリを確認してから復帰手順を選んでください。

## `claude` が見つからない → 導入とPATHを確認する

```bash
claude --version
```

見つからない場合は、[Claude Code公式セットアップ](https://code.claude.com/docs/en/setup)へ戻ります。導入直後はターミナルを再起動します。社用PCでインストールが禁止されている場合、その場で回避せず管理者対応へ切り替えます。

## `npm install` が失敗する → Node.jsと社内ネットワークを分けて確認する

```bash
node --version
npm --version
```

Node.jsが要件を満たしているのにレジストリ接続や証明書で失敗する場合は、社内プロキシやnpm設定の問題です。別の非公式レジストリへ勝手に切り替えません。

## ポート5173を使えない → 別ポートで起動する

```bash
npm run dev -- --port 5174
```

表示されたURLを使います。教材内のURLと異なっても、講習内容には影響しません。

## Plan modeで編集が始まらない → モード表示を確認する

Plan modeは編集を制限するため、計画確認後に通常の編集ができるモードへ戻す必要があります。`Shift+Tab` または画面上のモード切り替えを確認します。

## 依頼外のファイルが変わった → 先に差分を止めて確認する

```bash
git status --short
git diff --stat
```

参加者の既存変更を消さず、どの差分が演習前からあったかを確認します。無断で `git reset --hard` や `git checkout --` を実行しません。必要なら新しいcloneか講師用チェックポイントへ切り替えます。

## Figmaがconnectedにならない → 2分で代替仕様へ切り替える

`/plugin` のInstalledタブ、Figmaファイルの閲覧権限、selection linkの3点を確認します。解決しなければ [`docs/02-figma/design-spec.md`](../docs/02-figma/design-spec.md)で進めます。

## Figmaの内容を読めない → ファイルURLとselection linkを区別する

対象フレームを選び、Copy link to selectionで取得したURLを使います。フレーム名と直下要素だけを読む小さな依頼で接続を確認します。

## `/ui-review` が出ない → Skillsディレクトリの作成時期を確認する

```bash
npm run workshop:advanced:install -- skill
```

Claude Code起動時に `.claude/skills/` が存在しなかった場合は、再起動してから試します。

## `@agent-ui-reviewer` が出ない → Subagentを導入して再起動する

```bash
npm run workshop:advanced:install -- agent
```

`.claude/agents/` がセッション開始後に初めて作られた場合、Claude Codeの再起動が必要です。

## Stop Hookが毎回失敗する → 手動で同じ検証を実行する

```bash
npm run validate
```

手動実行でも失敗する場合は、その出力を先に直します。Hookだけを無効化して講習を進める場合は、`.claude/settings.json` を削除せず、講師の管理下で一時的に別名へ退避します。

## 実装が時間内に終わらない → ヒントを段階的に出す

1. 変更するファイル名を伝える
2. HTML要素の候補を伝える
3. CSS Variablesの候補を伝える
4. 残り5分で `answer/` の該当部分を使う

完成コードを最初から渡すと、調査とPlanの学習機会がなくなります。残り時間と学習目標を見て、必要な範囲だけ支援してください。
