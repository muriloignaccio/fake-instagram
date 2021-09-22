const btnSeemore = document.querySelector("#more");

const card = document.querySelector(".card");

btnSeemore.addEventListener("click", () => {
  const cardClone = card.cloneNode(true);
  btnSeemore.insertAdjacentElement("beforebegin", cardClone);
});

const formSearch = document.querySelector(".busca form");

formSearch.addEventListener("mouseover", function () {
  formSearch.style.boxShadow = "0px 1px 3px black";
});
formSearch.addEventListener("mouseout", function () {
  formSearch.style.boxShadow = "none";
});

btnSeemore.addEventListener("mouseover", function () {
  btnSeemore.style.cursor = "pointer";
});

const btnLike = document.querySelector(".likes img");
const countBtn = document.querySelector("#count");

btnLike.onclick = function() {
  const srcImg = btnLike.getAttribute("src")
  if(srcImg === "img/icons/heart.svg"){
    btnLike.setAttribute("src", "img/red-heart.png");
    countBtn.textContent = parseInt(countBtn.textContent)+1;
  } 
  else 
  {
    btnLike.setAttribute("src", "img/icons/heart.svg")
    countBtn.textContent = 0;
  }
}


