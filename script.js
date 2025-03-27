document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const container = document.querySelector(".container");

    // Hilangkan preloader setelah 2 detik
    setTimeout(() => {
        preloader.style.display = "none";
        container.style.display = "flex";
    }, 2000);

    // Animasi scroll untuk section
    function revealContent() {
        let items = document.querySelectorAll('.section');
        items.forEach(item => {
            let position = item.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                item.style.opacity = 1;
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', revealContent);
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    // Buka/tutup menu saat hamburger diklik
    hamburger.addEventListener("click", function(event) {
        event.stopPropagation(); // Mencegah event klik menyebar ke dokumen
        menu.classList.toggle("active");
    });

    // Tutup menu saat klik di luar menu
    document.addEventListener("click", function(event) {
        if (menu.classList.contains("active") && !menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    // Mencegah menu menutup saat mengklik di dalam menu
    menu.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
 // Fungsi untuk menavigasi ke halaman tertentu
          function goToPage(page) {
              window.location.href = page;
          }
          document.addEventListener("DOMContentLoaded", function() {
    const submenuToggle = document.querySelector(".submenu-toggle");

    submenuToggle.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah perilaku default link
        const submenu = this.closest(".submenu");
        submenu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("idul-fitri-music");

    // Coba memainkan musik secara otomatis
    audio.play().catch(() => {
        console.log("Autoplay diblokir oleh browser. Musik akan dimainkan setelah interaksi pengguna.");
    });

    // Memainkan musik setelah interaksi pengguna (klik/tap)
    document.addEventListener("click", function() {
        audio.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("idul-fitri-music");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const playIcon = playPauseBtn.querySelector("i");



    // Fungsi untuk mengubah ikon dan teks tombol
    function updateButton() {
        if (audio.paused) {
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
            playPauseBtn.innerHTML = `<i class="fas fa-play"></i> Play Music`;
        } else {
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
            playPauseBtn.innerHTML = `<i class="fas fa-pause"></i> Pause Music`;
        }
    }

    // Event listener untuk tombol play/pause
    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updateButton();
    });

    // Update tombol saat musik selesai
    audio.addEventListener("ended", function() {
        updateButton();
    });

    // Coba memainkan musik saat halaman dimuat
    audio.play().catch(() => {
        console.log("Autoplay diblokir oleh browser. Musik akan dimainkan setelah interaksi pengguna.");
    });
});

