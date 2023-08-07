document.addEventListener("DOMContentLoaded", (event) => {
  //the event occurred
  console.log("Amadeus - okna");

  document.querySelector(".intro__mouse").addEventListener("click", (e) => {
    e.preventDefault();
    const href = document.querySelector(".intro__mouse").getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

document.addEventListener("copy", function (e) {
  const copiedEmail = document.querySelector("#email");
  const copiedNumber = document.querySelector("#number");

  if (copiedEmail && window.getSelection) {
    const selectedEmailText = getSelectionText();
    if (selectedEmailText.length > 0) {
      dataLayer.push({
        event: "textCopied",
        copiedElement: "email",
        clipboardText: selectedEmailText,
        clipboardLength: selectedEmailText.length,
      });
    }
  }

  if (copiedNumber && window.getSelection) {
    const selectedNumberText = getSelectionText();
    if (selectedNumberText.length > 0) {
      dataLayer.push({
        event: "textCopied",
        copiedElement: "number",
        clipboardText: selectedNumberText,
        clipboardLength: selectedNumberText.length,
      });
    }
  }
});
