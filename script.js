function applyPreference() {
    const storeName = localStore.getItem("username");
    const bgColor = localStorage.getItem("backgroundColor");
    const fgColor = localStorage.getItem("foregroundColor");

    const greetingElement = document.getElementById("greeting");
    if (storeName && greetingElement) {
        greetingElement.textContent = "Welcome, ${storeName}!";
    }
    if (bgColor && fgColor) {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = fgColor;
    }
}

const form = document.getElementById("preferences-form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username")?.value;
        const backgroundColor = document.getElementById("background-color")?.value;
        const foregroundColor = document.getElementById("foreground-color")?.value;

        if (username) localStorage.setItem("username", username);
        if (backgroundColor) localStorage.setItem("backgroundColor", backgroundColor);
        if (foregroundColor) localStorage.setItem("foregroundColor", foregroundColor);

        applyPreference();

        alert("Your preferences have been saved!");
    });
}

applyPreference();