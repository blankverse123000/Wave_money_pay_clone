let packs = document.querySelector("#packs");
let topUp = document.querySelector("#topUp");
let topUPDisplay = document.querySelector("#topUPDisplay");
let packDisplay = document.querySelector("#packDisplay");

function linkActiveRemove() {
  topUp.classList.remove("linkBorder");
  packs.classList.remove("linkBorder");
  topUp.classList.remove("unacitveLinkBorder");
  packs.classList.remove("unacitveLinkBorder");
}

function display(show, hide) {
  show.classList.remove("d-none");
  hide.classList.add("d-none");
}

function linkAdd(oneLink, twoLink, show, hide) {
  oneLink.addEventListener("click", function () {
    linkActiveRemove();
    oneLink.classList.add("linkBorder");
    twoLink.classList.add("unacitveLinkBorder");
    display(show, hide);
  });
}

linkAdd(topUp, packs, topUPDisplay, packDisplay);
linkAdd(packs, topUp, packDisplay, topUPDisplay);
