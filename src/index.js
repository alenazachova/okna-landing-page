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

//  const number = document.querySelector("#number");

function getSelectionText() {
  const email = document.querySelector("#email");
  if (window.getSelection) {
    email = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    email = document.selection.createRange().email;
  }
  return email;
}

document.addEventListener("copy", function (e) {
  dataLayer.push({
    event: "textCopied",
    clipboardText: getSelectionText(),
    clipboardLength: getSelectionText().length,
  });
});
