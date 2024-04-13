const box = document.querySelector(".box");

const observer = new ResizeObserver((entries) => {
  const boxElement = entries[0];
  const isSmall = boxElement.contentRect.width < 700;
  boxElement.target.style.backgroundColor = isSmall ? "blue" : "red";
});

observer.observe(box);
