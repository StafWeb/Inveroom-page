gsap.registerPlugin(ScrollTrigger);

function infoTabs() {
  let infoTab = document.querySelectorAll(".tab");
  let infoContent = document.querySelectorAll(".tab-content");
  infoTab.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabRem();
      tabContRem();
      btn.classList.add('tab_active');
      this.nextElementSibling.classList.add('tab-content_active');
    })
  });
  let tabContRem = () => { infoContent.forEach(el => { el.classList.remove('tab-content_active') }) };
  let tabRem = () => { infoTab.forEach(el => { el.classList.remove('tab_active') }) };
};
function faqQuestion() {
  let tab = document.querySelectorAll(".faq__question");
  let content = document.querySelectorAll(".faq__answer");
  tab.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // tabRem();
      // tabContRem();
      btn.classList.toggle('faq__question_active');
      this.nextElementSibling.classList.toggle('faq__answer_active');
      // setTimeout(() => {

      // }, 50);

    })
  });
  let tabContRem = () => { content.forEach(el => { el.classList.remove('faq__answer_active') }) };
  let tabRem = () => { tab.forEach(el => { el.classList.remove('faq__question_active') }) };
};
function faqTabs() {
  const tabs = document.querySelector('.faq');
  const tabsBtn = document.querySelectorAll('.faq__tab-btn');
  const tabsContent = document.querySelectorAll('.faq__wrapper');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('faq__tab-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => { el.classList.remove('faq__tab-btn_active') });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('faq__tab-btn_active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => { el.classList.remove('faq__wrapper_active') });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('faq__wrapper_active');
  };

};
function callbackFunc() {
  let y = window.pageYOffset;
  let h = document.querySelector(".header");
  console.log(y)
  if (y > 20) {
    h.classList.add("header_scroll");
  } else {
    h.classList.remove("header_scroll");
  }
};
function modal() {
  let
    modalOpen = document.querySelectorAll(".modal-open"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector(".modal__btn"),
    faqManager = document.querySelector(".faq__manager"),
    modalLink = document.querySelectorAll(".modal__link"),
    body = document.querySelector("main");
  let modalRemove = () => { modal.classList.remove('modal_active'); };
  modal.addEventListener('click', (evt) => { evt.stopPropagation(); });
  faqManager.addEventListener('click', (evt) => { evt.stopPropagation(); });
  body.addEventListener('click', () => {
    if (modal.classList.contains('modal_active')) {
      modalRemove();
    }
  });
  modalOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('modal_active');
    })
  });
  modalClose.addEventListener('click', () => {
    modalRemove();
  });
  document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if (keyCode === 'Escape') {
      modalRemove();
    }
  });
  modalLink.forEach(el => {
    el.addEventListener('click', () => {
      modalRemove();
    });
  });
};
function burger() {
  let
    menu = document.querySelector(".burger-menu"),
    open = document.querySelector(".burger-open"),
    burgerClose = document.querySelectorAll(".burger-close");
  body = document.body;
  menu.addEventListener('click', (evt) => { evt.stopPropagation(); });
  let close = () => { menu.classList.remove('burger-menu_active'), body.classList.remove('stop-scroll') };
  open.addEventListener('click', () => {
    menu.classList.toggle('burger-menu_active');
    body.classList.toggle('stop-scroll');
  });
  burgerClose.forEach(el => {
    el.addEventListener('click', () => {
      close();
    })
  })
};
burger();
document.querySelectorAll(".burger-menu__btn").forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('burger-menu__btn_active');
    this.nextElementSibling.classList.toggle('burger-menu__list_active');
  })
});
if (window.innerWidth > 1000) {
  infoTabs();
  let headAnim = gsap.timeline({ delay: 0.5, ease: "power1.out", duration: 0.6 });
  headAnim.from(".header__logo", { opacity: 0, x: -20 })
    .from(".burger-open", { opacity: 0, x: -20 }, "-=0.4")
    .from(".header__center", { opacity: 0, scale: 0.7 }, "-=0.4")
    .from(".header__end", { opacity: 0, x: 30 }, "-=0.5")
    .from(".offer__title", { opacity: 0, y: 30 }, "-=0.3")
    .from(".offer__descr", { opacity: 0, y: 30 }, "-=0.3")
    .from(".offer__link-wrapper", { opacity: 0, scale: 0.6 }, "-=0.3")
    .from(".offer__graph", { opacity: 0, scale: 0.6 }, "-=0.4")
    .from(".subscribe__start", { opacity: 0, x: -60 }, "-=0.3")
    .from(".subscribe__slider", { opacity: 0, x: 60 }, "-=0.4");
  let result = gsap.timeline({
    ease: "power1.out",
    duration: 0.7,
    scrollTrigger: {
      trigger: ".result",
      start: "top bottom",
    }
  });
  result.from(".result__col", { opacity: 0, y: 20 });
  let info = gsap.timeline({
    ease: "power1.out",
    duration: 0.7,
    scrollTrigger: {
      trigger: ".info",
      start: "top bottom",
    }
  });
  info.from(".info__container", { opacity: 0, y: 30 });
  let faq = gsap.timeline({
    ease: "power1.out",
    duration: 0.7,
    scrollTrigger: {
      trigger: ".faq",
      start: "top bottom",
    }
  });
  faq.from(".faq__container", { opacity: 0, y: 30 });
}
if (window.innerWidth < 1000) {
  let parentEl = document.querySelector(".parElem");
  let newEl = document.querySelector(".newElem");
  let refEl = document.querySelector(".refElem")

  parentEl.insertBefore(newEl, refEl);
}
faqQuestion();
faqTabs();
window.addEventListener('scroll', () => {
  callbackFunc();
});
modal();
