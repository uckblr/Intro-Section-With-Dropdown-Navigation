const menu = document.getElementById('hamburger');
const hamburger = document.querySelector('.hamburger-menu');
const list = document.getElementById('list')
const features = document.querySelector('nav .hamburger-menu #list .features');
const company = document.querySelector('nav .hamburger-menu #list .company');
const tCompany = document.querySelector('nav .hamburger-menu #list .compani');
const carir = document.querySelector('nav .hamburger-menu #list .carir');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    if (menu.attributes.src.value == 'images/icon-menu.svg') {
        menu.attributes.src.value = 'images/icon-close-menu.svg';
        hamburger.style.display = 'block';
    } else {
        menu.attributes.src.value = 'images/icon-menu.svg';
        hamburger.style.display = 'none';
    }
});

hamburger.addEventListener('click', (e) => {
    const imgf = document.getElementById('imgsatu');
    const imgc = document.getElementById('imgdua');
    if (e.target.textContent == 'Features') {
        features.classList.toggle('muncul');
        tCompany.classList.toggle('turun');
        company.classList.remove('muncul');
        carir.classList.remove('turun');
        imgf.classList.toggle('balik');
        imgc.classList.remove('balik');
    } else if (e.target.textContent == 'Company') {
        features.classList.remove('muncul');
        tCompany.classList.remove('turun');
        company.classList.toggle('muncul');
        carir.classList.toggle('turun');
        imgf.classList.remove('balik');
        imgc.classList.toggle('balik');
    } else {
        features.classList.remove('muncul');
        tCompany.classList.remove('turun');
        company.classList.remove('muncul');
        carir.classList.remove('turun');
    }
});