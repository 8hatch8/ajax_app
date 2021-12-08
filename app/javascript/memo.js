function post (){
  // 投稿ボタンの要素をsubmitに格納
  const submit = document.getElementById("submit");
  // 投稿ボタンクリック時
  submit.addEventListener("click", (e) => {
    // フォームからの送信を防ぐためクリックイベントを無効化
    e.preventDefault();
    // フォームの要素を取得
    const form = document.getElementById("form");
    // フォームに入力された値を取得
    const formData = new FormData(form);
    // jsでサーバとやりとりするためXMLHttpRequestオブジェクトを生成
    const XHR = new XMLHttpRequest();
    // XHRオブジェクトの初期設定
    XHR.open("POST", "/posts", true);
    // レスポンスはJSONを指定
    XHR.responseType = "json";
    // 送信
    XHR.send(formData);
  });
};

window.addEventListener("load", post);