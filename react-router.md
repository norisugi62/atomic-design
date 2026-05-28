#### ReactRouter 忘備録 スタイル

### install

React Router を使うには `react-router-dom` をインストールする。

`npm install react-router-dom`

講座によっては古い書き方が出てくる。

# 古い書き方（v5）

- Switch
- component
- exact
- render

# 今の書き方（v6）

- Routes
- element
- exact不要

---

### 基本ルーティング

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page1" element={<Page1 />} />
    <Route path="/page2" element={<Page2 />} />
  </Routes>
</BrowserRouter>;
```

役割
BrowserRouter: URLの変化を監視する
Routes: どのURLなら何を表示するか管理する
Route: URLとコンポーネントを対応づける

---

### Linkでページ遷移

```jsx
<Link to="/">Home</Link>
<Link to="/page1">Page1</Link>
<Link to="/page2">Page2</Link>
```

to に指定したURLへ遷移する。aタグみたいなものです。これ書いてもちゃんとルーティングさせないとブラウザのパスがきりかわるだけでページは何もかわりません、SPAだから。

# ① SPA（今やってる React）

React + React Router の構成は SPA。
URL（path）＝ただの状態
実体（表示）＝JSが切り替えるコンポーネント

だから`/page1/detailA`と`Page1DetailA.jsx` の場所は完全に無関係。
👉 どこにファイル置いてもOK
👉 import さえ合ってれば動く

# ② 静的サイト（昔のHTMLサイト・MPA）

こっちは考え方が違う。

/about/index.html
/page1/index.html
/page1/detailA.html

みたいに置くと、そのままURLになる。

これはいわゆる `Multi-page application`という仕組み

静的サイトは基本は`ファイル構造 ≒ URL構造`です。

例：
/page1/detailA.html → URLもそのまま /page1/detailA になる（サーバー設定にもよるけど）

# ③ なぜこうなるか

MPAは、サーバーがファイルをそのまま返す。ブラウザはそれを表示するだけ
だから`URL = ファイルパス`に近い。

---

### BrowserRouter の中の配置

```jsx
<BrowserRouter>
  <Header />

  <Routes>...</Routes>

  <Footer />
</BrowserRouter>
```

# Routesの外

`全ページ共通表示` 固定パーツで、どのページに遷移しても表示します。
共通ヘッダーや共通フッターの考え方。昔ならったAjaxでページ内容だけ切り替えるときに使った考え方と一緒です。
例
・Header
・Footer
・ナビゲーション
を共通コンポーネントとして使う

# Routesの中

`URLによって切り替わる部分`

---

### Route の path と import の path は別

ここは混同しやすいのでもう一度書きます。

**_ Route の path _**

```jsx
<Route path="/page1/detailA" element={<DetailA />} />
```

これはブラウザのURL。

**_ import の path _**

```jsx
import DetailA from './DetailA';
```

これはファイルの場所。つまり、
`URLの階層とファイル構造は一致していなくてもよい。`

`ファイルを移動した場合は import だけ変更する。`

です。

---

### ページを増やす（地道な方法）

Route を1つずつ追加する。

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/page1" element={<Page1 />} />
  <Route path="/page1/detailA" element={<Page1DetailA />} />
  <Route path="/page1/detailB" element={<Page1DetailB />} />
  <Route path="/page2" element={<Page2 />} />
</Routes>
```

特徴
・シンプル
・わかりやすい
・学習初期に最適
`この場合はページが完全に切り替わる。`

**_ 完全切り替えの挙動 _**
/page1 → Page1表示
/page1/detailA → Page1は消えて DetailA が表示される

---

### Route を別ファイルに分ける

Route が増えたら分割できる。

```jsx
const Page1Routes = () => {
  return (
    <>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page1/detailA" element={<Page1DetailA />} />
      <Route path="/page1/detailB" element={<Page1DetailB />} />
    </>
  );
};
export default Page1Routes;
```

# 使う側

```jsx
import Page1Route from './Page1Route.jsx';
/*-省略-*/
<Routes>
  <Route path="/" element={<Home />} />
  {Page1Routes()}
</Routes>;
/*-省略-*/
```

これで別ページにまとめて書けます。しかし`推奨方法は、1つずつ書いていく方法`です。
ただし、これはあくまで小規模なサイトのただ単に見やすい方法をとっただけのやり方です。

