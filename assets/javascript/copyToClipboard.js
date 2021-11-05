const codeSnippets = document.querySelectorAll("div.highlight");
console.log(`%c ${codeSnippets.length} code snippet(s) found.`, styles["info"]);

const languagesToCopy = new Set();
languagesToCopy.add("language-javascript");
languagesToCopy.add("language-css");
languagesToCopy.add("language-html");
//languagesToCopy.add("language-http");

const copyText = "Copy me";
const copiedText = "&nbsp;Copied";

codeSnippets.forEach((codeSnippet) => {
  let allowCopy = false;
  codeSnippet.parentElement.classList.forEach((className) => {
    if (languagesToCopy.has(className)) {
      allowCopy = true;
    }
  });

  if (!allowCopy) return;

  const copyButton = document.createElement("button");
  copyButton.classList.add("copy-button");
  copyButton.innerHTML = copyText;
  copyButton.addEventListener("click", () => {
    sourceCode = codeSnippet.querySelector("td.rouge-code").innerText;
    setClipboard(sourceCode);
    copyButton.innerHTML = copiedText; //monospace font, same size as initial text
    setTimeout(() => {
      copyButton.innerHTML = copyText;
    }, 2000);
  });
  codeSnippet.insertBefore(copyButton, codeSnippet.firstChild);

  //the copy button is 25px tall, so we need to adjust the margin-top of div.highlight
  codeSnippet.style.marginTop = "25px";
});

function setClipboard(text) {
  navigator.clipboard.writeText(text);
}
