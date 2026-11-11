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
    description: 'A full-stack website and database architecture supporting workshop operations, gaming gear sales, inventory monitoring, financial transactions, and employee payroll in real time.',
    role: 'Full-stack developer',
    focus: 'Database / operations',
    year: 'Aug–Sep 2026',
    quote: 'A useful system turns a pile of daily updates into one clear next move.',
    images: [
      {
        src: 'Gambar/Screenshot 2026-07-31 215621.png',
        caption: '01 / Dashboard Owner — Ringkasan bulanan, arus keuangan, persediaan & rekap otomatis'
      },
      {
        src: 'Gambar/Screenshot 2026-08-01 172221.png',
        caption: '02 / Live Operational Overview & Owner Control Center'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215536.png  ',
        caption: '03 / Owner Login — Sistem autentikasi akses pemilik via tautan email'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215536.png',
        caption: '04 / Menu Barang — Tambah stok barang & pemantauan nilai persediaan'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215719.png',
        caption: '05 / Menu Keuangan — Pencatatan pemasukan, pengeluaran & riwayat transaksi'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215747.png',
        caption: '06 / Menu Penggajian — Manajemen karyawan, pembayaran gaji & riwayat penggajian'
      }
    ]
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

const certificateDetails = {
  cert1: {
    kicker: 'Certificate / 01',
    title: 'Front-End Web Development',
    description: 'Sertifikasi kompetensi pengembangan antarmuka web modern yang mencakup pembuatan layout responsif, arsitektur CSS, serta interaktivitas JavaScript.',
    role: 'Dicoding / RevoU',
    focus: 'Front-End Architecture',
    year: 'Oct 2025',
    quote: 'Clean interfaces bridge complex business logic with effortless user journeys.'
  },
  cert2: {
    kicker: 'Certificate / 02',
    title: 'SQL & Relational Database Design',
    description: 'Pelatihan intensif perancangan basis data relasional, pembuatan skema stok keluar-masuk, serta optimasi query untuk aplikasi skala menengah.',
    role: 'Hacktiv8 / Coursera',
    focus: 'Database / SQL',
    year: 'Sep 2025',
    quote: 'Reliable operations start with a well-structured schema.'
  },
  cert3: {
    kicker: 'Certificate / 03',
    title: 'Full-Stack JavaScript & Web Systems',
    description: 'Program penguasaan pengembangan aplikasi web menyeluruh mulai dari manajemen state, integrasi sistem pembayaran, hingga deployment.',
    role: 'RevoU Masterclass',
    focus: 'Full-Stack Web',
    year: 'Aug 2025',
    quote: 'Building end-to-end systems that solve real daily operational bottlenecks.'
  }
};

const body = document.body;
const navLinks = document.querySelector('#nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('.theme-toggle');
const modal = document.querySelector('#project-modal');
const modalCard = modal?.querySelector('.modal-card');
const modalGallery = document.querySelector('#modal-gallery');
const modalActiveImg = document.querySelector('#modal-active-img');
const modalImgCaption = document.querySelector('#modal-img-caption');
const modalGalleryThumbs = document.querySelector('#modal-gallery-thumbs');
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

document.querySelectorAll('.cert-filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.certFilter;
    document.querySelectorAll('.cert-filter-button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.cert-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.certCategory === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});

function renderModalGallery(images) {
  if (!modalGallery || !modalActiveImg || !modalImgCaption || !modalGalleryThumbs) return;

  if (!images || images.length === 0) {
    modalGallery.hidden = true;
    modalCard?.classList.remove('has-gallery');
    modalGalleryThumbs.innerHTML = '';
    return;
  }

  modalGallery.hidden = false;
  modalCard?.classList.add('has-gallery');
  modalActiveImg.src = images[0].src;
  modalActiveImg.alt = images[0].caption;
  modalImgCaption.textContent = images[0].caption;

  modalGalleryThumbs.innerHTML = '';
  images.forEach((imgData, index) => {
    const thumbBtn = document.createElement('button');
    thumbBtn.type = 'button';
    thumbBtn.className = `modal-thumb-btn${index === 0 ? ' is-active' : ''}`;
    thumbBtn.innerHTML = `<img src="${imgData.src}" alt="${imgData.caption}" />`;
    thumbBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      modalActiveImg.src = imgData.src;
      modalActiveImg.alt = imgData.caption;
      modalImgCaption.textContent = imgData.caption;
      modalGalleryThumbs.querySelectorAll('.modal-thumb-btn').forEach((btn) => btn.classList.remove('is-active'));
      thumbBtn.classList.add('is-active');
    });
    modalGalleryThumbs.appendChild(thumbBtn);
  });
}

function populateAndOpenModal(item) {
  if (!item) return;
  document.querySelector('#modal-kicker').textContent = item.kicker;
  document.querySelector('#modal-title').textContent = item.title;
  document.querySelector('#modal-description').textContent = item.description;
  document.querySelector('#modal-role').textContent = item.role;
  document.querySelector('#modal-focus').textContent = item.focus;
  document.querySelector('#modal-year').textContent = item.year;
  document.querySelector('#modal-quote').textContent = item.quote;

  renderModalGallery(item.images);

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

document.querySelectorAll('[data-open-project]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    populateAndOpenModal(projectDetails[element.dataset.openProject]);
  });
});

document.querySelectorAll('[data-open-cert]').forEach((button) => {
  button.addEventListener('click', () => {
    populateAndOpenModal(certificateDetails[button.dataset.openCert]);
  });
});

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