node.jsのExpressの、path='/product/:id'とは設計思想が違うので勘違いしないでください。
今回のはあくまで別ページに近しいものをまとめて書いただけです。

本来、detail(詳細)みたいなものは、ネストして親のページを表示したまま表示するものにふさわしい名前です。
ネストせずに別ページにする理由があったとするならば、
・情報量が多い
・URLを共有したい
・戻る/進むを意味あるものにしたい
・SEOに載せたい
な理由が必要になってきます。

もう一度言いますが、今回の今説明で別ファイルに分けたのは、ただ分けただけなので注意してください。
これくらいなら分ける必要はありません。`「できるけど必須ではない」`見通し・保守性を求めたときに考えてもいいです。

---

### ネストルーティング と Outlet

親ページを残したまま子ページだけ切り替える方法。

```jsx
<Route path="/page1" element={<Page1 />}>
  <Route path="detailA" element={<DetailA />} />
  <Route path="detailB" element={<DetailB />} />
</Route>
```

これは親のページを表示しつつ、ネストしたページを表示する方法です。

---

**_ 相対パス _**
`path="detailA"`
これは、`/page1/detailA` として扱われる。親の path が自動でつく。

**_ Outlet _**
ネストした子Routeを表示する場所

```jsx
import { Outlet } from 'react-router-dom';
const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Outlet />
    </div>
  );
};

export default Page1;
```

Outlet の役割は、React Router が子Routeをここに差し込む。
つまり Page1 を表示したまま、Detail 部分だけ切り替えられる。

仮にこんなルーター設定があり、

```jsx
<Route path={BASE} element={<Page />}>
  <Route path={':id'} element={<Product />} />
</Route>;

import { Outlet } from 'react-router-dom';
const Page1 = () => {
  const states = { data: [], status, error };
  return (
    <div>
      <h1>Page1</h1>
      <Outlet context={states} />
    </div>
  );
};
```

ここで注目して欲しいのが、Outletで使っているcontext属性です。
これはOutletタグで使える専用でして、propsとは違います。
これをOutletで表示されるProductのなかでは、

```jsx
import { useParams, useOutletContext } from 'react-router-dom';
const Product = () => {
  const { data } = useOutletContext();
  const { id } = useParams();
  const item = data.find((product) => product.id === Number(id));

  return (
    <div>
      <h2>title</h2>
      <p>{id}</p>
    </div>
  );
};
```

## useOuteletContext

`const { data } = useOutletContext();`
こんなふうに、useOutletContext()を使って送ったものを取得することができる。なのでcontextは専用属性であって、propsではないです。覚えておいてください。
ここでポイントなのは、ネストしてルーティングしていると、Page1からリンク踏んで、'/page1/100' という場所に遷移したとします。これはネスト特有のルールで遷移しているかもしれないけど、Page1は残ったままProductを表示します。これは同じページに両方のコンポーネントが表示しているってことです。だから遷移して風でもpage1は消えません。idとなる`/100`となったときだけProductは表示される仕組みになっています。

---

### 完全切り替えとネストの違い まとめ

**_ 完全切り替え _**

```jsx
<Route path="/page1" element={<Page1 />} />
<Route path="/page1/detailA" element={<DetailA />} />
```

Page1は消える。

**_ ネスト + Outlet _**

```jsx
<Route path="/page1" element={<Page1 />}>
  <Route path="detailA" element={<DetailA />} />
</Route>
```

Page1をのこしたまま切り替えられる。

# 使い分け

完全切り替えは独立したページ。

ネストは親レイアウトを残したいとき。
(例)
・管理画面
・商品詳細
・パンくず構造がある画面

でも、基本ネストは親を残すけど、

```jsx
const Page1 = () => {
  const { state } = useProducts();
  const { status, data, error } = state;
  const { id } = useParams();

  if (status === STATUS.IDLE) return <p>開始前</p>;
  if (status === STATUS.LOADING) return <p>読み込み中</p>;
  if (status === STATUS.ERROR) return <p>エラー: {error}</p>;
  if (status === STATUS.SUCCESS && data.length === 0) return <p>表示できる商品がありません</p>;

  return (
    <div>
      <h1>Page1です</h1>
      {!id && <ProductList data={data} basePath={'/page1'} />}
      <Outlet context={{ data }} />
    </div>
  );
};
```

