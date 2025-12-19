document.addEventListener('DOMContentLoaded', () => {
  // 1. ИНИЦИАЛИЗАЦИЯ ИКОНОК
  lucide.createIcons();

  // 2. МОБИЛЬНОЕ МЕНЮ
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav__link');

  const toggleMenu = () => {
      nav.classList.toggle('nav--active');
      burger.classList.toggle('burger--active');
      document.body.style.overflow = nav.classList.contains('nav--active') ? 'hidden' : '';
  };

  burger.addEventListener('click', toggleMenu);

  // Закрытие меню при клике на ссылку
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (nav.classList.contains('nav--active')) toggleMenu();
      });
  });

  // 3. АНИМАЦИЯ HERO (GSAP)
  if (typeof gsap !== 'undefined') {
      gsap.from(".hero__title", {
          duration: 1,
          y: 100,
          opacity: 0,
          ease: "power4.out",
          delay: 0.2
      });

      gsap.from(".hero__subtitle", {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power4.out",
          delay: 0.5
      });

      gsap.from(".program-card", {
          scrollTrigger: ".programs",
          duration: 0.8,
          y: 100,
          opacity: 0,
          stagger: 0.2,
          ease: "back.out(1.7)"
      });
  }

  // 4. ВАЛИДАЦИЯ ТЕЛЕФОНА (Только цифры)
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
          e.target.value = e.target.value.replace(/\D/g, '');
      });
  }

  // 5. МАТЕМАТИЧЕСКАЯ КАПЧА
  const captchaLabel = document.getElementById('captcha-label');
  let captchaResult = 0;

  if (captchaLabel) {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      captchaResult = num1 + num2;
      captchaLabel.innerText = `Сколько будет ${num1} + ${num2}?`;
  }

  // 6. ОТПРАВКА ФОРМЫ (AJAX Имитация)
  const form = document.getElementById('career-form');
  const status = document.getElementById('form-status');

  if (form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          const userCaptcha = document.getElementById('captcha-input').value;

          if (parseInt(userCaptcha) !== captchaResult) {
              status.innerText = "❌ Ошибка капчи!";
              status.style.color = "red";
              return;
          }

          const btn = form.querySelector('button');
          const originalText = btn.innerText;
          btn.innerText = "ОТПРАВКА...";
          btn.disabled = true;

          setTimeout(() => {
              form.innerHTML = `
                  <div class="success-message" style="padding:40px; text-align:center; background: var(--color-accent); border: var(--border-main);">
                      <h3 style="font-size:24px; margin-bottom:10px;">ГОТОВО!</h3>
                      <p>Ваш карьерный апгрейд начинается сейчас. Мы свяжемся с вами в течение 15 минут.</p>
                  </div>
              `;
          }, 1500);
      });
  }

  // 7. COOKIE POPUP
  const cookiePopup = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('accept-cookies');

  if (cookiePopup && !localStorage.getItem('cookies-accepted')) {
      setTimeout(() => {
          cookiePopup.style.display = 'block';
          gsap.from(cookiePopup, { y: 100, opacity: 0, duration: 0.5 });
      }, 3000);
  }

  if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
          localStorage.setItem('cookies-accepted', 'true');
          cookiePopup.style.display = 'none';
      });
  }
});