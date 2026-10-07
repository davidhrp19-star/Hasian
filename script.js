function startLove() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("mainContent");
    const music = document.getElementById("music");

    // Tampilkan website
    main.style.display = "block";

    // Hilangkan halaman pembuka
    setTimeout(() => {
        intro.classList.add("hide");
    }, 100);

    // Putar musik
    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Browser meminta izin untuk memutar musik.");
    });

    // Scroll ke bagian atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   HEART PARTICLES
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    heart.style.opacity = "0.7";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    const duration =
        Math.random() * 3000 + 4000;

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },
            {
                transform:
                    "translateY(-50vh) rotate(180deg)",
                opacity: .7
            },
            {
                transform:
                    "translateY(-110vh) rotate(360deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, duration);
}


/* Jalankan efek hati */

setInterval(createHeart, 1000);