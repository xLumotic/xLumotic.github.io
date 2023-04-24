const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');

    tabContents.forEach((content) => {
      content.classList.remove('active');
      if (content.dataset.tab === index.toString()) {
        content.classList.add('active');
      }
    });
  });
});
