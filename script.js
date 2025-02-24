// التحكم في قائمة التنقل على الشاشات الصغيرة
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// تغيير خلفية الـNavbar عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// تأثير الظهور عند التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-in, .slide-in').forEach(el => observer.observe(el));

// تأثير Parallax للخلفية في الصفحة الرئيسية
const parallaxBg = document.querySelector('.parallax-bg');
if (parallaxBg) {
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
}

// التعامل مع نموذج التواصل
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('تم إرسال رسالتك بنجاح! سيتم التواصل معك قريبًا.');
        this.reset();
    });
}

// تأثير حركي على بطاقات المشاريع والأسعار
document.querySelectorAll('.project-card, .price-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `translateY(-10px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// التحكم في النافذة المنبثقة (Modal)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const projectImages = document.querySelectorAll('.project-image');

    // التحقق من وجود العناصر
    if (!modal) console.error('Modal element not found!');
    if (!modalImage) console.error('Modal image element not found!');
    if (!closeModal) console.error('Close modal button not found!');
    if (projectImages.length === 0) console.error('No project images found!');

    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            console.log('Opening modal with image:', image.getAttribute('data-full'));
            if (modal) {
                modal.style.display = 'flex'; // عرض النافذة
                modalImage.src = image.getAttribute('data-full');
            } else {
                console.error('Modal is still not accessible!');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        console.log('Closing modal');
        if (modal) {
            modal.style.display = 'none'; // إخفاء النافذة
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Closing modal by clicking outside');
            modal.style.display = 'none'; // إخفاء النافذة
        }
    });
});