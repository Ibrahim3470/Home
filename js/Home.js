var typed = new Typed(".auto-type", {
    strings: ["Karim", "Contant Writer", "Graphic Designer", "Markting"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

var icon = document.getElementById("icon");
var isDarkMode = localStorage.getItem('darkMode') === 'true';

// تحديث حالة الوضع الليلي عند تحميل الصفحة
if (isDarkMode) {
    document.body.classList.add("light-theme");
    icon.src = "Img/moon.png";
} else {
    document.body.classList.remove("light-theme");
    icon.src = "Img/sun.png";
}

icon.onclick = function () {
    // تبديل الوضع الليلي
    document.body.classList.toggle("light-theme");
    isDarkMode = document.body.classList.contains("light-theme");

    // حفظ حالة الوضع الليلي في localStorage
    localStorage.setItem('darkMode', isDarkMode);

    // تحديث صورة الرمز بناءً على الوضع الليلي
    icon.src = isDarkMode ? "Img/moon.png" : "Img/sun.png";
};

const list = document.querySelectorAll(".list");
function activelink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activelink));

const menu_btn = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
});