こんな感じにすると親は消えます。このときの動きが少しむずかしいけど、PネストしてデフォルトでPage1を残したままProductが表示するように、遷移してもどちらのコンポーネントが動いているってわかると、この書き方でどうしてPage1が消えて、Productだけ表示されるのかがわかります。遷移してる風であってもPage１の中でProductが動いている、pathである/page1/100が表示するページじゃなくて、表示する資産、情報。SPAは読み込んでリセットしなくてマウント、アンマウントで表示するものを切り替えてる。表示されるものをレンダリングするときだけ、その中のjsが実行される。
この書き方だとリンク踏んだ時にProductのページになるけど、実はPage１が動いてからProductが表示されている。Page1のuseParamはまだ下で説明しているけど、ここで簡単に説明すると、idの部分をつまり100を引っ張ってくる。idがない時はundefinedが!で変化してtrueになるから右側のLsitが表示されますが、このリストのリンク踏んで/page1/100となったら、Link経由でレンダリングの予約が入ります。それで実行されて、page1のidが100になる。!idが今度はfalseになるからListは表示されません。で次にpathのid部分に値が出たことでネストシステムが動いてProductが表示される等仕組みになっています。

ちょっと複雑ですが、こんな動きになります。

---

### useNavigate(戻る)

```jsx
import { useNavigate } from 'react-router-dom';
const Page1DetailA = () => {
  const navigagte = useNavigate();
  return (
    <div>
      <h1>Page1 DetailAページです</h1>
      <button onClick={() => navigagte(-1)}>戻る</button>
    </div>
  );
};
```

遷移順を見て
`navigate(-1)` だと１つ戻る
`navigate(-2)` だと２つ戻る

/page1/detailAを直接指定して遷移してきた場合は、
`navigate(-1)`するとアプリ外に戻るかもしれません。

そういう時は履歴じゃなくて直接指定にしとくと
`navigate('/page1)`

履歴を残したくない場合
`navigate('/page1, { replace: ture })`

直接URLで来た可能性がある場合にアプリ外に飛ばさない方法として、

```jsx
const handleBack = () => {
  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate('/page1');
  }
};
```

としておくと、

履歴ある → 戻る
ない → 一覧へ

となり対策が打てます。

replaceは、ログイン系で使っているの見たことある。ログイン成功後にメイン画面に戻らなくする方法として
`navigate("/dashboard", { replace: true });`
replace を true にしておくと、間違えて戻るをしたときにログイン画面に戻ることはなくて認証でバグることがなくなる。

この画面に戻る意味ある？

ある → 普通に navigate
ない → replace

と覚えておけばいい。

---

### useParams(URLパラメータ)

pathからパラメータを受け取る。それをページのデータとして使うことだできます。よくある使い方としてidとして使い、APIを使ってidが一致するデータを取得する。例として

```json
{
"id": 1,
"name": "ワイヤレスマウス",
"price": 2980,
"category": "PC周辺機器",
"stock": 32,
"rating": 4.5,
"description": "静音クリック対応の軽量マウス",
"image": "/images/1.jpg",
"isFeatured": true
},
```

こんな json が帰ってきて、これを使ってページを作ります。
アクセスする方法は置いといてpathからパラメータを取得する手順を書きます。ネストしたRouteを使って書くと、

```jsx
<Route path='/page3' element={<Page3 />}>
  <Route path=":id" element={<UrlParameter />}>
</Route>
```

この `:id` のところがパラメータになります。
pathを全部書くと、
`/page3/:id`となっていて、仮に

<Link to="/page3/100">商品A</Link>
というリンクを踏むと、この`100`がパラメータとして取得できる文字列になります。実務でいくとこの UrlParameter コンポーネントが商品ページになって、データを切り替えていくつも表示できる設計になっています。

```jsx
import { useParams } from 'react-router-dom';
const products = [
  { id: 100, name: '商品A' },
  { id: 200, name: '商品B' },
];

const UrlParameter = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <h1>商品が見つかりません</h1>;
  }
  return (
    <div>
      <h1>Url Parameterページです</h1>
      <h2>{product.name}のページになります</h2>
      <p>パラメータは {id} です</p>
    </div>
  );
};
```

