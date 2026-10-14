const projectDetails = {
  getuk: {
    kicker: 'Project notes / 01',
    title: 'Getuk Gondok',
    description: 'A responsive souvenir e-commerce experience built for a local business in Magelang, connecting an easy-to-navigate interface with product management, stock tracking, financial recap, and digital payment flow.',
    role: 'Front-end developer',
    focus: 'E-commerce / systems',
    year: 'Jun–Jul 2026',
    quote: 'The best interface is the one that lets the owner focus on the business, not the dashboard.'
  },
  bengkel: {
    kicker: 'Project notes / 02',
    title: 'Bengkel Gamer',
    description: 'A full-stack website and database architecture supporting workshop operations, gaming gear sales, inventory monitoring, and incoming/outgoing stock in real time.',
    role: 'Full-stack developer',
    focus: 'Database / operations',
    year: 'Aug–Sep 2026',
    quote: 'A useful system turns a pile of daily updates into one clear next move.'
  },
  risol: {
    kicker: 'Project notes / 03',
    title: 'Risol Primadona',
    description: 'A sales website for a snack business, designed to improve conversion and visual appeal while making inventory tracking, daily financial recaps, and payment flow easier to manage.',
    role: 'Front-end developer',
    focus: 'Sales / payment flow',
    year: 'May–Jun 2025',
    quote: 'Good product thinking starts where a customer question meets an operational reality.'
  },
  coffee: {
    kicker: 'Experience notes / 04',
    title: 'Garasi Kopi',
    description: 'Hands-on hospitality experience across Coffeeshop AADK and Garasi Kopi, covering customer service, bar operations, raw-material inventory, espresso calibration, cashier work, and daily sales support.',
    role: 'Barista',
    focus: 'Service / operations',
    year: 'Early 2021–late 2022',
    quote: 'Careful service is a system too — it just happens one person at a time.'
  }
};

const body = document.body;
const navLinks = document.querySelector('#nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('.theme-toggle');
const modal = document.querySelector('#project-modal');
const toast = document.querySelector('.toast');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

themeToggle?.addEventListener('click', () => {
  const light = body.classList.toggle('light-theme');
  themeToggle.setAttribute('aria-pressed', String(light));
  localStorage.setItem('davin-theme', light ? 'light' : 'dark');
});

if (localStorage.getItem('davin-theme') === 'light') {
  body.classList.add('light-theme');
  themeToggle?.setAttribute('aria-pressed', 'true');
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.project-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});

function openProject(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;
  document.querySelector('#modal-kicker').textContent = project.kicker;
  document.querySelector('#modal-title').textContent = project.title;
  document.querySelector('#modal-description').textContent = project.description;
  document.querySelector('#modal-role').textContent = project.role;
  document.querySelector('#modal-focus').textContent = project.focus;
  document.querySelector('#modal-year').textContent = project.year;
  document.querySelector('#modal-quote').textContent = project.quote;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.querySelector('.modal-close')?.focus();
  body.style.overflow = 'hidden';
}

function closeProject() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  body.style.overflow = '';
}

document.querySelectorAll('[data-open-project]').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.openProject)));
document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeProject));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeProject();
});

document.querySelector('.copy-email')?.addEventListener('click', async (event) => {
  const email = event.currentTarget.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = `${email} copied to clipboard.`;
    toast.classList.add('is-visible');
    window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => activeSectionObserver.observe(section));
