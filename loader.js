window.addEventListener("load", main, false);

function main(e) {
  const jsInitCheckTimer = setInterval(jsLoaded, 0);
  function jsLoaded() {
    if (document.querySelector("body") != null) {
      clearInterval(jsInitCheckTimer);
      //要素を取得する処理
      const exid = chrome.runtime.id;
      const elid = exid + "-script";
      if (document.getElementById(elid)) return;
      const scr = document.createElement("script");
      scr.id = elid;
      scr.src = chrome.runtime.getURL("content-script/index.js");
      scr.type = "module";
      document.head.append(scr);
    }
  }
}
