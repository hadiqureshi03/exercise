const queueNumber = document.querySelector("#queue-number");
const loggedAt = document.querySelector("#logged-at");

let lastValue = null;

async function fetchQueue() {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();

    const newValue = data.inQueue;

    loggedAt.textContent = data.loggedAt;

    if (lastValue !== null && lastValue !== newValue) {
        queueNumber.classList.add("pop");
    }

    queueNumber.textContent = newValue;
    lastValue = newValue;
}

queueNumber.addEventListener("transitionend", () => {
    queueNumber.classList.remove("pop");
});

fetchQueue();
setInterval(fetchQueue, 10000);