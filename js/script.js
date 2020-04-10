
const btnShop = document.getElementById("button-shop");
const modal = document.querySelector('.modal');

const cardList = document.querySelectorAll('.card');

btnShop.addEventListener('click', () => {
  modal.classList.add('is-open');
})

modal.addEventListener('click', ({target}) => {
 if (target.classList.contains('close') || target.classList.contains('modal')) {
   modal.classList.remove('is-open');
 }
})


cardList.forEach((element, idx) => {
  element.classList.add('wow', 'bounceInUp')
  element.dataset.wowDelay = `${idx/10}s`;
});

