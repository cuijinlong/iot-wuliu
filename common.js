let toastTimer;

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// 页面全局转场动画 (模拟 Flutter 的 PageRouteBuilder)
document.addEventListener("DOMContentLoaded", () => {
  // 确保页面初次加载时有滑入效果
  const page = document.querySelector('.page');
  if (page) {
    setTimeout(() => page.classList.add('active'), 50);
  }
});
