/* Admin Login Page */
(function () {
  const form = document.getElementById('admin-login-form');
  const errBox = document.getElementById('login-error');
  const errMsg = document.getElementById('login-error-message');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errBox?.classList.add('hidden');

    const fd = new FormData(form);
    const payload = {
      username: fd.get('username'),
      password: fd.get('password')
    };

    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Signing in...';

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.ok) {
        window.location.href = '/admin';
      } else {
        if (errBox && errMsg) {
          errMsg.textContent = json.error || 'Invalid credentials';
          errBox.classList.remove('hidden');
        }
        btn.disabled = false;
        btn.innerHTML = orig;
      }
    } catch (err) {
      if (errBox && errMsg) {
        errMsg.textContent = 'Network error. Please try again.';
        errBox.classList.remove('hidden');
      }
      btn.disabled = false;
      btn.innerHTML = orig;
    }
  });
})();
