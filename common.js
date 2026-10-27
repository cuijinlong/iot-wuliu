let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector('.page');
  if (page) setTimeout(() => page.classList.add('active'), 50);
});
