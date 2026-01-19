---
marp: true
theme: white-canvas
paginate: true
header: ""
footer: "2026年1月"
style: |
  :root {
    --color-primary: #3b91c4;
    --color-accent: #ead7a4;
  }
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _header: "White Canvas動作確認" -->

# White Canvas動作確認

最終更新: 2026/01/19
にしこりさぶろ〜 @subroh_0508

---

<!-- _class: agenda -->
<!-- _header: "White Canvas動作確認" -->

## White Canvasテーマ構成

- **component/**
  - スライド共通で使用する要素のスタイル
  - 見出し、テキスト装飾、引用、テーブル、コード等
- **page/**
  - 特定の用途に特化したページスタイル
  - タイトル、中扉、目次、アジェンダ、ディスプレイ

---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _header: "White Canvas動作確認" -->

Page Styles

---

<!-- _class: title -->
<!-- _header: "デモスライド（page/_title.scss）" -->

# タイトルページ<br/>複数行になるとこのような表示<small>〜サブタイトルを添えて〜</small>

イベント名・発表日
発表者名

---

<!-- _class: section -->
<!-- _header: "デモスライド（page/_section.scss）" -->

中扉ページのデモ

---

<!-- _class: toc -->
<!-- _header: "デモスライド（page/_toc.scss）" -->

## 目次

1. 最初のセクション
1. 2番目のセクション
   - サブセクション その1
   - サブセクション その2
1. 3番目のセクション

---

<!-- _class: agenda -->
<!-- _header: "デモスライド（page/_agenda.scss）" -->

## 今日話すこと

◯◯なみなさんに、以下3つの知見を持ち帰って欲しい！

- 知見1
  - 詳細な説明文がここに入ります
  - 補足情報など
- 知見2
  - 詳細な説明文がここに入ります
- 知見3

---

<!-- _class: display -->
<!-- _header: "デモスライド（page/_display.scss）" -->

短い文章を大きく表示して目立たせる

---

<!-- _class: display -->
<!-- _header: "デモスライド（page/_display.scss）" -->

![](https://picsum.photos/720?image=70)

画像がある場合は文字サイズは大きくならない

---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _header: "White Canvas動作確認" -->

Component Styles

---

<!-- _header: "デモスライド（component/_section.scss）" -->

## スライド本体のレイアウト

`component/_section.scss` はスライド全体の基本レイアウトを定義します。

- 幅・高さ
- パディング
- 背景色・文字色
- フォント設定
- リストのインデント

---

<!-- _header: "デモスライド（component/_heading.scss）" -->

# 見出し1（H1）
## 見出し2（H2）
### 見出し3（H3）
#### 見出し4（H4）
##### 見出し5（H5）
###### 見出し6（H6）

通常の段落テキストです。見出しとの余白・フォントサイズの差を確認してください。

---

<!-- _header: "デモスライド（component/_text-decorator.scss）" -->

## テキスト装飾

**太字（Bold）** のテキストです。

*斜体（Italic）* のテキストです。

***太字かつ斜体*** のテキストです。

~~取り消し線（Strikethrough）~~ のテキストです。

<mark>ハイライトテキスト</mark>を含む文章です。

<ruby>**難読漢字**<rp>（</rp><rt>なんどくかんじ</rt><rp>）</rp></ruby>にルビを振ることができます。

---

<!-- _header: "デモスライド（component/_blockquote.scss）" -->

## 引用（Blockquote）

> これは引用文です。
> 複数行にまたがることもできます。

通常テキストとの余白を確認してください。

> ネストされた引用
> > 引用の中の引用

---

<!-- _header: "デモスライド（component/_table.scss）" -->

## テーブル（基本）

※スタイルは [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) を踏襲

| 項目 | 説明 | 備考 |
|------|------|------|
| Marp | Markdownプレゼン | オープンソース |
| VS Code | エディタ | 拡張機能対応 |
| CLI | コマンドライン | PDF出力可能 |

---

<!-- _header: "デモスライド（component/_table.scss）" -->

## テーブル（配置指定）

※スタイルは [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) を踏襲

| 左寄せ | 中央寄せ | 右寄せ |
|:-------|:--------:|-------:|
| あ | い | う |
| 左 | 中央 | 右 |
| 123 | 456 | 789 |

---

<!-- _header: "デモスライド（component/_code.scss）" -->

## インラインコード

※スタイルは [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) を踏襲

`インラインコード` を含むテキストです。

通常テキスト、**太字**、*斜体*、`コード`を組み合わせた文章です。

---

<!-- _header: "デモスライド（component/_code.scss, prettylights/）" -->

## コードブロック

※スタイルは [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) を踏襲

```javascript
// JavaScriptのサンプル
function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}
greet("世界");
```

---

<!-- _header: "デモスライド（component/_code.scss, prettylights/）" -->

## コードブロック（複数言語）

※スタイルは [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) を踏襲

```python
# Pythonのサンプル
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```

```bash
# シェルスクリプト
echo "Hello, Marp!"
```

---

<!-- _header: "デモスライド（component/_header.scss, _footer.scss, _pagination.scss）" -->

## ヘッダー・フッター・ページ番号

- **ヘッダー**: スライド上部に表示（このスライドでは対応SCSSファイル名）
- **フッター**: スライド下部に表示（このスライドでは「2026年1月」）
- **ページ番号**: 右下に表示

---

<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

## ヘッダー・フッター・ページ番号（非表示）

このスライドでは以下を設定して非表示にしています：

- `_paginate: false`
- `_header: ""`
- `_footer: ""`

---

<!-- _class: columns -->
<!-- _header: "デモスライド（component/_columns.scss）" -->

<div class="column">

## 使い方1: `_class: columns`

スライド全体がカラムレイアウトになる

- `<!-- _class: columns -->` を指定
- `<div class="column">` のみ記述
- スライド全体を分割したい場合に便利

</div>
<div class="column">

## 右カラム

`<div class="columns">` は不要

- 項目A
- 項目B
- 項目C

</div>

---

<!-- _header: "デモスライド（component/_columns.scss）" -->

## 使い方2: `<div class="columns">`

> カラムの前後にテキストを配置できる

<div class="columns">
<div class="column">

**左カラム**

- 項目A
- 項目B

</div>
<div class="column">

**右カラム**

- 項目C
- 項目D

</div>
</div>

> カラムの後にも文章を続けて書ける

---

<!-- _header: "デモスライド（component/_columns.scss）" -->

## カラムレイアウト（幅指定）

<div class="columns">
<div class="column-4">

![](https://picsum.photos/1200/800?image=50)

</div>
<div class="column-6">

**テキストコンテンツ**

画像とテキストを横並びにする場合のレイアウト例

- `column-4`: 4の比率
- `column-6`: 6の比率

</div>
</div>

---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _header: "White Canvas動作確認" -->

その他

---

<!-- _header: "デモスライド（リスト）" -->

## リスト

### 順序なしリスト

- リスト項目1
- リスト項目2
  - ネストされた項目2-1
  - ネストされた項目2-2
- リスト項目3

---

<!-- _header: "デモスライド（リスト）" -->

## リスト

### 順序付きリスト

1. 最初の項目
2. 2番目の項目
   1. ネストされた番号付き項目
   2. ネストされた番号付き項目
3. 3番目の項目

---

<!-- _header: "デモスライド（リスト）" -->

## リスト

### 順序なしリスト（クリックでアイテムを1つずつ表示）

* リスト項目1
* リスト項目2
  - ネストされた項目2-1
  - ネストされた項目2-2
* リスト項目3

---

<!-- _header: "デモスライド（リンク）" -->

## リンク

- [Marp公式サイト](https://marp.app/)
- [GitHub - Marp](https://github.com/marp-team/marp)
- 自動リンク: https://marp.app/

---

<!-- _header: "デモスライド（数式）" -->

## 数式（KaTeX）

インライン数式: $E = mc^2$

ブロック数式:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

<!-- _header: "デモスライド（画像）" -->

## 画像（基本）

![width:200px](https://marp.app/assets/marp.svg)

画像の下にキャプションテキストを配置

---

<!-- _header: "デモスライド（画像）" -->

## 画像サイズ指定

![width:100px](https://marp.app/assets/marp.svg) ![width:150px](https://marp.app/assets/marp.svg) ![width:200px](https://marp.app/assets/marp.svg)

`![width:Npx]` で幅を指定できます

---

<!-- _header: "デモスライド（背景画像）" -->

## 背景画像（左配置）

![bg left:40%](https://picsum.photos/720?image=29)

- 背景画像を左側に配置
- コンテンツは右側に表示
- `bg left:40%` で幅を指定

---

<!-- _header: "デモスライド（背景画像）" -->

## 背景画像（右配置）

![bg right:40%](https://picsum.photos/720?image=27)

- 背景画像を右側に配置
- コンテンツは左側に表示
- `bg right:40%` で幅を指定

---

<!-- _header: "デモスライド（背景画像）" -->

## 背景画像（フィット）

![bg fit](https://picsum.photos/720?image=30)

背景画像をスライドにフィットさせます

---

<!-- _header: "デモスライド（背景画像）" -->

## 背景画像（複数）

![bg](https://picsum.photos/720?image=1)
![bg](https://picsum.photos/720?image=20)
![bg](https://picsum.photos/720?image=40)

3枚の背景画像を横に並べて表示

---

<!-- _header: "デモスライド（HTML要素）" -->

## HTML要素

<div style="background: #f0f0f0; padding: 1em; border-radius: 8px;">
カスタムスタイルを適用したボックス
</div>

<br>

<sub>下付き</sub>文字と<sup>上付き</sup>文字

---

<!-- _header: "デモスライド（絵文字）" -->

## 絵文字

:smile: :heart: :thumbsup: :rocket: :star:

:warning: 注意事項
:bulb: ヒント
:memo: メモ

※ 絵文字のサポートはテーマ・環境に依存します

---

<!-- _header: "デモスライド（スコープ付きスタイル）" -->

## スコープ付きスタイル

<style scoped>
h2 {
  color: #e74c3c;
}
p {
  font-size: 0.9em;
  color: #666;
}
</style>

このスライドのみに適用されるカスタムスタイルです。

見出しは赤色、段落テキストはグレーで小さめに表示されます。

---

<!-- _class: display -->
<!-- _paginate: false -->
<!-- _header: "White Canvas動作確認" -->

ありがとうございました
