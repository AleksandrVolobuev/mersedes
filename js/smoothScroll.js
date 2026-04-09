const linksHead = document.querySelectorAll('.menu-list__link');
const mainSckroll = document.querySelector('.main__scroll');
const newArrey = [...linksHead, mainSckroll];

newArrey.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});