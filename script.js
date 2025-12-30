function checkPassword() {
    const password = document.getElementById("password").value.trim();
    const correctPassword = "18/2/2000";

    if (password === correctPassword) {
        document.getElementById("passwordCard").style.display = "none";
        document.getElementById("envelopePage").style.display = "block";
    } else {
        document.getElementById("error").innerText = "الباسورد غلط 😅";
    }
}

function openEnvelope() {
    document.getElementById("letter").style.display = "block";
}

function goToBigText() {
    document.getElementById("envelopePage").style.display = "none";
    document.getElementById("bigMessage").style.display = "flex";
    startSlider();
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function startSlider() {
    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 3000);
}
