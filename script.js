// تعريف عناصر الأزرار في JavaScript باستخدام الـ ID الخاص بكل زر
const btnBack = document.getElementById("N");        // زر العودة
const btnVespers = document.getElementById("aA");    // زر العشية
const btnGospel = document.getElementById("A");     // زر الأناجيل
const btnPauline = document.getElementById("B");    // زر البولس
const btnCatholicon = document.getElementById("F"); // زر الكاثوليكون
const btnPraxis = document.getElementById("C");     // زر الأبركسيس
const btnSynaxarium = document.getElementById("D");  // زر السنكسار
const btnLiturgy = document.getElementById("V");    // زر إنجيل القداس
btnBack.addEventListener("click", function() {
window.location.href = "index.html"
});
btnVespers.addEventListener("click", function() {
window.location.href = "العشيه.html"
})
btnGospel.addEventListener("click", function() {
window.location.href = "الاناجيل.html"
})
btnPauline.addEventListener("click", function() {
window.location.href = "البولس.html"
})
btnCatholicon.addEventListener("click", function() {
window.location.href = "الكاثوليكون.html"
})
btnPraxis.addEventListener("click", function() {
window.location.href ="الابركسيس.html"
})
btnSynaxarium.addEventListener("click", function() {
window.location.href ="السنسكار.html"
})
btnLiturgy.addEventListener("click", function() {
window.location.href ="الانجيل.html"
})