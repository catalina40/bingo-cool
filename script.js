let tarjetas = window.tarjetasData;
let actual = 0;

function mostrarTarjeta(i) {
  const grid = document.getElementById("bingo");
  grid.innerHTML = "";
  tarjetas[i].forEach((cancion, idx) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.textContent = cancion;
    if (cancion === "🎂") div.style.fontSize = "2.5rem";
    div.onclick = () => div.classList.toggle("tachado");
    grid.appendChild(div);
  });
  document.getElementById("contador").textContent = `Tarjeta ${i + 1} de ${tarjetas.length}`;
}

function cambiarTarjeta(direccion) {
  actual += direccion;
  if (actual < 0) actual = tarjetas.length - 1;
  if (actual >= tarjetas.length) actual = 0;
  mostrarTarjeta(actual);
}

window.onload = () => mostrarTarjeta(0);
