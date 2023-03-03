const body = document.querySelector("body");

const modal = document.querySelector(".modal-imgs");
const principalImg = document.querySelector(".prinipal-img");
// console.log(principalImg.firstElementChild);

const subImg = document.querySelectorAll(".sub-imgs img");
console.log(subImg);

function callback(e) {
  console.log(e.target.src);
  principalImg.src = e.target.src;
}

subImg.forEach((imgs) => {
  imgs.addEventListener("click", callback);
});

const addAtivo = () => {
  modal.classList.add("ativo");
};

const removeModal = () => {
  modal.classList.toggle("ativo");
};

principalImg.addEventListener("click", addAtivo);
modal.addEventListener("click", removeModal);
