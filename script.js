document.getElementById('overlay').addEventListener('click', function() {
    // إخفاء التأثير الضبابي
    this.classList.add('hidden');
    
    // تشغيل الفيديو
    const video = document.getElementById('background-video');
    video.style.display = 'block'; // إظهار الفيديو
    video.play(); // تشغيل الفيديو
  });
  