const productos = [
    { nombre: "Ositos", precio: 3500, id: "1", stock:10, img: "../img/ositos.jpg", idCat: "1", descripcion: "Estos dos dulces ositos son el regalo perfecto para celebrar el amor y la amistad. Hechos con amor, se complementan el uno al otro y serán los compañeros perfectos para compartir aventuras y abrazos." },
    { nombre: "Dragon", precio: 2880, id: "2", stock:10, img: "../img/coco.jpg", idCat: "1", descripcion: "Descubre la magia de los cuentos con nuestro amigurumi dragón. Este compañero mágico está listo para volar por los reinos de la imaginación. Sus detalles intrincados lo convierten en una pieza única." },
    { nombre: "Plantita", precio: 3200, id: "3", stock:10, img: "../img/plantita.jpg", idCat: "1", descripcion: "¡Una planta de diversión! Nuestro amigurumi planta es el muñeco perfecto para jugar. Con hilos suaves y colores vibrantes, este juguete lleno de vida despierta la imaginación. Sus detalles encantadores aseguran risas y aventuras. ¡Una sonrisa en forma de muñeco!" },
    { nombre: "Camión", precio: 3400, id: "4", stock:10, img: "../img/camion.jpg", idCat: "2", descripcion: "¡La diversión está asegurada con este camión de madera! Viene equipado con bloques de colores brillantes que ayudarán a los pequeños a desarrollar sus habilidades motoras mientras se divierten. Además, cuenta con una correa para arrastrarlo fácilmente por todas partes." },
    { nombre: "Colectivo", precio: 4000, id: "5", stock:10, img: "../img/colectivo.jpg", idCat: "2", descripcion: "Imagina un viaje mágico por la ciudad con este hermoso colectivo de madera. Viene con tres pasajeros y un chofer, listos para llevar a tus hijos a un mundo lleno de diversión y aventuras." },
    { nombre: "Trencito", precio: 3200, id: "6", stock:10, img: "../img/trencito.jpg", idCat: "2", descripcion: "Choo-choo, aquí viene el tren de madera. Este juguete clásico cuenta con una correa para arrastrarlo y promete horas de diversión. Deja que tu pequeño conductor explore nuevos horizontes mientras aprende a coordinar sus movimientos." },
    { nombre: "Mameluco", precio: 2800, id: "7", stock:10, img: "../img/ropita.jpg", idCat: "3", descripcion: "Mantén a tu bebé cómodo y elegante con este adorable mameluco tejido a crochet. Su diseño único y calidez asegurarán que tu pequeño se sienta acogido mientras se ve absolutamente adorable." },
    { nombre: "Vestido", precio: 3100, id: "8", stock:10, img: "../img/vestido.jpg", idCat: "3", descripcion: "Nada más encantador que un vestidito de lana hecho a mano. Con su lazo en el cuello tejido a crochet, este vestidito es perfecto para ocasiones especiales o simplemente para hacer que tu pequeña se sienta como una princesa." },
    { nombre: "Conjunto", precio: 1900, id: "9", stock:10, img: "../img/conjunto.jpg", idCat: "3", descripcion: "Mantén a tu bebé abrigado y a la moda con este conjunto de botitas de lana y gorrito. Cada detalle está hecho a mano con lana suave y decoraciones en los colores que elijas, agregando un toque de dulzura a su guardarropa." },
    { nombre: "Globito", precio: 5000, id: "10", stock:10, img: "../img/globo.jpg", idCat: "4", descripcion: "Deja que la imaginación de tu pequeño/a vuele alto con este móvil en forma de globo aerostático. El adorable osito que lo acompaña es el copiloto perfecto para explorar el mundo de los sueños."},
    { nombre: "Bloques", precio: 2600, id: "11", stock:10, img: "../img/bloques.jpg", idCat: "4", descripcion: "Estos bloques de colores son más que simples juguetes. Personalizados con el nombre de tu bebé, son una hermosa pieza decorativa y un regalo que perdurará en el tiempo, fomentando el aprendizaje y la creatividad." },
    { nombre: "Abejitas", precio: 4500, id: "12", stock:10, img: "../img/abejita.jpg", idCat: "4", descripcion: "Crea un ambiente mágico en la habitación de tu pequeño/a con este encantador móvil de abejitas. Hecho con atención al detalle y colores vibrantes, este móvil seguramente capturará la imaginación de tu bebé." },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}