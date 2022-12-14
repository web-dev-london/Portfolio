// const openBtn = document.querySelector('.nav__toggler');
// const navMenu = document.querySelector('.nav__list');

// openBtn.addEventListener('click', function () {
//   openBtn.classList.toggle('active');
//   navMenu.classList.toggle('active');
// });

const collapsibles =
  document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  }),
);
