# デモファイル

このディレクトリには、Marp Theme Canvasのスタイルをプレビューするためのデモファイルが含まれています。

## ディレクトリ構成

```
demo/
├── token/                  # デザイントークンのデモ
│   ├── color.md            # カラーパレット
│   ├── typography.md       # フォントサイズ、ウェイト、行間
│   └── corner-radius.md    # ボーダー半径トークン
├── element/                # HTML要素のデモ
│   ├── heading.md          # H1-H6見出し
│   ├── paragraph.md        # 段落テキスト
│   ├── list.md             # 箇条書き・番号付きリスト
│   ├── link.md             # リンク
│   ├── blockquote.md       # 引用
│   ├── table.md            # テーブル
│   ├── code.md             # インラインコードとコードブロック
│   ├── hr.md               # 水平線
│   ├── text-decorator.md   # 太字、マーク、ルビ
│   └── prettylights.md     # シンタックスハイライト
├── component/              # コンポーネントのデモ
│   ├── section.md          # スライドベースレイアウト
│   ├── header.md           # ヘッダー
│   ├── footer.md           # フッター
│   └── pagination.md       # ページ番号
├── common-layout/          # 共通レイアウトのデモ
│   └── columns.md          # マルチカラムレイアウト
└── slide-pattern/          # スライドパターンのデモ
    ├── title.md            # タイトルページ
    ├── section.md          # セクション区切り
    ├── toc.md              # 目次
    ├── agenda.md           # アジェンダページ
    └── display.md          # ディスプレイ（テキスト・画像強調）
```

## 使い方

### テーマ付きプレビュー

serveスクリプトを使用して、特定のテーマでプレビューできます:

```bash
# white-canvasテーマでプレビュー
pnpm serve:white

# black-canvasテーマでプレビュー
pnpm serve:black
```

ブラウザで `http://localhost:8080` を開いてください。

### デモファイルのフォーマット

各デモファイルは以下のフォーマットに従います:

1. **タイトルスライド**: ファイル名とSCSSパス
2. **デフォルト表示**: 要素/コンポーネントの基本プレビュー
3. **CSS変数**: カスタマイズ可能な変数の一覧
4. **カスタマイズ例**: `<style scoped>` を使用した上書き例

### テーマ切り替え

すべてのデモファイルはフロントマターで `theme: default` を使用しています。実際のテーマはserveスクリプトのCLI `--theme` オプションで適用されます。
