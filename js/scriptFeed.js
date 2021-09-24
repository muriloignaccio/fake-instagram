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

const likeAPost = (like) => {
  const likes = like.nextElementSibling.querySelector("#qtdLikes");
  if (!like.classList.toggle("like")) {
    likes.innerHTML = Number(likes.innerHTML) - 1;
  }
  if (!like.classList.toggle("not-like")) {
    likes.innerHTML = Number(likes.innerHTML) + 1;
  }
};

const fetchPosts = () => {
  const post = document.querySelector("div.card");
  const postClone = post.cloneNode(true);
  verMaisBtn.insertAdjacentElement("beforebegin", postClone);
};

// Scroll infinito
window.addEventListener("scroll", (e) => {
  const { innerHeight, scrollY } = window;
  const {
    body: { offsetHeight },
  } = document;
  if (innerHeight + scrollY >= offsetHeight) {
    fetchPosts();
  }
});

const originalBody = document.body.cloneNode(true)
window.addEventListener("mousemove", (e) => {
  const { screenY, clientY } = e;
  if (clientY < 100) {
    document.body.innerHTML = `<div class="d-flex justify-content-center align-content-center
    "><h1>JÁ VAI EMBORA NÉ?</h1></div>`
  } else if (clientY > 150) {
    document.body.innerHTML = originalBody.outerHTML
  }
});
