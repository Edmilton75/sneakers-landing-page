const body = document.body;
const modal = document.querySelector(".modal-imgs");
const principalImg = document.querySelector(".prinipal-img");
const imgModalPrincipal = document.querySelector(".modal-img-principal");
const imgsModal = document.querySelector(".container-modal-imgs");
const subImg = document.querySelectorAll(".sub-imgs img");
const modalImgPrincipal = document.querySelector(".modal-img-principal");
const modalSubImagens = document.querySelectorAll(".modal-sub-imgs img");

const btnLess = document.querySelector(".btn-less");
const btnPlus = document.querySelector(".btn-plus");
const contador = document.querySelector(".contador");

// função alterar imagen principal
function callback(e) {
  principalImg.src = e.target.src;
  imgModalPrincipal.src = e.target.src;
}

subImg.forEach((imgs) => {
  imgs.addEventListener("click", callback);
});

// funçaõ alterar imagen modal
function modalCallback(e) {
  modalImgPrincipal.src = e.target.src;
}

modalSubImagens.forEach((imgs) => {
  imgs.addEventListener("click", modalCallback);
});

// função incremento de produto

let amountProduct = 0;

function removeProduct() {
  if (amountProduct !== 0) {
    amountProduct--;
    contador.innerText = amountProduct.toString();
  }
}

function addProduct() {
  amountProduct++;
  contador.innerText = amountProduct.toString();
}

btnLess.addEventListener("click", removeProduct);
btnPlus.addEventListener("click", addProduct);

contador.innerText = amountProduct.toString();

// função adicionar modal e zerar scroll
const addAtivo = () => {
  modal.classList.add("ativo");
  imgsModal.classList.add("ativo");
  body.classList.add("overflow-body");
  window.scroll(0, 0);
};

// fuunção remover modal
const removeModal = () => {
  modal.classList.remove("ativo");
  imgsModal.classList.remove("ativo");

  body.classList.remove("overflow-body");
};

principalImg.addEventListener("click", addAtivo);
modal.addEventListener("click", removeModal);