これでパラメータとして今回でしたら 100 という文字列を受け取ることができます。この文字列を使いAPIにアクセスしてデータを受け取り商品ページを作っていく。こんな使い方ですね。
今回はサンプルとしてデータをコンポーネントの中に作っておいて、idをつかって一致するデータを取得しています。

**_ Page4.jsxにjsonを取得してページを作るサンプル置いときます。 _**

---

### useEffect

useEffectの第二引数に設定した配列にいれたものが変化すると実行される関数を登録します。この登録する関数の中で外側に書いたuseStateなどの変数を使っている時は基本この[]の中にいれなければいけません。

で、このeffectコールバックと呼ばせてもらいますが、これが実行されるタイミングですが、見たほうが早いのでまず書きます。

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('毎回');
  });
  useEffect(() => {
    console.log('初回だけ');
  }, []);
  useEffect(() => {
    console.log('A:', count);
  }, [count]);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};
```

こんな感じの書き方になります。ちなみにこのeffectコールバック関数はレンダリングされた後に実行されます。

consoleの中に書いてある文章見るとわかると思いますが、
第2引数がないときは、毎回レンダリング終わった後に実行。
第2引数が[]の空配列のときは、初回レンダリングの後だけ実行
第2引数が[count]のときは、countの値が変化したときだけ実行。基本setCount()の時にcountが切り替わるタイミングだけど、同じ値が遅れたときは、countが変化してなくてレンダリングの予約が入らずレンダリングされないから実行されません。そして、あくまでそのeffectコールバックは第2引数にいれた変数が変化しないと実行されません。レンダリングなら何でもいいわけじゃないです。

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(count);
    console.log(name);
  }, [count, name]);
};
```

この場合は、どちらかが変化すれば実行されます。

# 流れ

1. setCount(count + 1);
2. 再レンダリング予約
3. コンポーネント実行
4. 描画前に書かれたコードを実行
5. returnでJSXを返す
6. 描画
7. useEffectで登録した関数実行
   です。

4で上から実行しているとき、useEffect()はもう一度実行されてコールバックを登録してますが、そのときに依存配列をみて変化しているかも見ています。このとき変化していたら7で実行されます。実行順は登録した順番なので2回実行されるときは、先に登録したものから実行されます。

[]の配列の初回レンダリング時はよく、

1. データ取得(fetch)
2. addEventListener(resize, scroll, keydown, online/offline)
3. タイマー開始(時計、ポーリング、自動更新、カウントダウン)
4. 初期化処理(外部ライブラリのセットアップ、グラフ描画処理、map初期化、animation初期化)
5. localStorage読み込み
6. url/document操作: document.title = '商品一覧';

表示された後に動くってことに注意してください。

## cleanup

```jsx
const App = () => {
  useEffect(() => {
    return () => {
      console.log('cleanupA');
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('cleanupB');
    };
  });
};
```

この return の後に書いた関数がcleaup関数です。react側に渡してこれを実行してくれます。

実行される条件とタイミングは、

1. そのコンポーネントがアンマウントされた時
2. 次のeffectコールバックが実行される直前

1 のアンマウント去れたときは、遷移してコンポーネントが切り替わり削除されたときです。2 は描画が終わってeffectコールバックが実行される直前にcleaupが実行されます。登録時はcleanupを登録するだけなので実行されません。次回再レンダリング時の依存配列の中の変数みてeffectコールバックが実行されると判断されたとき、コールバックの前に実行されます。

なので第二引数が[]のときのcleanupは、アンマウントされたとき実行されるcleanupになります。実例でいくと、[]のuseEffectの中で、描画で使うデータをfetchで読み込み、cleanupでfetchがキャンセルされるようにするための、abortを実行する。こんなのがあります。

```jsx
useEffect(() => {
  const controller = new AbortController();
  const loadProducts = async () => {
    try {
      const data = await fetchJson(PRODUCTS_PATH, controller.signal);
      const json = await data.json();
    } catch (err) {
      console.error(err);
    };
  };
  loadProducts();
  return () => {
    controller.abort();
  };
}
```

簡単に作りましたが、こんな感じのがあります。

---

