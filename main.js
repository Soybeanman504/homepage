// ・クエリを読み込んでURLを治す(リダイレクト用)
// ・そのクエリに応じてiframeをいじる
// ・aタグが有効になるたびにhrefを読み込んで適切なURLにする
// ・他は特になし
var queries = getUrlQueries();
var path = queries.path;

window.onload = function(){
  mainframeChange(path);
}

function onlinkClick(path) {
  mainframeChange(path);
}

function mainframeChange(path) {
  history.replaceState('','',path);

  var iframe = document.getElementById('mainframe');
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
  