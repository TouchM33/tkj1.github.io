document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Jangan pernah lupa dengan kenangan indah kita di TKJ1! 😊",
        "Kelas ini penuh dengan orang-orang luar biasa! 💙",
        "Jangan remehkan aku karena aku bukan sangu🤌🏻",
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

// Formulir Saran dengan Validasi
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSaran");
    const konfirmasi = document.getElementById("konfirmasi");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah refresh halaman

            const nama = document.getElementById("nama").value.trim();
            const saran = document.getElementById("saran").value.trim();

            if (nama === "" || saran === "") {
                alert("⚠️ Isi semua kolom dulu, bro!");
                return;
            }

            konfirmasi.style.display = "block";
            setTimeout(() => {
                konfirmasi.style.display = "none";
            }, 3000);

            form.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formSaran").addEventListener("submit", function(event) {
        event.preventDefault(); // Cegah refresh halaman
        document.getElementById("konfirmasi").style.display = "block";
        setTimeout(() => {
            document.getElementById("konfirmasi").style.display = "none";
        }, 3000);
        this.reset();
    });
});
