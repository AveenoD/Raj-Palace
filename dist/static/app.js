/* =====================================================
   Raj Palace & Lawns — Frontend App
   ===================================================== */

(function () {
  'use strict';

  /* ---------- Booking type state (NEW) ---------- */
  // UI-only state for the availability toggle.
  // Does not affect calendar logic.
  let bookingType = 'guesthouse'; // 'guesthouse' | 'lawns'

  const availabilityTypeBtns = document.querySelectorAll('.availability-booking-toggle-btn');
  const setAvailabilityBookingType = (type) => {
    bookingType = type === 'lawns' ? 'lawns' : 'guesthouse';
    availabilityTypeBtns.forEach((b) => {
      if (b.dataset.bookingType === bookingType) b.classList.add('active');
      else b.classList.remove('active');
    });
  };

  availabilityTypeBtns.forEach((b) => {
    b.addEventListener('click', () => setAvailabilityBookingType(b.dataset.bookingType));
  });

  // Ensure default state is "Guest House" active.
  setAvailabilityBookingType('guesthouse');

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
  let currentLawnsFilter = 'all';
  galleryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach((t) => {
        t.classList.remove('active', 'bg-maroon', 'text-gold');
        t.classList.add('bg-white', 'text-maroon', 'border', 'border-maroon/20');
      });
      tab.classList.add('active', 'bg-maroon', 'text-gold');
      tab.classList.remove('bg-white', 'text-maroon', 'border', 'border-maroon/20');

      const filter = tab.dataset.galleryFilter;
      currentLawnsFilter = filter || 'all';
      galleryItems.forEach((item) => {
        const cat = item.dataset.category;
        if (filter === 'all' || cat === filter) item.classList.remove('hidden');
        else item.classList.add('hidden');
      });

      updateGalleryLoadMoreVisibility();
    });
  });

  // Guest House gallery filter
  const galleryTabsGH = document.querySelectorAll('.gallery-tab-gh');
  const galleryItemsGH = document.querySelectorAll('.gallery-item-gh');
  const ghFeatured = document.getElementById('gallery-grid-guesthouse-featured');
  const ghMore = document.getElementById('gallery-grid-guesthouse-more');
  let currentGuesthouseFilter = 'all';
  galleryTabsGH.forEach((tab) => {
    tab.addEventListener('click', () => {
      galleryTabsGH.forEach((t) => {
        t.classList.remove('active', 'bg-maroon', 'text-gold');
        t.classList.add('bg-white', 'text-maroon', 'border', 'border-maroon/20');
      });
      tab.classList.add('active', 'bg-maroon', 'text-gold');
      tab.classList.remove('bg-white', 'text-maroon', 'border', 'border-maroon/20');

      const filter = tab.dataset.galleryFilterGh;
      currentGuesthouseFilter = filter || 'all';
      // Avoid huge gaps: for Guest House, when a specific category is selected,
      // hide the fixed featured grid and show the normal grid.
      if (filter && filter !== 'all') {
        if (ghFeatured) ghFeatured.classList.add('hidden');
        if (ghMore) ghMore.classList.remove('hidden');
      } else {
        if (ghFeatured) ghFeatured.classList.remove('hidden');
        // keep "more" collapsed until user explicitly expands
      }

      galleryItemsGH.forEach((item) => {
        const cat = item.dataset.category;
        if (filter === 'all' || cat === filter) item.classList.remove('hidden');
        else item.classList.add('hidden');
      });

      updateGalleryLoadMoreVisibility();
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
  const enquiryCheckoutDate = document.getElementById('enquiry-checkout-date');
  const enquiryWhatsapp = document.getElementById('enquiry-whatsapp');
  const grid = document.getElementById('cal-grid');

  const addDays = (dateStr, days) => {
    if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return '';
    const [y, m, d] = dateStr.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() + days);
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
  };

  const applyGuesthouseHoldRange = () => {
    if (!grid) return;
    // Clear previous holds
    grid.querySelectorAll('.cal-day.gh-hold').forEach((c) => {
      c.classList.remove('gh-hold');
      if (c.dataset.ghHoldPrevDisabled === 'true') c.disabled = true;
      else if (c.dataset.ghHoldPrevDisabled === 'false') c.disabled = false;
      delete c.dataset.ghHoldPrevDisabled;
    });

    const type = bookingTypeInput?.value || 'lawns';
    const checkIn = enquiryDateInput?.value || '';
    const checkOut = enquiryCheckoutDate?.value || '';
    if (type !== 'guesthouse' || !checkIn || !checkOut) return;
    if (checkOut <= checkIn) return;

    // Mark in-between nights as temporarily not available (UI only)
    let cur = addDays(checkIn, 1);
    while (cur && cur <= checkOut) {
      const cell = grid.querySelector(`.cal-day[data-date="${cur}"]`);
      if (cell && !cell.classList.contains('empty') && !cell.classList.contains('past')) {
        // Don't override true booked/blocked from backend
        if (!cell.classList.contains('booked') && !cell.classList.contains('blocked')) {
          cell.dataset.ghHoldPrevDisabled = String(cell.disabled);
          cell.classList.add('gh-hold');
          cell.disabled = true;
        }
      }
      cur = addDays(cur, 1);
    }
  };

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
    if (enquiryCheckoutDate) {
      // Default: next day (guest house UX). Visible only in guesthouse mode.
      enquiryCheckoutDate.min = enquiryDateInput?.value ? addDays(enquiryDateInput.value, 1) : '';
      enquiryCheckoutDate.value = enquiryDateInput?.value ? addDays(enquiryDateInput.value, 1) : '';
    }
    updateEnquiryWhatsapp();
    applyGuesthouseHoldRange();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeEnquiryModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  /* ---------- Booking type toggle (NEW) ---------- */
  const bookingTypeInput = document.getElementById('enquiry-booking-type');
  const bookingTypeBtns = document.querySelectorAll('.booking-type-btn');
  const lawnFields = document.querySelector('.booking-fields-lawns');
  const ghFields = document.querySelector('.booking-fields-guesthouse');
  const dateLabel = document.getElementById('enquiry-date-label');

  const setBookingType = (type) => {
    if (bookingTypeInput) bookingTypeInput.value = type;
    bookingTypeBtns.forEach((b) => {
      if (b.dataset.bookingType === type) b.classList.add('active');
      else b.classList.remove('active');
    });
    if (type === 'guesthouse') {
      if (lawnFields) lawnFields.classList.add('hidden');
      if (ghFields) ghFields.classList.remove('hidden');
      if (dateLabel) dateLabel.textContent = 'Check-in Date';
      if (enquiryCheckoutDate && enquiryDateInput?.value) {
        enquiryCheckoutDate.min = addDays(enquiryDateInput.value, 1);
        if (!enquiryCheckoutDate.value || enquiryCheckoutDate.value <= enquiryDateInput.value) {
          enquiryCheckoutDate.value = addDays(enquiryDateInput.value, 1);
        }
      }
    } else {
      if (lawnFields) lawnFields.classList.remove('hidden');
      if (ghFields) ghFields.classList.add('hidden');
      if (dateLabel) dateLabel.textContent = 'Wedding Date';
      if (enquiryCheckoutDate) enquiryCheckoutDate.value = '';
    }
    updateEnquiryWhatsapp();
    applyGuesthouseHoldRange();
  };

  bookingTypeBtns.forEach((b) => {
    b.addEventListener('click', () => setBookingType(b.dataset.bookingType));
  });

  const updateEnquiryWhatsapp = () => {
    if (!enquiryWhatsapp) return;
    const date = enquiryDateInput?.value || '';
    const type = bookingTypeInput?.value || 'lawns';
    const guests = enquiryForm?.querySelector('[name="guests"]')?.value || '';
    let msg;
    if (type === 'guesthouse') {
      const roomType = enquiryForm?.querySelector('[name="roomType"]')?.value || '';
      const numRooms = enquiryForm?.querySelector('[name="numRooms"]')?.value || '';
      const checkOut = enquiryCheckoutDate?.value || '';
      msg = `Hi! I'm interested in booking Raj Palace Guest House.\n`;
      msg += `• Booking Type: Guest House\n`;
      if (guests) msg += `• Guests: ${guests}\n`;
      if (roomType) msg += `• Room Type: ${roomType}\n`;
      if (numRooms) msg += `• Number of Rooms: ${numRooms}\n`;
      if (date) msg += `• Check-in Date: ${date} (10 AM, 24-hour stay)\n`;
      if (checkOut) msg += `• Check-out Date: ${checkOut} (10 AM)\n`;
      msg += `Please share availability & details.`;
    } else {
      msg = `Hi! I'm interested in booking Raj Palace & Lawns${date ? ' for ' + date : ''}.\n`;
      msg += `• Booking Type: Lawns / Hall\n`;
      if (guests) msg += `• Guests: ${guests}\n`;
      msg += `Please share availability & details.`;
    }
    enquiryWhatsapp.href = `https://wa.me/919764490162?text=${encodeURIComponent(msg)}`;
  };

  // Refresh WhatsApp link live as user types in guest house fields
  enquiryForm?.addEventListener('input', updateEnquiryWhatsapp);
  enquiryForm?.addEventListener('change', updateEnquiryWhatsapp);
  enquiryCheckoutDate?.addEventListener('change', () => {
    updateEnquiryWhatsapp();
    applyGuesthouseHoldRange();
  });

  if (enquireBtn) {
    enquireBtn.addEventListener('click', () => {
      if (!calState.selected) {
        showToast('Please select a date first', 'warn');
        return;
      }
      // Open modal in the currently selected booking type (top toggle).
      setBookingType(bookingType);
      openEnquiryModal(calState.selected);
    });
  }

  // Guest House quick book button
  const ghBookBtn = document.getElementById('gh-book-btn');
  if (ghBookBtn) {
    ghBookBtn.addEventListener('click', () => {
      setBookingType('guesthouse');
      openEnquiryModal(calState.selected || '');
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
      const bookingType = fd.get('bookingType') || 'lawns';
      const payload = {
        name: fd.get('name'),
        phone: fd.get('phone'),
        date: fd.get('date'),
        bookingType,
        guests: fd.get('guests') || '',
        roomType: bookingType === 'guesthouse' ? fd.get('roomType') : '',
        numRooms: bookingType === 'guesthouse' ? fd.get('numRooms') : '',
        checkoutDate: bookingType === 'guesthouse' ? fd.get('checkoutDate') : '',
        message: fd.get('message')
      };

      // Validate guest house fields
      if (bookingType === 'guesthouse' && !payload.roomType) {
        showToast('Please select a room type', 'warn');
        return;
      }
      if (bookingType === 'guesthouse' && (!payload.checkoutDate || payload.checkoutDate <= payload.date)) {
        showToast('Please select a valid check-out date', 'warn');
        return;
      }

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
          setBookingType('lawns');
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

  /* ---------- Gallery venue switch (NEW) ---------- */
  const galleryVenueBtns = document.querySelectorAll('.gallery-venue-btn');
  const galleryGridLawns = document.getElementById('gallery-grid');
  const galleryGridLawnsMore = document.getElementById('gallery-grid-more');
  const galleryGridGH = document.getElementById('gallery-grid-guesthouse');
  const galleryGridGHMore = document.getElementById('gallery-grid-guesthouse-more');
  const galleryMobileLawns = document.getElementById('gallery-mobile-preview-lawns');
  const galleryMobileGH = document.getElementById('gallery-mobile-preview-guesthouse');
  const galleryCatTabs = document.getElementById('gallery-category-tabs');
  const galleryCatTabsGH = document.getElementById('gallery-category-tabs-guesthouse');
  const galleryLoadMoreBtn = document.getElementById('gallery-load-more');
  let galleryExpanded = false;

  const getActiveVenue = () => {
    const activeVenueBtn = document.querySelector('.gallery-venue-btn.active');
    return activeVenueBtn?.dataset?.galleryVenue || 'lawns';
  };

  const updateGalleryLoadMoreVisibility = () => {
    if (!galleryLoadMoreBtn) return;
    const venue = getActiveVenue();
    const hasMore =
      venue === 'lawns'
        ? (galleryGridLawnsMore?.querySelectorAll('.gallery-item')?.length || 0) > 0
        : (galleryGridGHMore?.querySelectorAll('.gallery-item-gh')?.length || 0) > 0;

    const filterOk =
      venue === 'lawns' ? currentLawnsFilter === 'all' : currentGuesthouseFilter === 'all';

    // If only one row (no "more" content) OR filter isn't "all", hide the button.
    const shouldShow = hasMore && filterOk;
    galleryLoadMoreBtn.classList.toggle('hidden', !shouldShow);

    // If hidden, also collapse extra grid just in case
    if (!shouldShow) {
      galleryExpanded = false;
      if (galleryGridLawnsMore) galleryGridLawnsMore.classList.add('hidden');
      if (galleryGridGHMore) galleryGridGHMore.classList.add('hidden');
    }
  };

  const setGalleryExpanded = (expanded) => {
    galleryExpanded = !!expanded;
    const venue = getActiveVenue();

    if (galleryGridLawnsMore) galleryGridLawnsMore.classList.toggle('hidden', !(venue === 'lawns' && galleryExpanded));
    if (galleryGridGHMore) galleryGridGHMore.classList.toggle('hidden', !(venue === 'guesthouse' && galleryExpanded));
    if (galleryLoadMoreBtn) {
      // Toggle button label (Load More <-> Show Less)
      galleryLoadMoreBtn.innerHTML = galleryExpanded
        ? '<i class="fas fa-chevron-up mr-2"></i>Show Less'
        : '<i class="fas fa-plus mr-2"></i>Load More Photos';
    }
  };

  if (galleryLoadMoreBtn) {
    galleryLoadMoreBtn.addEventListener('click', () => setGalleryExpanded(!galleryExpanded));
  }

  galleryVenueBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const venue = btn.dataset.galleryVenue;
      galleryVenueBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Reset expanded state when switching venue
      setGalleryExpanded(false);
      // Reset filters to "all" and update button visibility
      if (venue === 'guesthouse') currentGuesthouseFilter = 'all';
      else currentLawnsFilter = 'all';
      updateGalleryLoadMoreVisibility();

      if (venue === 'guesthouse') {
        if (galleryGridLawns) galleryGridLawns.classList.add('hidden');
        if (galleryMobileLawns) galleryMobileLawns.classList.add('hidden');
        if (galleryMobileGH) galleryMobileGH.classList.remove('hidden');
        if (galleryGridGH) {
          galleryGridGH.classList.remove('hidden');
          galleryGridGH.classList.add('grid');
        }
        if (galleryCatTabs) galleryCatTabs.classList.add('hidden');
        if (galleryCatTabsGH) galleryCatTabsGH.classList.remove('hidden');
      } else {
        if (galleryGridLawns) galleryGridLawns.classList.remove('hidden');
        if (galleryMobileLawns) galleryMobileLawns.classList.remove('hidden');
        if (galleryMobileGH) galleryMobileGH.classList.add('hidden');
        if (galleryGridGH) {
          galleryGridGH.classList.add('hidden');
          galleryGridGH.classList.remove('grid');
        }
        if (galleryCatTabs) galleryCatTabs.classList.remove('hidden');
        if (galleryCatTabsGH) galleryCatTabsGH.classList.add('hidden');
      }
    });
  });

  // Initial load-more visibility
  updateGalleryLoadMoreVisibility();

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
