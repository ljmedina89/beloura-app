document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { nombre: "Perfume 1", imagen: "assets/perfume1.jpg", precio: "$20", enlace: "https://wa.me/593XXXXXXXXX" },
        { nombre: "Perfume 2", imagen: "assets/perfume2.jpg", precio: "$25", enlace: "https://wa.me/593XXXXXXXXX" }
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
