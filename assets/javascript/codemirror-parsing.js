/* retrieve all textarea elements with class 'javascript-code' */

const jsTextAreas = document.getElementsByClassName("javascript-code");

for (let jsTA of jsTextAreas) {
  jsTA.textContent = jsTA.textContent.trim(); //trim last newline
  var editor = CodeMirror.fromTextArea(jsTA, {
    mode: "text/javascript",
    lineNumbers: true,
    readOnly: true,
  });
  editor.setSize("100%", "100%");
  editor.save();
}

/* retrieve all textarea elements with class 'css-code' */

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

/* retrieve all textarea elements with class 'java-code' */

const javaTextAreas = document.getElementsByClassName("java-code");

for (let javaTA of javaTextAreas) {
  javaTA.textContent = javaTA.textContent.trim(); //trim last newline
  var editor = CodeMirror.fromTextArea(javaTA, {
    mode: "text/x-java",
    lineNumbers: true,
    readOnly: true,
  });
  editor.setSize("100%", "100%");
  editor.save();
}

/* retrieve all textarea elements with class 'http-code' */

const httpTextAreas = document.getElementsByClassName("http-code");

for (let httpTA of httpTextAreas) {
  httpTA.textContent = httpTA.textContent.trim(); //trim last newline
  var editor = CodeMirror.fromTextArea(httpTA, {
    mode: "message/http",
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
    mode: "htmlmixed",
    lineNumbers: true,
    readOnly: true,
  });
  editor.setSize("100%", "100%");
  editor.save();
}
