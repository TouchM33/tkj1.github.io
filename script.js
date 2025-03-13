// Quotes dari TKJ1 (Ganti otomatis setiap 3 detik)
const quotes = [
    "Jangan lupa bahagia, tugas bisa belakangan! 😂",
    "TKJ1 terbaik sepanjang masa! 💪",
    "Ingat terus kenangan ini, bro! 🔥",
    "Dulu kita sibuk tugas, sekarang sibuk nostalgia. 😆",
    "Kelas paling solid, TKJ1 no debat! 👊",
    "Mau lulus tapi masih betah di kelas ini. 😢",
    "Dulu kita belajar bareng, sekarang sukses bareng! 🚀",
];

function updateQuote() {
    const quoteElement = document.getElementById("random-quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

// Update pertama kali
updateQuote();
// Update setiap 3 detik
setInterval(updateQuote, 3000);
