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
      tabRem();
      tabContRem();
      setTimeout(() => {
        btn.classList.add('faq__question_active');
        this.nextElementSibling.classList.add('faq__answer_active');
      }, 50);

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
infoTabs();
faqQuestion();
faqTabs();
