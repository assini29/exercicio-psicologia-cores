document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("changeColorBtn");
    const text = document.getElementById("text");

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    button.addEventListener("click", () => {
        text.style.color = getRandomColor();
    });
});
