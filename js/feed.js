// EX 1

const verMaisBtn = document.querySelector("#more");
const post = document.querySelector(".card");

verMaisBtn.addEventListener("click", () => {
    const postClone = post.cloneNode(true);
    verMaisBtn.insertAdjacentElement('beforebegin', postClone);
});

// EX 2 e 5

const likeImage = document.querySelector(".likes img");
const likeText = document.querySelector(".likes b");

likeImage.addEventListener("click", () => {
    const imageSrc = likeImage.src;
    const textValues = likeText.innerText.split(" ");
    const textNumber = Number(textValues[0]);

    if (imageSrc.indexOf("/img/icons/heart.svg") >= 0) {
        likeImage.src = "/img/red-heart.png";
        likeText.innerText = `${textNumber+1} ${textValues[1]}`;
    }
    else {
        likeImage.src = "/img/icons/heart.svg";
        likeText.innerText = `${textNumber-1} ${textValues[1]}`;
    }
});

// EX 3

const barraPesquisa = document.querySelector(".busca form");

barraPesquisa.onmouseover = function() {
    barraPesquisa.style.boxShadow = "0px 1px 3px black";
};

barraPesquisa.addEventListener("mouseout", function() {
    barraPesquisa.style.boxShadow = "none";
});

// EX 4

verMaisBtn.addEventListener("mouseover", function() {
    verMaisBtn.style.cursor = "pointer";
});