### useReducer

useReducer を使う理由は状態が増えて、
・成功
・失敗
・ローディング
・タイムアウト

など「状態遷移」が複雑になってきたら useState より整理しやすい。特に、
・setLoading(true);
・setError(null);
・setData([]);

のように複数の state を同時更新し始めたら useReducer を検討する。

**_ 基本構造 _**
`const [state, dispatch] = useReducer(reducer, initialState);`

state → 現在の状態
dispatch → reducer に命令を送る
reducer → state をどう変更するか決める関数

**_ reducer の形 _**

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
```

**_ action の考え方 _**

action は「何が起きたか」を書く。

例：
FETCH_START
FETCH_SUCCESS
FETCH_ERROR
FETCH_TIMEOUT

**_ reducer の役割 _**
reducer は、「その action が来たら state をどう変えるか」だけを書く。副作用（fetch など）は書かない。

**_ state の例 _**

```jsx
const initialState = {
  status: 'idle',
  data: [],
  error: null,
};
```

**_ dispatch の例 _**

```jsx
dispatch({ type: 'fetch_start' });

dispatch({
  type: 'fetch_success',
  payload: data,
});
```

**_ useReducer が向いているケース _**
状態が複数ある
状態遷移がある
成功/失敗/読み込みを管理したい
state 更新ルールをまとめたい

**_ useState の方が簡単なケース _**
`const [open, setOpen] = useState(false);`
みたいな単純 state。

useReducer は、「状態変更ルールを 1 箇所に集める設計」として考えると理解しやすい。

---

### クエリパラメータ

例えば、

<Link to="/page3/300?name=hogehoge">商品D</Link>

クエリパラメータは、`?name=hogehoge`この部分です。
ここに簡単なデータを渡して遷移先でデータとして扱うことができます。

取得方法は、`useLocation`を使います。

```jsx
import { useLocation } from 'react-router-dom';
const location = useLocation();
const query = new URLSearchParams(location.search);

const name = query.get('name');
```

こうやって、nameの値を取得することができます。

---

### Link props

`useLocation`の使い方はもう一つあります。
Linkのpropsとしてデータを渡したものを取得するという使い方です。
react routerのバージョンで方法が変わりました。
v5までは、

```jsx
<Link to={{ pathname: '/page1/detailC', state: arr }}>DetailC</Link>
```

toの中身に送るものをオブジェクトで書いて明ることができます。その中のstateにデータを渡します。

v6からは、

```jsx
<Link to={'/page1/detailC'} state={arr}>
  DetailC
</Link>
```

```jsx
import { useNavigate, useLocation } from 'react-router-dom';
const Page1DetailC = () => {
  const navigagte = useNavigate();
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Page1 DetailCページです</h1>
      <button onClick={() => navigagte(-1)}>戻る</button>
    </div>
  );
};

```
これはpropsといってもLink専用なだけで、普通のpropsと違うので所得方法は、useLocationでしか受け取ることができません。

ただ、

・リロードで消える
・URL共有できない
・ブラウザ直アクセスに弱い

ので、あまり多様はしません。URL paramsが本命です。

```jsx
navigate('/edit', {
  state: {
    from: 'list',
  },
});
```
navigateでもlocation.stateを扱うことできますが、こんな感じでどこから来たかとか情報を持たせて使うことだあります。こういうのは直打ちだとstateに情報持たせることできないのでセキュリティ対策とかにも使えます。

---

### useHistory

javascriptで遷移する方法です。しかし、こちらはv5までの方法でv6では廃止されました。v6からは`useNavigate`を使います。

history.push('/page1') → navigate('/page1')
history.replace() →	navigate(path, { replace: true })
history.goBack() → navigate(-1)
history.goForward() → navigate(1)

って感じで使います。

---

### 404

ページが存在しない（設定した遷移先がない）場合に、404 Not Found ページを表示します。
通常は、`path="/page1"`のように、特定のパスを指定して画面を表示します。

一方で、`path="*"` の `*` は「どの path にも一致しなかった全てのパス」を意味します。

React Router は、まず設定されている path を順番に確認し、一致する path があればそちらを表示します。
しかし、どの path にも一致しなかった場合は、最後に `path="*"` が一致するため、404 Not Found ページを表示できます。

---

