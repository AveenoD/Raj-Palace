/* =====================================================
   Raj Palace & Lawns — Frontend App
   ===================================================== */

(function () {
  'use strict';

  /* ---------- 1. Sticky Nav ---------- */
  const nav = document.getElementById('main-nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile Menu ---------- */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileToggle.innerHTML = isHidden
        ? '<i class="fas fa-times text-xl"></i>'
        : '<i class="fas fa-bars text-xl"></i>';
    });
    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.innerHTML = '<i class="fas fa-bars text-xl"></i>';
      });
    });
  }

  /* ---------- 3. Reveal-on-scroll ---------- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal-up').forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- 4. Hero Slideshow ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  /* ---------- 5. Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 6. Gallery Filter + Lightbox ---------- */
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach((t) => {
        t.classList.remove('active', 'bg-maroon', 'text-gold');
        t.classList.add('bg-white', 'text-maroon', 'border', 'border-maroon/20');
      });
      tab.classList.add('active', 'bg-maroon', 'text-gold');
      tab.classList.remove('bg-white', 'text-maroon', 'border', 'border-maroon/20');

      const filter = tab.dataset.galleryFilter;
      galleryItems.forEach((item) => {
        const cat = item.dataset.category;
        if (filter === 'all' || cat === filter) item.classList.remove('hidden');
        else item.classList.add('hidden');
      });
    });
  });

  window.openLightbox = (src) => {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lb && img) {
      img.src = src;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };
  window.closeLightbox = () => {
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeLightbox();
      closeEnquiryModal();
    }
  });

  /* ---------- 7. Calendar ---------- */
  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    data: {},
    selected: null
  };

  const fmtDate = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  const fmtMonthKey = (y, m) =>
    `${y}-${String(m + 1).padStart(2, '0')}`;

  const fetchMonthAvailability = async (y, m) => {
    try {
      const res = await fetch(`/api/availability?month=${fmtMonthKey(y, m)}`);
      const json = await res.json();
      if (json.ok) calState.data = json.dates || {};
      else calState.data = {};
    } catch (e) {
      calState.data = {};
    }
  };

  const renderCalendar = async () => {
    const grid = document.getElementById('cal-grid');
    const monthLabel = document.getElementById('cal-month');
    if (!grid || !monthLabel) return;

    await fetchMonthAvailability(calState.year, calState.month);

    monthLabel.textContent = `${MONTHS[calState.month]} ${calState.year}`;
    grid.innerHTML = '';

    const firstDay = new Date(calState.year, calState.month, 1).getDay();
    const daysInMonth = new Date(calState.year, calState.month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // leading empty cells
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day empty';
      grid.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = fmtDate(calState.year, calState.month, d);
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'cal-day';
      cell.textContent = d;
      cell.dataset.date = dateStr;

      const thisDate = new Date(calState.year, calState.month, d);
      thisDate.setHours(0, 0, 0, 0);

      if (thisDate < today) {
        cell.classList.add('past');
        cell.disabled = true;
      } else {
        const raw = calState.data[dateStr];
        const status = raw ? raw.split('|')[0] : 'available';
        cell.classList.add(status);

        if (status === 'available') {
          cell.addEventListener('click', () => selectDate(dateStr, status));
        } else {
          cell.addEventListener('click', () => {
            showToast(status === 'booked' ? 'This date is already booked' : 'This date is blocked', 'warn');
          });
        }
      }

      if (thisDate.getTime() === today.getTime()) cell.classList.add('today');

      if (calState.selected === dateStr) cell.classList.add('selected');

      grid.appendChild(cell);
    }
  };

  const selectDate = (dateStr, status) => {
    calState.selected = dateStr;
    document.querySelectorAll('#cal-grid .cal-day').forEach((c) => c.classList.remove('selected'));
    const cell = document.querySelector(`#cal-grid .cal-day[data-date="${dateStr}"]`);
    if (cell) cell.classList.add('selected');

    const info = document.getElementById('cal-selected-info');
    const dateLabel = document.getElementById('cal-selected-date');
    const statusLabel = document.getElementById('cal-selected-status');
    if (info && dateLabel && statusLabel) {
      info.classList.remove('hidden');
      const parts = dateStr.split('-');
      const dt = new Date(+parts[0], +parts[1] - 1, +parts[2]);
      dateLabel.textContent = dt.toLocaleDateString('en-IN', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
      statusLabel.innerHTML = '<span class="text-green-300"><i class="fas fa-check-circle mr-1"></i>Available — Send an enquiry to confirm</span>';
    }
  };

  const calPrev = document.getElementById('cal-prev');
  const calNext = document.getElementById('cal-next');
  if (calPrev && calNext) {
    calPrev.addEventListener('click', () => {
      calState.month--;
      if (calState.month < 0) { calState.month = 11; calState.year--; }
      renderCalendar();
    });
    calNext.addEventListener('click', () => {
      calState.month++;
      if (calState.month > 11) { calState.month = 0; calState.year++; }
      renderCalendar();
    });
  }

  /* ---------- 8. Enquiry Modal ---------- */
  const modal = document.getElementById('enquiry-modal');
  const modalClose = document.getElementById('modal-close');
  const enquireBtn = document.getElementById('cal-enquire-btn');
  const enquiryForm = document.getElementById('enquiry-form');
  const enquiryDateInput = document.getElementById('enquiry-date');
  const enquiryDateDisplay = document.getElementById('enquiry-date-display');
  const enquiryWhatsapp = document.getElementById('enquiry-whatsapp');

  const openEnquiryModal = (date) => {
    if (!modal) return;
    if (date && enquiryDateInput && enquiryDateDisplay) {
      enquiryDateInput.value = date;
      const parts = date.split('-');
      const dt = new Date(+parts[0], +parts[1] - 1, +parts[2]);
      enquiryDateDisplay.value = dt.toLocaleDateString('en-IN', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
    } else if (enquiryDateDisplay) {
      enquiryDateInput.value = '';
      enquiryDateDisplay.value = 'Flexible / To be discussed';
    }
    updateEnquiryWhatsapp();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeEnquiryModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  const updateEnquiryWhatsapp = () => {
    if (!enquiryWhatsapp) return;
    const date = enquiryDateInput?.value || '';
    const msg = `Hi! I'm interested in booking Raj Palace & Lawns${date ? ' for ' + date : ''}. Please share details.`;
    enquiryWhatsapp.href = `https://wa.me/919764490162?text=${encodeURIComponent(msg)}`;
  };

  if (enquireBtn) {
    enquireBtn.addEventListener('click', () => {
      if (!calState.selected) {
        showToast('Please select a date first', 'warn');
        return;
      }
      openEnquiryModal(calState.selected);
    });
  }
  if (modalClose) modalClose.addEventListener('click', closeEnquiryModal);
  if (modal) {
    modal.querySelector('.modal-backdrop')?.addEventListener('click', closeEnquiryModal);
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(enquiryForm);
      const payload = {
        name: fd.get('name'),
        phone: fd.get('phone'),
        date: fd.get('date'),
        guests: fd.get('guests'),
        message: fd.get('message')
      };

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const origHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';

      try {
        const res = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (json.ok) {
          showToast('Enquiry sent! We will call you shortly.', 'success');
          enquiryForm.reset();
          closeEnquiryModal();
        } else {
          showToast(json.error || 'Something went wrong. Try WhatsApp.', 'warn');
        }
      } catch (err) {
        showToast('Network error. Please try WhatsApp.', 'warn');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origHtml;
      }
    });
  }

  /* ---------- 9. Toast ---------- */
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  let toastTimeout;
  const showToast = (message, type = 'success') => {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    const toastInner = toast.querySelector('div');
    if (toastInner) {
      if (type === 'warn') {
        toastInner.className = 'bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-red-300/40 flex items-center gap-3';
        toastInner.querySelector('i').className = 'fas fa-exclamation-circle text-xl';
      } else {
        toastInner.className = 'bg-maroon text-gold px-6 py-4 rounded-xl shadow-2xl border border-gold/30 flex items-center gap-3';
        toastInner.querySelector('i').className = 'fas fa-check-circle text-xl';
      }
    }
    toast.classList.add('active');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('active'), 4000);
  };

  /* ---------- 10. Init ---------- */
  renderCalendar();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
})();
