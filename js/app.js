document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { nombre: "Khamra", imagen: "asset/khamra.jpg", precio: "$40", enlace: "https://wa.me/19726070561" },
        { nombre: "Asad Black", imagen: "asset/perfume2.jpg", precio: "$25", enlace: "https://wa.me/19726070561" }
    ];

    const contenedor = document.getElementById("productos");

    productos.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.precio}</p>
            <a href="${p.enlace}" target="_blank">
                <button>Comprar por WhatsApp</button>
            </a>
        `;
        contenedor.appendChild(div);
    });
});
