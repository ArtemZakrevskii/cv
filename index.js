const returnBtn = document.getElementById('return');
const worksContainer = document.querySelector('.works-list')
const works = worksContainer.getElementsByTagName('li');
const otherWorksContainer = document.querySelector('.other-works-list')
const otherWorks = otherWorksContainer.getElementsByTagName('li');

function scroll() {
  if (window.pageYOffset > 60) {
    returnBtn.style.opacity = '0.75';
    returnBtn.style.pointerEvents = 'auto';
  } else { 
    returnBtn.style.opacity = '0';
    returnBtn.style.pointerEvents = 'none';
  }
}

returnBtn.onclick = function() {
  window.scrollTo(0,0)
}      

function appearItems() {
  for (item of works) {
    const slideInAt = window.scrollY + window.innerHeight - item.clientHeight / 4;
    const itemTop = item.getBoundingClientRect().top + window.scrollY;
    const itemBottom = itemTop + item.clientHeight;
    const isHalfShown = slideInAt > itemTop;
    const isNotScrolledPast = window.scrollY < itemBottom;
    if (isHalfShown && isNotScrolledPast) {
      item.classList.add('active-item');
    } else {
      item.classList.remove('active-item');
    }
  }
  for (item of otherWorks) {
    const slideInAt = window.scrollY + window.innerHeight - item.clientHeight / 4;
    const itemTop = item.getBoundingClientRect().top + window.scrollY;
    const itemBottom = itemTop + item.clientHeight;
    const isHalfShown = slideInAt > itemTop;
    const isNotScrolledPast = window.scrollY < itemBottom;
    if (isHalfShown && isNotScrolledPast) {
      item.classList.add('active-item');
    } else {
      item.classList.remove('active-item');
    }
  }
}

window.addEventListener('load', appearItems());
window.addEventListener('scroll', ()=> {
  appearItems();
  scroll();
});