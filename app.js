document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data ---
    const serviciosDB = [
        { id: "04", titulo: "Sesiones familiares", descripcion: "Fotografías para familias, parejas y niños. Capturamos la esencia de tu hogar y la conexión entre tus seres queridos con iluminación profesional.", imagen: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "05", titulo: "Maternidad y bebés", descripcion: "Sesiones dedicadas y emotivas para documentar la hermosa etapa del embarazo y los primeros días de los recién nacidos con máxima ternura.", imagen: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "06", titulo: "Fotografía corporativa", descripcion: "Imágenes profesionales de alta gama para perfiles empresariales, equipos de trabajo y marca personal. Proyecta confianza y liderazgo.", imagen: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "07", titulo: "Fotografía de productos", descripcion: "Fotografía comercial detallada para catálogos, e-commerce y redes sociales. Resaltamos las texturas y cualidades para impulsar tus ventas.", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "08", titulo: "Promociones y graduaciones", descripcion: "Inmortalizamos tus logros académicos. Sesiones individuales o grupales llenas de orgullo, preparadas en locación o en nuestro estudio.", imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "09", titulo: "Sesiones creativas", descripcion: "Producciones artísticas, temáticas y moda. Diseño de sets personalizados donde transformamos tu idea más creativa en una obra de arte visual.", imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    const portfolioDB = [
        { img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Retrato Artístico" },
        { img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Boda en exteriores" },
        { img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Fotografía Editorial" },
        { img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Moda" },
        { img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Producto Premium" },
        { img: "https://images.unsplash.com/photo-1505315989100-349f7b11cebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Sesión Familiar" }
    ];

    // --- DOM Elements ---
    const contenedorServicios = document.getElementById('grid-servicios');
    const contenedorPortafolio = document.getElementById('masonry-grid');
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const allLinks = document.querySelectorAll('a[href^="#"]');
    const sections = [
        document.getElementById('inicio'),
        document.getElementById('portafolio'),
        document.getElementById('servicios'),
        document.getElementById('contacto')
    ];
    const yearSpan = document.getElementById('current-year');

    // --- Render Functions ---
    const renderizarServicios = () => {
        contenedorServicios.innerHTML = '';
        serviciosDB.forEach((servicio, index) => {
            const delay = (index % 3) * 0.15;
            const cardElement = document.createElement('article');
            cardElement.className = `card reveal`;
            cardElement.style.transitionDelay = `${delay}s`;

            cardElement.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${servicio.imagen}" alt="Muestra de ${servicio.titulo}" class="card-image" loading="lazy">
                </div>
                <div class="card-content">
                    <span class="card-id">Servicio #${servicio.id}</span>
                    <h3 class="card-title">${servicio.titulo}</h3>
                    <p class="card-desc">${servicio.descripcion}</p>
                    <button class="btn-whatsapp" data-servicio="${servicio.titulo}">
                        <i class="fab fa-whatsapp"></i> Agendar Sesión
                    </button>
                </div>
            `;
            contenedorServicios.appendChild(cardElement);
        });
    };

    const renderizarPortafolio = () => {
        contenedorPortafolio.innerHTML = '';
        portfolioDB.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'masonry-item';
            div.innerHTML = `
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="masonry-overlay">
                    <h3>${item.title}</h3>
                </div>
            `;
            contenedorPortafolio.appendChild(div);
        });
    };

    // --- Events & Interactivity ---
    const asignarEventosWhatsApp = () => {
        const botones = document.querySelectorAll('.btn-whatsapp');
        const numeroTelefono = "59163585285"; 

        botones.forEach(boton => {
            boton.addEventListener('click', (evento) => {
                const nombreServicio = evento.currentTarget.getAttribute('data-servicio');
                const mensajeBase = `Hola Liliana, te escribo desde tu página web. Me interesa agendar el servicio de *${nombreServicio}*. ¿Podrías brindarme más información y disponibilidad?`;
                const mensajeCodificado = encodeURIComponent(mensajeBase);
                const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
                window.open(urlWhatsApp, '_blank');
            });
        });
    };

    // --- SPA Navigation Logic (Single Page Application) ---
    const navigateToSection = (targetId) => {
        // Hide all sections
        sections.forEach(sec => {
            if (sec) {
                sec.style.display = 'none';
                sec.classList.remove('fade-in-section');
            }
        });

        // Show targeted section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Apply proper display based on section type
            if (targetId === 'inicio') {
                targetSection.style.display = 'flex';
            } else {
                targetSection.style.display = 'block';
            }
            
            // Add animation class
            setTimeout(() => {
                targetSection.classList.add('fade-in-section');
                
                // Trigger reveals inside the section
                const reveals = targetSection.querySelectorAll('.reveal');
                reveals.forEach(el => el.classList.add('active'));
            }, 50);
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Always make navbar background dark when not in "inicio"
        if (targetId !== 'inicio') {
            navbar.classList.add('scrolled');
        } else if (window.scrollY < 50) {
            navbar.classList.remove('scrolled');
        }
    };

    // Attach click events to all anchor links
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            if (document.getElementById(targetId)) {
                e.preventDefault();
                navigateToSection(targetId);
                
                // Close mobile menu if open
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Navbar Scroll Effect (only relevant if page content is long, but kept for safety)
    window.addEventListener('scroll', () => {
        // Only toggle if we are on the 'inicio' page
        const inicioSec = document.getElementById('inicio');
        if (inicioSec && inicioSec.style.display !== 'none') {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // --- Initialization ---
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    renderizarPortafolio();
    renderizarServicios();
    asignarEventosWhatsApp();
    
    // Start by showing only the hero (inicio)
    navigateToSection('inicio');
});