const btn = document.querySelector('#menu-btn');
const navList = document.querySelector('#menu');
btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  navList.classList.toggle('hid')

})