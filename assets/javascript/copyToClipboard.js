const codeSnippets = document.querySelectorAll("div.highlight");
console.log(`%c ${codeSnippets.length} code snippet(s) found.`, styles["info"]);

codeSnippets.forEach((codeSnippet) => {
  const copyButton = document.createElement("button");
  copyButton.classList.add("copy-button");
  copyButton.innerHTML = "Copy";
  copyButton.addEventListener("click", () => {
    sourceCode = codeSnippet.querySelector("td.rouge-code").innerText;
    setClipboard(sourceCode);
    copyButton.innerHTML = "Copied!";
    setTimeout(() => {
      copyButton.innerHTML = "Copy";
    }, 2000);
  });
  codeSnippet.insertBefore(copyButton, codeSnippet.firstChild);
});

function setClipboard(text) {
  navigator.clipboard.writeText(text);
}
