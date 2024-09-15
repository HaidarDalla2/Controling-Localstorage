//Main Vars
let inp = document.querySelector("input");
let butns = document.querySelectorAll(".butns span");
let allResolts = document.querySelector(".allResolts");
//Focus Function
function inpFocus() {
  inp.focus();
}
window.onload = () => {
  inpFocus();
};
//CHeck
butns.forEach((e) => {
  e.addEventListener("click", (a) => {
    if (a.target.className === "search") {
      search();
      inpFocus();
    } else if (a.target.className === "add") {
      add();
      inpFocus();
    } else if (a.target.className === "dlete") {
      dlete();
      inpFocus();
    } else if (a.target.className === "dleteAll") {
      dleteAll();
      inpFocus();
    } else if (a.target.className === "showAll") {
      showAll();
      inpFocus();
    }
  });
});

function search() {
  //input value check
  if (inp.value === "") {
    allResolts.innerHTML = `<span class="nothing">Input Can Not Be Empty</span>`;
  } else {
    if (window.localStorage.getItem(`${inp.value}`)) {
      allResolts.innerHTML = `<span>The Resolte Is Exest :<span> ${inp.value}</span></span>`;
      inp.value = "";
    } else {
      allResolts.innerHTML = `<span>The Resolte Is Not Found :<span> ${inp.value}</span>   Not Found</span>`;
    }
    inp.value = "";
  }
}
function add() {
  if (inp.value === "") {
    allResolts.innerHTML = `<span class="nothing">Input Can Not Be Empty</span>`;
  } else {
    let date = new Date();
    console.log(
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
    window.localStorage.setItem(inp.value, "test");
    allResolts.innerHTML = `<span>The Resolte Is Added:<span> ${inp.value}</span></span>`;
    inp.value = "";
  }
}
function dlete() {
  if (inp.value === "") {
    allResolts.innerHTML = `<span class="nothing">Input Can Not Be Empty</span>`;
  } else {
    if (window.localStorage.getItem(`${inp.value}`)) {
      allResolts.innerHTML = `<span>The Resolte Is Dlated :<span> ${inp.value}</span></span>`;
      window.localStorage.removeItem(`${inp.value}`);
      inp.value = "";
    } else {
      allResolts.innerHTML = `<span class="nothing">Ther Are Nothing In LocalStorage Named ${inp.value}</span>`;
    }
  }
}
function dleteAll() {
  allResolts.innerHTML = `<span class="nothing">Ther Are Nothing</span>`;
  window.localStorage.clear();
}
function showAll() {
  let numberOfItems = window.localStorage.length;
  if (numberOfItems === 0) {
    allResolts.innerHTML = `<span class="nothing">Ther Are Nothoing In LocalStorage</span>`;
  } else {
    allResolts.innerHTML = "";
    for (let i = 0; i < numberOfItems; i++) {
      let span = document.createElement("span");
      let text = document.createTextNode(`${window.localStorage.key(i)}`);
      span.appendChild(text);
      allResolts.appendChild(span);
    }
  }
}
