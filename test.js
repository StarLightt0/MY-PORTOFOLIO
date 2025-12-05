
const translations = {
    en: {
        title: "My Portfolio",
        p1: "Vhirell Pratama Putra, a student from SMK Mahaputra Cerdas Utama with high enthusiasm in technology. With a background in software development, I have built a strong foundation in programming and digital innovation.",
        p2: "My interest in technological development drives me to keep learning, exploring, and creating useful solutions. I am committed to developing these skills to their fullest potential for a smarter and more innovative future.",
        btn: "Explore Now"
    },
    id: {
        title: "Portofolio Saya",
        p1: "Vhirell Pratama Putra, seorang siswa dari SMK Mahaputra Cerdas Utama dengan semangat tinggi dalam dunia teknologi. Dengan latar belakang di bidang pengembangan perangkat lunak, saya telah membangun fondasi yang kuat dalam pemrograman dan inovasi digital.",
        p2: "Ketertarikan saya terhadap perkembangan teknologi mendorong saya untuk terus belajar, mengeksplorasi, dan menciptakan solusi yang bermanfaat. Saya berkomitmen untuk mengembangkan keahlian ini semaksimal mungkin demi masa depan yang lebih cerdas dan inovatif.",
        btn: "Jelajahi Sekarang"
    }
};

const btn = document.getElementById('translate-btn');
let currentLang = 'id';

btn.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    btn.textContent = currentLang === 'id' ? 'EN' : 'ID';

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[currentLang][key];
    });
});

