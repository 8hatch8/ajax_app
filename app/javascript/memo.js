// 投稿されたとき追加するHTML
const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>
  `;
  return html;
};

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

    XHR.onload = () => {
      // 通信失敗
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`)
        return null;
      };
      // 通信成功
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener("load", post);