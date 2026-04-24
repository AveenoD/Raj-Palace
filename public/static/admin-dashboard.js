/* =====================================================
   Raj Palace & Lawns — Admin Dashboard
   ===================================================== */
(function () {
  'use strict';

  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const state = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    allDates: {},
    selected: null,
    enquiries: [],
    enquiryFilter: 'all' // 'all' | 'lawns' | 'guesthouse'
  };

  /* Parse a KV date value into { status, note, bookingType } */
  const parseDateValue = (raw) => {
    if (!raw) return { status: 'available', note: '', bookingType: 'lawns' };
    const parts = String(raw).split('|');
    return {
      status: parts[0] || 'available',
      note: parts[1] || '',
      bookingType: parts[2] === 'guesthouse' ? 'guesthouse' : 'lawns'
    };
  };

  /* ---------- Helpers ---------- */
  const fmtDate = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  const api = async (url, options = {}) => {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    if (res.status === 401) {
      window.location.href = '/admin';
      return null;
    }
    return res.json();
  };

  const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if (!toast || !msg) return;
    msg.textContent = message;
    const inner = toast.querySelector('div');
    if (inner) {
      if (type === 'warn') {
        inner.className = 'bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-red-300/40 flex items-center gap-3';
        inner.querySelector('i').className = 'fas fa-exclamation-circle text-xl';
      } else {
        inner.className = 'bg-maroon text-gold px-6 py-4 rounded-xl shadow-2xl border border-gold/30 flex items-center gap-3';
        inner.querySelector('i').className = 'fas fa-check-circle text-xl';
      }
    }
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3500);
  };

  /* ---------- Load all dates ---------- */
  const loadAllDates = async () => {
    const json = await api('/api/admin/dates');
    if (!json) return;
    state.allDates = json.dates || {};

    // Stats
    document.getElementById('stat-booked').textContent = json.stats.booked || 0;
    document.getElementById('stat-blocked').textContent = json.stats.blocked || 0;

    // Count "available" for current visible month
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    let markedThisMonth = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const key = fmtDate(state.year, state.month, d);
      if (state.allDates[key]) markedThisMonth++;
    }
    document.getElementById('stat-available').textContent = daysInMonth - markedThisMonth;
  };

  /* ---------- Render calendar ---------- */
  const renderCalendar = () => {
    const grid = document.getElementById('admin-cal-grid');
    const label = document.getElementById('admin-cal-month');
    if (!grid || !label) return;

    label.textContent = `${MONTHS[state.month]} ${state.year}`;
    grid.innerHTML = '';

    const firstDay = new Date(state.year, state.month, 1).getDay();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'admin-cal-day empty';
      grid.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = fmtDate(state.year, state.month, d);
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'admin-cal-day';
      cell.dataset.date = dateStr;

      const parsed = parseDateValue(state.allDates[dateStr]);
      cell.classList.add(parsed.status);

      // Day number + tiny type badge (dot) for booked/blocked dates
      if (parsed.status !== 'available' && state.allDates[dateStr]) {
        const typeLetter = parsed.bookingType === 'guesthouse' ? 'G' : 'L';
        cell.innerHTML = `<span class="cal-day-num">${d}</span><span class="cal-type-badge">${typeLetter}</span>`;
      } else {
        cell.textContent = d;
      }

      const thisDate = new Date(state.year, state.month, d);
      thisDate.setHours(0, 0, 0, 0);
      if (thisDate < today) cell.classList.add('past');
      if (thisDate.getTime() === today.getTime()) cell.classList.add('today');
      if (state.selected === dateStr) cell.classList.add('selected');

      cell.addEventListener('click', () => selectDate(dateStr));
      grid.appendChild(cell);
    }
  };

  /* ---------- Select date → show editor ---------- */
  const selectDate = (dateStr) => {
    state.selected = dateStr;
    document.querySelectorAll('#admin-cal-grid .admin-cal-day').forEach((c) =>
      c.classList.remove('selected')
    );
    const cell = document.querySelector(`#admin-cal-grid .admin-cal-day[data-date="${dateStr}"]`);
    if (cell) cell.classList.add('selected');

    renderEditPanel();
  };

  const renderEditPanel = () => {
    const panel = document.getElementById('admin-edit-panel');
    if (!panel) return;

    if (!state.selected) {
      panel.innerHTML = '<p class="text-maroon/50 text-sm text-center py-6"><i class="fas fa-hand-pointer text-2xl mb-3 block"></i>Click a date on the calendar to edit its status.</p>';
      return;
    }

    const parsed = parseDateValue(state.allDates[state.selected]);
    const { status, note, bookingType } = parsed;

    const parts = state.selected.split('-');
    const dt = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    const pretty = dt.toLocaleDateString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    panel.innerHTML = `
      <div class="mb-5">
        <div class="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-1">Selected Date</div>
        <div class="font-display text-xl font-bold text-maroon">${pretty}</div>
        <div class="text-maroon/60 text-xs mt-1">
          Current: <span class="font-semibold capitalize">${status}</span>
          ${status !== 'available' ? `· <span class="font-semibold">${bookingType === 'guesthouse' ? 'Guest House' : 'Lawns / Hall'}</span>` : ''}
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-xs tracking-wider uppercase text-maroon/60 font-semibold mb-2">Booking Type</label>
        <div class="grid grid-cols-2 gap-2" id="admin-type-toggle">
          <button type="button" data-type="lawns" class="admin-type-btn px-3 py-2 rounded-lg border-2 text-xs font-semibold transition ${bookingType === 'lawns' ? 'border-maroon bg-maroon text-gold' : 'border-maroon/15 text-maroon hover:border-maroon/40'}">
            <i class="fas fa-leaf mr-1"></i> Lawns / Hall
          </button>
          <button type="button" data-type="guesthouse" class="admin-type-btn px-3 py-2 rounded-lg border-2 text-xs font-semibold transition ${bookingType === 'guesthouse' ? 'border-maroon bg-maroon text-gold' : 'border-maroon/15 text-maroon hover:border-maroon/40'}">
            <i class="fas fa-bed mr-1"></i> Guest House
          </button>
        </div>
      </div>

      <div class="space-y-2 mb-5">
        <button data-status="available" class="status-btn w-full text-left px-4 py-3 rounded-xl border-2 transition flex items-center gap-3 ${status === 'available' ? 'border-green-500 bg-green-50' : 'border-maroon/10 hover:border-green-300'}">
          <span class="w-3 h-3 rounded-full bg-green-500"></span>
          <span class="font-semibold text-maroon">Available</span>
          ${status === 'available' ? '<i class="fas fa-check text-green-600 ml-auto"></i>' : ''}
        </button>
        <button data-status="booked" class="status-btn w-full text-left px-4 py-3 rounded-xl border-2 transition flex items-center gap-3 ${status === 'booked' ? 'border-red-500 bg-red-50' : 'border-maroon/10 hover:border-red-300'}">
          <span class="w-3 h-3 rounded-full bg-red-500"></span>
          <span class="font-semibold text-maroon">Booked</span>
          ${status === 'booked' ? '<i class="fas fa-check text-red-600 ml-auto"></i>' : ''}
        </button>
        <button data-status="blocked" class="status-btn w-full text-left px-4 py-3 rounded-xl border-2 transition flex items-center gap-3 ${status === 'blocked' ? 'border-gray-500 bg-gray-50' : 'border-maroon/10 hover:border-gray-400'}">
          <span class="w-3 h-3 rounded-full bg-gray-500"></span>
          <span class="font-semibold text-maroon">Blocked</span>
          ${status === 'blocked' ? '<i class="fas fa-check text-gray-700 ml-auto"></i>' : ''}
        </button>
      </div>

      <div class="mb-4">
        <label class="block text-xs tracking-wider uppercase text-maroon/60 font-semibold mb-2">Note (optional)</label>
        <input id="date-note" type="text" value="${note.replace(/"/g, '&quot;')}" maxlength="80" placeholder="e.g. Patil wedding" class="w-full px-3 py-2 rounded-lg border border-maroon/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm" />
      </div>
    `;

    // Local UI state for the picked type (defaults to current)
    let pickedType = bookingType;
    panel.querySelectorAll('.admin-type-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        pickedType = btn.dataset.type;
        panel.querySelectorAll('.admin-type-btn').forEach((b) => {
          if (b.dataset.type === pickedType) {
            b.classList.add('border-maroon', 'bg-maroon', 'text-gold');
            b.classList.remove('border-maroon/15', 'text-maroon', 'hover:border-maroon/40');
          } else {
            b.classList.remove('border-maroon', 'bg-maroon', 'text-gold');
            b.classList.add('border-maroon/15', 'text-maroon', 'hover:border-maroon/40');
          }
        });
      });
    });

    panel.querySelectorAll('.status-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const newStatus = btn.dataset.status;
        const noteEl = document.getElementById('date-note');
        const noteVal = noteEl ? noteEl.value.trim() : '';
        await updateDate(state.selected, newStatus, noteVal, pickedType);
      });
    });
  };

  /* ---------- Update date ---------- */
  const updateDate = async (date, status, note, bookingType) => {
    const json = await api('/api/admin/dates', {
      method: 'POST',
      body: JSON.stringify({ date, status, note, bookingType: bookingType || 'lawns' })
    });
    if (!json) return;
    if (json.ok) {
      showToast(`Date marked as ${status}`, 'success');
      await loadAllDates();
      renderCalendar();
      renderEditPanel();
    } else {
      showToast(json.error || 'Failed to update', 'warn');
    }
  };

  /* ---------- Enquiries ---------- */
  const loadEnquiries = async () => {
    const json = await api('/api/admin/enquiries');
    if (!json) return;
    state.enquiries = json.enquiries || [];
    document.getElementById('stat-enquiries').textContent = state.enquiries.length;
    renderEnquiries();
  };

  const renderEnquiries = () => {
    const tbody = document.getElementById('enquiries-tbody');
    if (!tbody) return;

    // Apply filter
    const filtered = state.enquiries.filter((e) => {
      const type = e.bookingType === 'guesthouse' ? 'guesthouse' : 'lawns';
      if (state.enquiryFilter === 'all') return true;
      return type === state.enquiryFilter;
    });

    // Update count badges
    const counts = { all: state.enquiries.length, lawns: 0, guesthouse: 0 };
    state.enquiries.forEach((e) => {
      const t = e.bookingType === 'guesthouse' ? 'guesthouse' : 'lawns';
      counts[t]++;
    });
    const cAll = document.getElementById('enq-count-all');
    const cLawns = document.getElementById('enq-count-lawns');
    const cGH = document.getElementById('enq-count-guesthouse');
    if (cAll) cAll.textContent = counts.all;
    if (cLawns) cLawns.textContent = counts.lawns;
    if (cGH) cGH.textContent = counts.guesthouse;

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" class="text-center py-12 text-maroon/50"><i class="fas fa-inbox text-3xl mb-3 block"></i>No enquiries match this filter.</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map((e) => {
      const date = new Date(e.createdAt);
      const pretty = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' });
      const time = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const bType = e.bookingType === 'guesthouse' ? 'guesthouse' : 'lawns';
      const bTypeLabel = bType === 'guesthouse'
        ? '<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gold/15 text-maroon text-xs font-semibold"><i class="fas fa-bed"></i>Guest House</span>'
        : '<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold"><i class="fas fa-leaf"></i>Lawns / Hall</span>';
      const roomTypeCell = bType === 'guesthouse'
        ? (e.roomType ? escapeHtml(e.roomType) : '<span class="text-maroon/40">—</span>')
        : '<span class="text-maroon/40">—</span>';
      const numRoomsCell = bType === 'guesthouse'
        ? (e.numRooms ? `<span class="font-semibold">${escapeHtml(e.numRooms)}</span>` : '<span class="text-maroon/40">—</span>')
        : '<span class="text-maroon/40">—</span>';
      const guestsCell = bType === 'lawns'
        ? (e.guests ? escapeHtml(e.guests) : '<span class="text-maroon/40">—</span>')
        : '<span class="text-maroon/40">—</span>';

      // WhatsApp reply link (pre-filled based on booking type)
      let waMsg = `Hi ${e.name}, thanks for your enquiry with Raj Palace`;
      if (bType === 'guesthouse') {
        waMsg += ` Guest House. We have availability for ${e.roomType || 'the rooms'}`;
        if (e.numRooms) waMsg += ` (${e.numRooms} room${e.numRooms > 1 ? 's' : ''})`;
        if (e.date) waMsg += ` from ${e.date} (Check-in 10 AM, Check-out next-day 10 AM)`;
        waMsg += '. Shall we confirm?';
      } else {
        waMsg += ` & Lawns${e.date ? ' for ' + e.date : ''}. Would you like to schedule a venue visit?`;
      }

      return `
        <tr class="border-t border-maroon/5 hover:bg-ivory/50 transition">
          <td class="px-4 py-4 text-xs text-maroon">
            <div class="font-semibold">${pretty}</div>
            <div class="text-[10px] text-maroon/50">${time}</div>
          </td>
          <td class="px-4 py-4 text-sm text-maroon font-medium">${escapeHtml(e.name)}</td>
          <td class="px-4 py-4 text-sm whitespace-nowrap">
            <a href="tel:${escapeHtml(e.phone)}" class="text-maroon hover:text-gold">${escapeHtml(e.phone)}</a>
            <a href="https://wa.me/91${e.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}" target="_blank" class="ml-2 text-green-600 hover:text-green-700"><i class="fab fa-whatsapp"></i></a>
          </td>
          <td class="px-4 py-4 text-sm">${bTypeLabel}</td>
          <td class="px-4 py-4 text-sm text-maroon">${escapeHtml(e.date) || '<span class="text-maroon/40">—</span>'}</td>
          <td class="px-4 py-4 text-sm text-maroon">${roomTypeCell}</td>
          <td class="px-4 py-4 text-sm text-maroon text-center">${numRoomsCell}</td>
          <td class="px-4 py-4 text-sm text-maroon">${guestsCell}</td>
          <td class="px-4 py-4 text-sm">
            <button data-id="${e.id}" class="del-enquiry w-8 h-8 rounded-full bg-red-50 hover:bg-red-500 hover:text-white text-red-600 transition" title="Delete">
              <i class="fas fa-trash text-xs"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.del-enquiry').forEach((btn) => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this enquiry?')) return;
        const id = btn.dataset.id;
        const json = await api(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
        if (json?.ok) {
          showToast('Enquiry deleted', 'success');
          await loadEnquiries();
        }
      });
    });
  };

  /* ---------- Enquiry filter buttons ---------- */
  const bindEnquiryFilters = () => {
    document.querySelectorAll('.enq-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.enquiryFilter = btn.dataset.enqFilter;
        document.querySelectorAll('.enq-filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderEnquiries();
      });
    });
  };

  const escapeHtml = (s) => {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  /* ---------- Event bindings ---------- */
  document.getElementById('admin-cal-prev')?.addEventListener('click', async () => {
    state.month--;
    if (state.month < 0) { state.month = 11; state.year--; }
    state.selected = null;
    await loadAllDates();
    renderCalendar();
    renderEditPanel();
  });

  document.getElementById('admin-cal-next')?.addEventListener('click', async () => {
    state.month++;
    if (state.month > 11) { state.month = 0; state.year++; }
    state.selected = null;
    await loadAllDates();
    renderCalendar();
    renderEditPanel();
  });

  document.getElementById('admin-logout')?.addEventListener('click', async () => {
    await api('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin';
  });

  document.getElementById('refresh-enquiries')?.addEventListener('click', loadEnquiries);
  bindEnquiryFilters();

  document.getElementById('bulk-refresh')?.addEventListener('click', async () => {
    await loadAllDates();
    renderCalendar();
    await loadEnquiries();
    showToast('Data refreshed', 'success');
  });

  document.getElementById('bulk-clear')?.addEventListener('click', async () => {
    if (!confirm('Clear all past booking dates? This cannot be undone.')) return;
    const json = await api('/api/admin/dates/past', { method: 'DELETE' });
    if (json?.ok) {
      showToast(`Cleared ${json.cleared} past dates`, 'success');
      await loadAllDates();
      renderCalendar();
    }
  });

  /* ---------- Init ---------- */
  (async () => {
    await loadAllDates();
    renderCalendar();
    await loadEnquiries();
  })();
})();
