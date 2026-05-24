document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  setActiveNavLink();
  applyI18n();
  initAnimToggle();
  initScrollFadeIn();
});

function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setActiveNavLink() {
  const path = location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    const isActive =
      (href === 'index.html' || href === '../index.html') && (path.endsWith('index.html') || path.endsWith('/')) ||
      (href === 'phases.html' || href === '../phases.html') && path.includes('phases');
    a.classList.toggle('active', isActive);
  });
}

function initAnimToggle() {
  const saved = localStorage.getItem('bm-anim') || 'expressive';
  document.body.dataset.anim = saved;
  document.querySelectorAll('.anim-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.anim === saved);
    btn.addEventListener('click', () => {
      const mode = btn.dataset.anim;
      document.body.dataset.anim = mode;
      localStorage.setItem('bm-anim', mode);
      document.querySelectorAll('.anim-btn').forEach(b => b.classList.toggle('active', b.dataset.anim === mode));
    });
  });
}

function initScrollFadeIn() {
  console.log('[fadeIn] initScrollFadeIn 開始, innerHeight=', window.innerHeight);
  const staggerSelectors = ['.card.feature-card', '.card.phase-card', '.mini-phase-card', '.stat-card'];
  const plainSelectors = ['.section-label', '.section-title', '.section-desc', '.page-title', '.phase-detail-header'];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        console.log('[fadeIn] visible:', e.target.className, e.target.textContent.slice(0,20));
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        e.target.style.transitionDelay = '0s';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  const dur = document.body.dataset.anim === 'subtle' ? '0.4s' : '0.7s';
  const dist = document.body.dataset.anim === 'subtle' ? '10px' : '24px';

  let registered = 0;
  function register(el, delay) {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      console.log('[fadeIn] skip (in viewport, top=' + top + '):', el.className);
      return;
    }
    el.style.opacity = '0';
    el.style.transform = 'translateY(' + dist + ')';
    el.style.transition = 'opacity ' + dur + ' ease, transform ' + dur + ' ease';
    if (delay != null) el.style.transitionDelay = delay + 's';
    observer.observe(el);
    registered++;
  }

  staggerSelectors.forEach(sel => {
    const groups = new Map();
    document.querySelectorAll(sel).forEach(el => {
      const p = el.parentElement;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p).push(el);
    });
    groups.forEach(els => els.forEach((el, i) => register(el, Math.min(i, 7) * 0.1)));
  });

  plainSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => register(el, null));
  });

  document.querySelectorAll('.card').forEach(el => {
    if (!el.classList.contains('fade-in')) register(el, null);
  });

  console.log('[fadeIn] 登録完了, registered=', registered);
}
