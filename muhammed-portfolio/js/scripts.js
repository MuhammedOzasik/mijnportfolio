document.addEventListener('DOMContentLoaded', () => {
  const jaarElement = document.getElementById('huidigJaar');
  if (jaarElement) {
    jaarElement.textContent = new Date().getFullYear();
  }
});


(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get('product');
  const price = urlParams.get('price');

  const cartItems = document.getElementById('cart-items');

  if (cartItems) {
    // Sepeti temizle
    cartItems.innerHTML = '';

    const priceValue = parseFloat(price);

    // Ürün ve fiyat varsa ve fiyat geçerliyse devam et
    if (product && price && !isNaN(priceValue)) {
      // Ürün satırı oluştur
      const liProduct = document.createElement('li');

      const spanProduct = document.createElement('span');
      spanProduct.textContent = product; // Güvenli içerik için textContent kullan

      const spanPrice = document.createElement('span');
      spanPrice.textContent = `€ ${priceValue.toFixed(2).replace('.', ',')}`;

      liProduct.appendChild(spanProduct);
      liProduct.appendChild(spanPrice);
      cartItems.appendChild(liProduct);

      // Toplam fiyat satırı oluştur
      const liTotal = document.createElement('li');
      liTotal.classList.add('fw-bold');

      const spanTotalText = document.createElement('span');
      spanTotalText.textContent = 'Totaal';

      const spanTotalPrice = document.createElement('span');
      spanTotalPrice.textContent = `€ ${priceValue.toFixed(2).replace('.', ',')}`;

      liTotal.appendChild(spanTotalText);
      liTotal.appendChild(spanTotalPrice);
      cartItems.appendChild(liTotal);

    } else {
      // Sepet boşsa gösterilecek mesaj
      const liEmpty = document.createElement('li');
      liEmpty.classList.add('empty-cart-message');

      const a = document.createElement('a');
      a.href = 'netwinkel.html';
      a.textContent = 'Uw winkelwagen is leeg. Klik hier om producten te bekijken.';

      liEmpty.appendChild(a);
      cartItems.appendChild(liEmpty);
    }
  }
})();

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('div > div[data-fill]').forEach(bar => {
    const fill = bar.getAttribute('data-fill');
    setTimeout(() => {
      bar.style.width = fill;
    }, 300);
  });

  // Yıl güncelleme
  const jaarElement = document.getElementById('huidigJaar');
  if (jaarElement) {
    jaarElement.textContent = new Date().getFullYear();
  }
});



// Set current year in footer
document.getElementById('huidigJaar').textContent = new Date().getFullYear();

// Animate progress bars on scroll
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.getAttribute('data-fill');
        entry.target.style.width = targetWidth;
        
        // Add animation class
        entry.target.classList.add('animate-fade');
        
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  animateProgressBars();
  
  // Add hover effect to skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Add shadow to header on scroll
window.addEventListener('scroll', debounce(function() {
  const header = document.querySelector('.custom-header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
}));



