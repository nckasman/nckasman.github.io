let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - (0.6 * window.innerHeight);
window.onscroll = function() {
    let progressHeight = 0.6 * (window.pageYOffset / totalHeight) * 100;
progress.style.height = progressHeight + "%";
}