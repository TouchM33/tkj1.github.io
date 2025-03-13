document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Jangan pernah lupa dengan kenangan indah kita di TKJ1! 😊",
        "Kelas ini penuh dengan orang-orang luar biasa! 💙",
        "Persahabatan kita nggak akan pernah pudar! 🔥",
        "Semangat terus untuk masa depan kita! 🚀",
        "Gak ada yang bisa ngalahin kekompakan TKJ1! 💪"
    ];

    function updateQuote() {
        const quoteElement = document.getElementById("random-quote");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    setInterval(updateQuote, 3000); // Ganti quotes setiap 3 detik
    updateQuote(); // Tampilkan langsung saat halaman dimuat
});
