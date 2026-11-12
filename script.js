const projectDetails = {
  getuk: {
    kicker: 'Project notes / 01',
    title: 'Getuk Gondok',
    description: 'A responsive souvenir e-commerce experience built for Getuk Gondok Hj. Sri Rahayu in Magelang, connecting an easy-to-navigate catalog with category filtering, interactive shopping cart, pickup location selection, and direct order flow.',
    role: 'Front-end developer',
    focus: 'E-commerce / UI systems',
    year: 'Jun–Jul 2026',
    quote: 'The best interface is the one that lets the owner focus on the business, not the dashboard.',
    images: [
      {
        src: 'Gambar/2026-05-20.png',
        caption: '01 / Landing Page & Pricelist — Tampilan utama website Getuk Gondok Hj. Sri Rahayu'
      },
      {
        src: 'Gambar/2026-05-20 (5).png',
        caption: '02 / Katalog Produk — Fitur pencarian, filter kategori (Traditional, Premium, Box, Deluxe) & floating bar'
      },
      {
        src: 'Gambar/2026-05-20 (4).png',
        caption: '03 / Tampilan E-Commerce & Katalog Produk Getuk Gondok'
      },
      {
        src: 'Gambar/Capture.PNG',
        caption: '04 / Struktur Navigasi Katalog — Pemetaan alur klik dari header menu menuju katalog produk'
      },
      {
        src: 'getuk-gondok.jpg',
        caption: '05 / Brand Identity — Logo asli Getuk Gondok Hj. Sri Rahayu'
      }
    ]
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
        src: 'Gambar/Screenshot 2026-07-31 215536.png',
        caption: '02 / Owner Login — Sistem autentikasi akses pemilik via tautan email'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215703.png',
        caption: '03 / Menu Barang — Tambah stok barang & pemantauan nilai persediaan'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215719.png',
        caption: '04 / Menu Keuangan — Pencatatan pemasukan, pengeluaran & riwayat transaksi'
      },
      {
        src: 'Gambar/Screenshot 2026-07-31 215747 - Copy (2).png',
        caption: '05 / Menu Penggajian — Manajemen karyawan, pembayaran gaji & riwayat penggajian'
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
    quote: 'Good product thinking starts where a customer question meets an operational reality.',
    images: [
      {
        src: 'risol-primadona.jpeg',
        caption: '01 / Risol Primadona — Brand Identity & Culinary Sales Website'
      }
    ]
  },
  coffee: {
    kicker: 'Experience notes / 04',
    title: 'Garasi Kopi',
    description: 'Hands-on hospitality experience across Coffeeshop AADK and Garasi Kopi, covering customer service, bar operations, raw-material inventory, espresso calibration, cashier work, and daily sales support.',
    role: 'Barista',
    focus: 'Service / operations',
    year: 'Early 2021–late 2022',
    quote: 'Careful service is a system too — it just happens one person at a time.',
    images: [
      {
        src: 'garasi-kopi.jpeg',
        caption: '01 / Garasi Kopi — Barista & Daily Operations'
      },
      {
        src: 'aadk-logo.jpeg',
        caption: '02 / Coffeeshop AADK — Service, Inventory & Cashier Operations'
      }
    ]
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

  const showImage = (imgData) => {
    modalActiveImg.src = encodeURI(imgData.src);
    modalActiveImg.alt = imgData.caption;
    modalImgCaption.textContent = imgData.caption;
  };

  showImage(images[0]);

  modalGalleryThumbs.innerHTML = '';
  images.forEach((imgData, index) => {
    const thumbBtn = document.createElement('button');
    thumbBtn.type = 'button';
    thumbBtn.className = `modal-thumb-btn${index === 0 ? ' is-active' : ''}`;

    const thumbImg = document.createElement('img');
    thumbImg.src = encodeURI(imgData.src);
    thumbImg.alt = imgData.caption;
    thumbBtn.appendChild(thumbImg);

    thumbBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      showImage(imgData);
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