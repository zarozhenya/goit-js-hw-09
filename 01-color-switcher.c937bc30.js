!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},e=null,n=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};t.startBtn.addEventListener("click",(function(r){r.currentTarget.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled"),e=setInterval(n,1e3)})),t.stopBtn.addEventListener("click",(function(n){n.currentTarget.setAttribute("disabled",""),t.startBtn.removeAttribute("disabled"),clearInterval(e)})),t.stopBtn.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.c937bc30.js.map
