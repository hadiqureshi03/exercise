const button = document.querySelector(".button");
const fill = document.querySelector(".fill");
const overlay = document.querySelector(".overlay");
const nums = document.querySelectorAll(".num");

nums.forEach((num, i) => num.style.animationDelay = `${i}s`);

let timer;

function goBlack() {
    overlay.classList.add("black");
    timer = setTimeout(restart, 3000);
}

function restart() {
    overlay.classList.remove("black");

    const elements = [fill, ...nums];
    elements.forEach(el => el.style.animationName = "none");
    fill.offsetHeight;
    elements.forEach(el => el.style.animationName = "");
}

fill.addEventListener("animationend", goBlack);

button.addEventListener("click", () => {
    clearTimeout(timer);
    goBlack();
});
