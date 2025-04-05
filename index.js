document.addEventListener("mousemove", (e) => {
    const squares = document.querySelectorAll(".square");
    const mx = e.clientX;
    const my = e.clientY;

    squares.forEach(square => {
        const rect = square.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - mx;
        const dy = rect.top + rect.height / 2 - my;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 100) {
            square.classList.add("near");
        } else {
            square.classList.remove("near");
        };
    });
});
