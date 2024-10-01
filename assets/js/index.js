// menu start
const menuBar = document.querySelector(".menu-bar");
const header = document.querySelector("header");
const closeBtn = document.querySelector(".close-btn");
const menuWrapper = document.querySelector(".header__menu-wrapper");

const handleMenu = () => {
  header.classList.toggle("active");
};

const closeMenuIfClickedOutside = (e) => {
  if (!menuWrapper.contains(e.target) && !menuBar.contains(e.target)) {
    header.classList.remove("active");
  }
};

menuBar.addEventListener("click", handleMenu);
closeBtn.addEventListener("click", handleMenu);
window.addEventListener("click", closeMenuIfClickedOutside);
// menu end

// Swiper start
const swiperHeader = new Swiper(".swiper-header", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Modal start
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal .modal__inner");
const openModal = document.querySelectorAll(".open_modal");
const closeModalBtn = document.querySelector(".close_modal");

openModal.forEach((open_item) => {
  open_item.addEventListener("click", () => {
    modal.classList.remove("modal-deActive");
    modal.classList.add("modal-active");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

modalInner.addEventListener("click", (e) => {
  e.stopPropagation();
});

const handleModalClose = () => {
  modal.classList.add("modal-deActive");
  modal.classList.remove("modal-active");

  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }, 150);
};

modal.addEventListener("click", handleModalClose);
closeModalBtn.addEventListener("click", handleModalClose);
// Modal end

// fixedIconWrapper
const openFixed = document.querySelector(
  ".fixed__open-close-icon-wrapper"
);

const iconWrapper = document.querySelector('.fixed-icon-wrapper')

openFixed.addEventListener("click",() => {
  iconWrapper.classList.toggle("active")
})