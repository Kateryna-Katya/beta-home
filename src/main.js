document.addEventListener('DOMContentLoaded', () => {
  // Инициализация иконок Lucide
  lucide.createIcons();

  // Мобильное меню (Логика бургера)
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger) {
      burger.addEventListener('click', () => {
          // На следующих этапах добавим стильный выезд меню
          alert('Меню в разработке. Переходим к Hero-секции?');
      });
  }

  // Липкий хедер с изменением тени при скролле
  window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
          header.style.boxShadow = '0px 10px 0px rgba(0,0,0,0.05)';
      } else {
          header.style.boxShadow = 'none';
      }
  });
});