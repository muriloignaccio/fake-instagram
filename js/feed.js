// EX 1

const verMaisBtn = document.querySelector("#more");
const post = document.querySelector(".card");

verMaisBtn.addEventListener("click", () => {
  const postClone = post.cloneNode(true);
  verMaisBtn.insertAdjacentElement('beforebegin', postClone)


})

// EX 3

const barraPesquisa = document.querySelector('.busca form');

barraPesquisa.onmouseover = function() {
  barraPesquisa.style.boxShadow = "0px 1px 3px black"
};

barraPesquisa.addEventListener('mouseout', function() {
  barraPesquisa.style.boxShadow = "none"
});


// EX 4

verMaisBtn.addEventListener("mouseover", function(){
  verMaisBtn.style.cursor = "pointer";
})
// EX 2 e 5
// const likeImage = document.querySelector(".likes img");
// const likeText = document.querySelector(".likes b");

const likeAPost = (likeImage) => {
  const imageSrc = likeImage.getAttribute("src")
  const likeText = likeImage.nextElementSibling;

  console.log(likeText)
  const textValues = likeText.innerText.split(" ");
  const textNumber = Number(textValues[0]);

  if (imageSrc === "./img/icons/heart.svg") {
      likeImage.src = "./img/red-heart.png";
      likeText.innerText = `${textNumber + 1} ${(textNumber + 1) === 1 ? 'like' : 'likes'}`;
  }
  else {
      likeImage.src = "./img/icons/heart.svg";
      likeText.innerText = `${textNumber-1} ${(textNumber - 1) === 1 ? 'like' : 'likes'}`;
  }
}



// likeImage.addEventListener("click",);

let estaCarregando = false;

function createPost(title, body) {
  return `<div class="card" id="">
  <div class="card-header">
    <div>
      <img class="avatar" src="./img/avatar-example.png">
      <b>${title}</b>
    </div>
    <img src="./img/icons/more-vertical.svg">
  </div>
  <div class="card-img">
    <img src="./img/publication_example.jpg">
  </div>
  <div class="card-body">
    <div class="card-itens">
      <div class="likes">
        <img src="./img/icons/heart.svg" onclick="likeAPost(this)" width="24px" class="like-btn">
        <b>1 like</b>
      </div>
      <b>Postado no dia: 00/00/0000</b>
    </div>
    <div class="card-comments">
      <p><b>Nome comentarista</b> ${body} </p>
    </div>
  </div>
  <form class="form-comments" action="/comentar" method="post">
    <input type="text" hidden name="postId" value="">
    <input type="text" placeholder="Adicione um comentário..." name="description">
    <button type="submit">Comentar</button>
  </form>
</div>`
}

async function fetchPosts() {
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');

  posts.slice(0, 10).forEach(post => {
    const postHtml = createPost(post.title, post.body);
    verMaisBtn.insertAdjacentHTML('beforebegin', postHtml)
  })

}

window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // const postClone = post.cloneNode(true);
    // verMaisBtn.insertAdjacentElement('beforebegin', postClone)

    // estaCarregando = true;

    fetchPosts()
  }
})