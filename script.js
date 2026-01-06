for (let i = 0; i < 25; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDelay = Math.random() * 5 + "s";
    flower.style.animationDuration = 8 + Math.random() * 8 + "s";
    flower.style.transform = `scale(${0.5 + Math.random()})`;

    document.body.appendChild(flower);
}
