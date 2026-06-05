#### Atomic Design 忘備録 スタイル

Atomic Designとは、Brad Frost が提唱したUI設計手法です。

考え方としては、

原子
↓
分子
↓
有機体
↓
テンプレート
↓
ページ

という階層でUIを組み立てます。

---

### Atoms（原子）

これ以上分解しにくい最小単位。例えば、
<Button />
<Input />
<Label />
<Icon />

など。

講座だと、
atoms
├ Button
├ Input
├ Card

みたいな感じですね。

ただし、Cardは本当にAtom？は議論になります。
後で説明します。

---

### Molecules（分子）

Atomsを組み合わせたもの。例えば、
<label>
名前
<input />
</label>

とか、

<Input />
<Button />

の検索フォーム。

講座で言うと
<SearchInput />

みたいなやつですね。

<Input />
<PrimaryButton />

を組み合わせています。

---

### Organisms（有機体）

もっと大きな部品。例えば、

ヘッダー
ユーザーカード一覧
サイドバー

など。例えば、

<UserCard />
は人によっては Organism に分類します。

---

### Templates（テンプレート）

ページの骨組み。

例えば、

<Header />
<Main />
<Footer />

みたいなレイアウト。

講座の
<DefaultLayout />
はまさに Template です。

---

### Pages（ページ）

実際の画面。例えば、
<Top />
<Users />
など。

APIから取得したデータを流し込んだ状態の画面です。
今回の例で分類すると例えば、

atoms
├ Button
├ Input

molecules
├ SearchInput

organisms
├ UserCard

templates
├ DefaultLayout

pages
├ Top
├ Users

みたいな感じ。

---

### 実務での評価

Atomic Designは有名ですが実務では賛否あります。例えば、

atoms
molecules
organisms

を厳密にやると、

このコンポーネントは
Molecule？
Organism？

問題が発生します。例えば UserCard。

<UserCard />
は、InputとButtonの組み合わせじゃない。
でもページほど大きくない
じゃあ Molecule？ Organism？ となります。

だから最近は、
features
components
pages
layouts

みたいな分類を使うチームも増えています。

学習目的なら価値があるAtomic Design の一番の価値は、
「大きいコンポーネントを小さく分割して考える」
という癖がつくことです。例えば、
<UserCard />

を見た時に、

画像部分
↓
名前部分
↓
詳細情報部分

と分解して考えられる。これは React の設計でとても大事です。
なので今のあなたの講座でやっている

atoms
molecules
organisms
templates
pages

は、Atomic Design の教科書的な構成です。
ただ実務では、「Atomic Designを厳密に守る」より、
「コンポーネントの責務を分けるための考え方として使う」
くらいの温度感で使われることが多いですね。
