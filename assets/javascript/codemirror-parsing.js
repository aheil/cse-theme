/* retrieve all textarea elements with class 'javascript-code' */

const jsTextAreas = document.getElementsByClassName("javascript-code");

for (let jsTA of jsTextAreas) {
  jsTA.textContent = jsTA.textContent.trim(); //trim last newline
  var editor = CodeMirror.fromTextArea(jsTA, {
    mode: "javascript",
    lineNumbers: true,
    readOnly: true,
  });
  editor.setSize("100%", "100%");
  editor.save();
}

/* retrieve all textarea elements with class 'html-code' */

const htmlTextAreas = document.getElementsByClassName("html-code");

for (let htmlTA of htmlTextAreas) {
  htmlTA.textContent = htmlTA.textContent.trim(); //trim last newline
  var editor = CodeMirror.fromTextArea(htmlTA, {
    mode: "html",
    lineNumbers: true,
    readOnly: true,
  });
  editor.setSize("100%", "100%");
  editor.save();
}

/* retrieval all textarea elements with class 'css-code' */

const cssTextAreas = document.getElementsByClassName("css-code");

for (let cssTA of cssTextAreas) {
  cssTA.textContent = cssTA.textContent.trim(); //trim last newline
  var editor = CodeMirror.fromTextArea(cssTA, {
    mode: "css",
    lineNumbers: true,
    readOnly: true,
  });
  editor.setSize("100%", "100%");
  editor.save();
}
