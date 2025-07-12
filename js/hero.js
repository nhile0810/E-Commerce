document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
  });

  // Hover effect for product items
  document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseout', function() {
      this.style.zIndex = '1';
    });
  });
});
