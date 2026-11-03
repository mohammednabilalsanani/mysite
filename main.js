// التمرير السلس للروابط داخل الصفحة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// إمكانية إضافة التأثيرات التفاعلية عند التمرير لاحقاً
console.log("CyberTech Website Loaded Successfully.");
// معالجة إرسال نموذج الاتصال
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // إظهار رسالة النجاح بتأثير النيون
        formStatus.classList.add('success');
        formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت.';

        // إعادة تصفير الحقول بعد الإرسال
        contactForm.reset();

        // إخفاء إشعار النجاح بعد 5 ثوانٍ
        setTimeout(() => {
            formStatus.classList.remove('success');
            formStatus.innerHTML = '';
        }, 5000);
    });
}