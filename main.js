// ・クエリを読み込んでURLを治す(リダイレクト用)
// ・そのクエリに応じてiframeをいじる
// ・aタグが有効になるたびにhrefを読み込んで適切なURLにする
// ・他は特になし

window.onload = function(){
  // リダイレクト後
  var queries = getUrlQueries();
  var path = queries.path;
  
  if (path) {
    iframeChange('mainframe', path);
  } else {
    iframeChange('mainframe', '/homepage/home/');
  }

  // iframeの変更に応じて色々変える
  var iframe = document.getElementById('mainframe');
  var value = iframe.src;

  Object.defineProperty(iframe, 'src', {
    get: () => value,
    set: newValue => {
      const oldValue = value;
      value = newValue;
      console.log(value, oldValue, newValue);
      iframeChange('mainframe', value.slice(0, value.lastIndexOf('/') + 1));
    },
    configurable: true
  });

  // リンク踏んだ時の対応
  var clickEventType = ((window.ontouchstart!==null) ? 'click':'touchend');
  var links = document.getElementsByClassName('link');

  for(let n = 0; n < links.length; n++){
    let link = links[n];
    link.addEventListener(clickEventType, function(){
      iframeChange(link.dataset.target, link.dataset.path);
    });
  }
}

function iframeChange(target, path) {
  history.replaceState('','',path);

  var iframe = document.getElementById(target);
  iframe.src = path + 'main.html';

  return iframe;
}

function getUrlQueries() {
  var queryStr = window.location.search.slice(1);  // 文頭?を除外
  queries = {};
  
  // クエリがない場合は空のオブジェクトを返す
  if (!queryStr) {
    return queries;
  }

  // クエリ文字列を & で分割して処理
  queryStr.split('&').forEach(function(queryStr) {
    // = で分割してkey,valueをオブジェクトに格納
    var queryArr = queryStr.split('=');
    queries[queryArr[0]] = queryArr[1];
  });
  
  return queries;
}