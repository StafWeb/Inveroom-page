let infoTab = document.querySelectorAll(".tab");
let infoContent = document.querySelectorAll(".tab-content");
infoTab.forEach(function (btn){
  btn.addEventListener('click', function (){
    tabRem();
    tabContRem();
    btn.classList.add('tab_active');
    this.nextElementSibling.classList.add('tab-content_active');
  })
});
let tabContRem = () => {infoContent.forEach(el => {el.classList.remove('tab-content_active')})};
let tabRem = () => {infoTab.forEach(el => {el.classList.remove('tab_active')})};
