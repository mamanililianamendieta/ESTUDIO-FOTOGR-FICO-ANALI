document.addEventListener('DOMContentLoaded', () => {
    
    const serviciosDB = [
        {
            id: "04",
            titulo: "Sesiones familiares",
            descripcion: "Fotografías para familias, parejas y niños. Capturamos la esencia de tu hogar y la conexión entre tus seres queridos con iluminación profesional.",
            imagen: "images/familia.jpg"
        },
        {
            id: "05",
            titulo: "Maternidad y bebés",
            descripcion: "Sesiones dedicadas y emotivas para documentar la hermosa etapa del embarazo y los primeros días de los recién nacidos con máxima ternura.",
            imagen: "images/maternidad.jpg"
        },
        {
            id: "06",
            titulo: "Fotografía corporativa",
            descripcion: "Imágenes profesionales de alta gama para perfiles empresariales, equipos de trabajo y marca personal. Proyecta confianza y liderazgo.",
            imagen: "images/corporativa.jpg"
        },
        {
            id: "07",
            titulo: "Fotografía de productos",
            descripcion: "Fotografía comercial detallada para catálogos, e-commerce y redes sociales. Resaltamos las texturas y cualidades para impulsar tus ventas.",
            imagen: "images/producto.jpg"
        },
        {
            id: "08",
            titulo: "Promociones y graduaciones",
            descripcion: "Inmortalizamos tus logros académicos. Sesiones individuales o grupales llenas de orgullo, preparadas en locación o en nuestro estudio.",
            imagen: "images/graduacion.jpg"
        },
        {
            id: "09",
            titulo: "Sesiones creativas",
            descripcion: "Producciones artísticas, temáticas y moda. Diseño de sets personalizados donde transformamos tu idea más creativa en una obra de arte visual.",
            imagen: "images/creativa.jpg"
        }
    ];

    const contenedorServicios = document.getElementById('grid-servicios');

    const renderizarServicios = () => {
        contenedorServicios.innerHTML = '';

        serviciosDB.forEach(servicio => {
            const cardElement = document.createElement('article');
            cardElement.classList.add('card');

            cardElement.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${servicio.imagen}" alt="Muestra de ${servicio.titulo}" class="card-image" onerror="this.src='https://picsum.photos/seed/${servicio.id}/600/400'">
                </div>
                <div class="card-content">
                    <span class="card-id">Servicio #${servicio.id}</span>
                    <h3 class="card-title">${servicio.titulo}</h3>
                    <p class="card-desc">${servicio.descripcion}</p>
                    <button class="btn-whatsapp" data-servicio="${servicio.titulo}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Agendar Sesión
                    </button>
                </div>
            `;

            contenedorServicios.appendChild(cardElement);
        });

        asignarEventosWhatsApp();
    };

    const asignarEventosWhatsApp = () => {
        const botones = document.querySelectorAll('.btn-whatsapp');
        const numeroTelefono = "59163585285"; 

        botones.forEach(boton => {
            boton.addEventListener('click', (evento) => {
                const nombreServicio = evento.currentTarget.getAttribute('data-servicio');
                const mensajeBase = `Hola Liliana, te escribo desde la página web. Me interesa agendar el servicio de ${nombreServicio}. ¿Podrías brindarme más información?`;
                const mensajeCodificado = encodeURIComponent(mensajeBase);
                const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
                
                window.open(urlWhatsApp, '_blank');
            });
        });
    };

    renderizarServicios();
});