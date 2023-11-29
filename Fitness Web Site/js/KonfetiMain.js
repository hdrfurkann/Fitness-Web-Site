const openbtn = document.querySelector(".KonfetiPatlat");
const modal = document.querySelector('.ModalKutu');
const closeBtn = document.querySelector('.ModalKapat');
openbtn.addEventListener("click", () => {
    modal.classList.add('visible')
    openbtn.classList.add('hidden');
    const startit = () => {
        setTimeout(function () {
            confetti.start();
        }, 1000);
    };
    // Durdur
    const stopit = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    };
    // playing start
    startit();
    // stoping it
    stopit();
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible')
    openbtn.classList.remove('hidden');
})

/* function AnaSayfayaYonlendir() {
    (function () {
        setTimeout(function () {
            window.location = "index.html";
        }, 3000);
    })();
} */