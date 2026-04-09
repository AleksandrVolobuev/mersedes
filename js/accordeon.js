const container = document.querySelector('.feature');
const lists = document.querySelectorAll('.feature-sub');

container.addEventListener('click', (e) => {
  const btn = e.target.closest('.feature__link');

  if (!btn) return;

  const btns = container.querySelectorAll('.feature__link');

  btns.forEach(b => b.classList.remove('feature__link_active'));
  lists.forEach(l => l.classList.add('hidden'));

  btn.classList.add('feature__link_active');

  const index = [...btns].indexOf(btn);

  lists[index].classList.remove('hidden');
});
