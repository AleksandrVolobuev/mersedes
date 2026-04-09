const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElements = document.querySelectorAll('[data-tabs-field]');


for (let btn of tabsHandlerElements) {
  btn.addEventListener('click', () => {
    tabsHandlerElements.forEach(item => item.classList.remove('design-list__item_active'));
    btn.classList.add('design-list__item_active');

    tabsFieldElements.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler ?
        content.classList.remove('hidden') : content.classList.add('hidden')
      );
    });

  });
}