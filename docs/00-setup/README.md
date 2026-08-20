# 講習前に、6項目を自分のPCで確認する

この章は、講習へ参加する全員が事前に読むセットアップガイドです。講習当日は操作の練習から始めるため、インストールやログインは前日までに済ませてください。困ったときだけ後半の「エラー別の確認先」を参照します。

## 対象者と前提

対象は、ターミナルを使ったことはあるものの、Claude Codeの利用経験が少ない人です。macOS、Windows、WSLに対応します。社用PCでは、ソフトウェアのインストールや外部サービスへの接続が組織ポリシーで制限される場合があります。

## 1. Gitが使える

```bash
git --version
```

バージョン番号が表示されれば完了です。コマンドが見つからない場合は、[Git公式のインストール案内](https://git-scm.com/downloads)に従ってください。

## 2. Node.js 20.19以上、または22.12以上が使える

```bash
node --version
npm --version
```

この教材はVite 8を使うため、Node.js 20.19以上、または22.12以上が必要です。LTS版は[Node.js公式サイト](https://nodejs.org/)から入手できます。

複数プロジェクトでNode.jsのバージョンが異なる場合は、所属チームで採用しているバージョン管理ツールを使ってください。

## 3. Claude Codeへログインできる

Claude Codeが未導入の場合は、[公式セットアップガイド](https://code.claude.com/docs/en/setup)から自分のOSに合う方法を選びます。npmを使う場合のコマンドは次のとおりです。

```bash
npm install -g @anthropic-ai/claude-code
```

導入後に確認します。

```bash
claude --version
claude doctor
```

初回起動ではログインが必要です。所属組織で利用方法が決められている場合は、個人の判断で別アカウントやAPIキーを使わず、管理者の案内を優先してください。

## 4. リポジトリの依存関係を準備できる

リポジトリのルートで実行します。

```bash
npm install
```

完了すると `node_modules/` と `package-lock.json` が使われます。`node_modules/` はGitへ追加しません。

## 5. LPをローカルで開ける

```bash
npm run dev
```

表示されたURLをブラウザで開きます。TaskFlow AIのヒーロー、3つの機能、使い方、CTAが表示されれば完了です。開発サーバーは `Ctrl+C` で終了できます。

## 6. 事前チェックがすべて通る

```bash
npm run workshop:check
```

次の6項目が `✓` になれば、講習へ参加できます。

```text
✓ Node.js
✓ npm
✓ Git
✓ Claude Code
✓ 依存パッケージ
✓ 本番ビルド
```

CIやClaude Codeを導入しない検証環境では、`npm run workshop:check -- --skip-claude` でClaude Codeの確認だけを省略できます。参加者のPCでは省略しないでください。

## Figma編へ参加する人だけ追加準備をする

60分・90分コースへ参加する場合は、[Figma MCPのセットアップ](figma.md)も前日までに済ませます。講習中にOAuth認証から始めると、演習時間を確保できません。

## エラー別の確認先

| 症状 | 最初に確認すること |
|---|---|
| `node` が見つからない | Node.jsの導入後にターミナルを再起動したか |
| Node.jsのバージョンが古い | 20.19以上、または22.12以上へ切り替えたか |
| `claude` が見つからない | 公式手順で導入し、ターミナルを再起動したか |
| `npm install` が失敗する | 社内プロキシ、証明書、npmレジストリのルールがないか |
| ポート5173を使えない | `npm run dev -- --port 5174` で別ポートを指定できるか |
| ビルドが失敗する | `npm install` 後に `npm run build` を単独実行したか |

ここで解決しない場合は、エラーメッセージを省略せず講師へ共有してください。講師は[トラブルシューティング](../../instructor/troubleshooting.md)から復帰手順を案内します。

最終更新日: 2026-08-19
