

// 星空背景（减少数量）
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);
  
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    fragment.appendChild(star);
  }
  starsContainer.appendChild(fragment);
}

// 卡片交互效果（优化版）
function initCardEffects() {
  const navGrid = document.querySelector('.nav-grid');
  let glowElement = null;
  
  // 使用事件委托
  navGrid.addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains('nav-card')) {
      e.target.style.zIndex = '10';
    }
  }, true);
  
  navGrid.addEventListener('mouseleave', (e) => {
    if (e.target.classList.contains('nav-card')) {
      e.target.style.zIndex = '1';
    }
  }, true);
  
  navGrid.addEventListener('click', (e) => {
    if (e.target.closest('.nav-card')) {
      e.preventDefault();
      const card = e.target.closest('.nav-card');
      
      setTimeout(() => {
        window.open(card.href, '_blank');
      }, 200);
    }
  });
}

// 加载动画
function showLoadingAnimation() {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 500);
  }, 1000);
}

// 初始化所有效果（延迟加载）
document.addEventListener('DOMContentLoaded', function() {
  showLoadingAnimation();
  
  // 延迟加载非关键效果
  setTimeout(() => {
    if (window.innerWidth > 768) {
      createStars();
    }
    initCardEffects();
  }, 500);
});

// 添加动画CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes rippleEffect {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
  
  @keyframes glowPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }
  
  .nav-card {
    cursor: pointer;
  }
`;
document.head.appendChild(style);