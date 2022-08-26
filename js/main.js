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
  menu = document.querySelector(".header__center"),
  open = document.querySelector(".burger-open"),
  overlay = document.querySelector(".overlay"),
  body = document.body;
  menu.addEventListener('click', (evt) => { evt.stopPropagation(); });
  let close = () =>{ menu.classList.remove('header__center_active'), overlay.classList.remove('overlay_active'), body.classList.remove('stop-scroll')};
  open.addEventListener('click', () => {
    menu.classList.toggle('header__center_active');
    overlay.classList.toggle('overlay_active');
    body.classList.toggle('stop-scroll');
  });
  overlay.addEventListener('click', () => {
    close();
  })
};
burger();
if (window.innerWidth > 1000){
  infoTabs();
}
if (window.innerWidth < 1000){
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
