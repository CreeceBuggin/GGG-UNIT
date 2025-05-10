window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;

  const layers = [
    { id: "layer-50", centerOffset: 0.5 },
    { id: "layer-banks", centerOffset: 1.65 },
    { id: "layer-yayo", centerOffset: 2.5 }
  ];

  layers.forEach(({ id, centerOffset }) => {
    const layer = document.getElementById(id);
    const overlay = layer.querySelector(".overlay");

    const sectionMiddle = centerOffset * windowH;
    const distance = Math.abs((scrollY + windowH / 2) - sectionMiddle);
    const maxFade = windowH / 1.2;

    let opacity = 1 - (distance / maxFade);
    opacity = Math.max(0, Math.min(1, opacity));

    layer.style.opacity = opacity.toFixed(2);
    layer.style.pointerEvents = opacity > 0.1 ? "auto" : "none";

    // 🛠 Activer ou désactiver pointer-events du logo
    if (overlay) {
      overlay.style.pointerEvents = opacity > 0.3 ? "auto" : "none";
    }
  });
});
