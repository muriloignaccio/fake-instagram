const verMaisBtn = document.querySelector("#more");
verMaisBtn.addEventListener("mouseover", () => {
  verMaisBtn.style.cursor = "pointer";
});
verMaisBtn.addEventListener("click", (e) => {
  const post = document.querySelector("div.card");
  const postClone = post.cloneNode(true);
  console.log(postClone);
  verMaisBtn.insertAdjacentElement("beforebegin", postClone);
});

const notShowLike = document.querySelector(".not-show-like");
const showLike = document.querySelector(".show-like");
const qtdLikes = document.querySelector("#qtdLikes");

showLike.addEventListener("click", (e)=> {
  showLike.classList.toggle("show-like")
  notShowLike.classList.toggle("show-like")
  qtdLikes.innerHTML = Number(qtdLikes.innerHTML) + 1
})
notShowLike.addEventListener("click", (e)=> {
  notShowLike.classList.toggle("show-like")
  showLike.classList.toggle("show-like")
  qtdLikes.innerHTML = Number(qtdLikes.innerHTML) - 1
})