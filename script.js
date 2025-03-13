// Musik Latar
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = "⏸ Pause";
    } else {
        music.pause();
        musicToggle.textContent = "🎵 Play";
    }
});

// Slideshow Foto Kelas
const slides = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let index = 0;

function gantiSlide() {
    document.getElementById("slide").src = slides[index];
    index = (index + 1) % slides.length;
}

setInterval(gantiSlide, 3000);

// Buku Kenangan Digital
function simpanPesan() {
    let pesan = document.getElementById("pesan").value;
    if (pesan.trim() !== "") {
        let daftarPesan = document.getElementById("daftar-pesan");
        let item = document.createElement("li");
        item.textContent = pesan;
        daftarPesan.appendChild(item);
        document.getElementById("pesan").value = "";
    }
}

// Quotes Random dari Teman Kelas
const quotes = [
    "Tetap semangat walau udah lulus!",
    "Jangan lupa reunian ya!",
    "Kenangan bareng kalian takkan terlupakan.",
    "Sukses buat kita semua!"
];

function tampilkanQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}

// Tampilkan quote pertama kali halaman dibuka
document.addEventListener("DOMContentLoaded", tampilkanQuote);
