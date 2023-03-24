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
const btnCloseModal = document.querySelector(".btn-close-modal span");

const arrowLeft = document.querySelector(".container-seta-left");
const arrowRight = document.querySelector(".container-seta-right");

const modalMobile = document.querySelector(".modal-mobile");
const modalMenuMobile = document.querySelector(".modal-menu-mobile");
const iconClose = document.querySelector(".icon-close");

// função alterar imagen principal
function callback(e) {
  subImg.forEach((teste) => {
    if (teste.classList.contains("active")) {
      teste.classList.remove("active");
    }
    return teste;
  });
  e.target.classList.add("active");
  principalImg.src = e.target.src;
  imgModalPrincipal.src = e.target.src;
}

subImg.forEach((imgs) => {
  imgs.addEventListener("click", callback);
});

// funçaõ alterar imagen modal
function modalCallback(e) {
  console.log(e.target);
  modalSubImagens.forEach((teste) => {
    if (teste.classList.contains("active")) {
      teste.classList.remove("active");
    }
    return teste;
  });
  e.target.classList.add("active");
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
  if (window.innerWidth > 375) {
    modal.classList.add("ativo");
    imgsModal.classList.add("ativo");
    body.classList.add("overflow-body");
    window.scroll(0, 0);
  }
};

// função remover modal
const removeModal = () => {
  modal.classList.remove("ativo");
  imgsModal.classList.remove("ativo");

  body.classList.remove("overflow-body");
};

let carrossel = modalSubImagens.length;
// função carrossel
const previewImg = () => {
  if (carrossel > 0) {
    carrossel--;
    modalImgPrincipal.src = modalSubImagens[carrossel].currentSrc;
  }
};

const nextImg = () => {
  if (carrossel < modalSubImagens.length) {
    carrossel++;
    modalImgPrincipal.src = modalSubImagens[carrossel].currentSrc;
  }
};

const openModalMobile = () => {
  modalMobile.classList.add("open-modal-mobile");
};

const closeModalMobile = () => {
  modalMobile.classList.remove("open-modal-mobile");
};

arrowLeft.addEventListener("click", previewImg);
arrowRight.addEventListener("click", nextImg);

principalImg.addEventListener("click", addAtivo);
modal.addEventListener("click", removeModal);
btnCloseModal.addEventListener("click", removeModal);

modalMenuMobile.addEventListener("click", openModalMobile);
iconClose.addEventListener("click", closeModalMobile);
