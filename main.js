
document.addEventListener("DOMContentLoaded", function() {
    // Menu Mobile.
    function animarMenu() {
        const btn = document.getElementById('btn-menu');
        const menuDiv = document.getElementById('menu-mobile');
        btn.classList.toggle('ativar');
        menuDiv.classList.toggle('abrir');
    }

    const btnMenu = document.getElementById('btn-menu');
    btnMenu.addEventListener('click', animarMenu);

    const mobileLinks = document.querySelectorAll('.menu-mobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', animarMenu);
    });
// Dark e Light.
    const trilho = document.getElementById('trilho');
    const body = document.querySelector('body');
    trilho.addEventListener('click', () => {
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');
    });
// Interação de Escrita e ícons.
    const texts = [
        { element: document.getElementById("text0"), delay: 0 },
        { element: document.getElementById("text1"), text: "Olá, visitante!", delay: 1000 },
        { element: document.getElementById("text2"), text: "Meu nome é Sarah", delay: 3000 },
        { element: document.getElementById("text3"), text: "</", delay: 4000 },
        { element: document.getElementById("text4"), text: "Sales Development Representative (SDR)", delay: 5000 },
        { element: document.getElementById("text5"), text: ">", delay: 6000 }
    ];

    function showElement(element, delay) {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }, delay);
    }

    function typeText(element, text, delay, callback) {
        showElement(element, delay);
        setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                element.textContent += text[index];
                index++;
                if (index === text.length) {
                    clearInterval(interval);
                    if (callback) callback();
                }
            }, 60);
        }, delay);
    }

    function showIcons() {
        const icons = document.querySelectorAll('.icon-inicio a');
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.remove('hidden');
                icon.classList.add('visible');
            }, index * 500);
        });
    }

    texts.forEach(({ element, text, delay }, index) => {
        if (text) {
            typeText(element, text, delay, index === texts.length - 1 ? showIcons : null);
        } else {
            showElement(element, delay);
        }
    });

    window.addEventListener('scroll', () => {
        const topoDoSite = document.querySelector('.topo-do-site');
        const isDarkMode = document.body.classList.contains('dark');
        if (topoDoSite) {
            if (window.scrollY > 100) {
                topoDoSite.classList.add('scrolled');
            } else {
                topoDoSite.classList.remove('scrolled');
            }

            if (isDarkMode) {
                topoDoSite.style.backgroundColor = '#000';
            } else {
                topoDoSite.style.backgroundColor = 'transparent';
            }
        }
    });
// interação no Avatar.
    function replaceImage() {
        const imageElement = document.getElementById('avatarImage');
        if (imageElement) {
            imageElement.src = './img/avataaars.png';
        }
    }

    setTimeout(replaceImage, 4900);
});


// sobre 

document.addEventListener('DOMContentLoaded', function() {
    const sectionSobre = document.querySelector('.sobre');
    const options = {
        root: null, // Usa o viewport como o root
        rootMargin: '0px',
        threshold: 0.1 // Ativa a animação quando 10% da seção estiver visível
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionSobre.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    observer.observe(sectionSobre);
});



// Scroll to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Função para verificar a rolagem e mostrar/ocultar o botão
    function handleScroll() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    // Adicionar o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Inicialmente ocultar o botão se estiver no topo ao carregar a página
    handleScroll();

    // Adicionar o evento de clique para rolar para o topo
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});




// mode-toggle-mobile
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Verificar o modo atual no localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark' || (!currentMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // Aplicar modo escuro se estiver configurado ou se for a preferência do sistema
        document.body.classList.add('dark');
        sunIcon.style.display = 'none';  // Esconder sol para modo escuro
        moonIcon.style.display = 'inline';   // Mostrar lua para modo escuro
    } else {
        // Aplicar modo claro se não estiver configurado ou se for a preferência do sistema
        document.body.classList.remove('dark');
        sunIcon.style.display = 'inline';  // Mostrar sol para modo claro
        moonIcon.style.display = 'none';   // Esconder lua para modo claro
    }

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
            localStorage.setItem('mode', 'dark');
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
            localStorage.setItem('mode', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const menuMobile = document.getElementById('menu-mobile');
    const btnMenu = document.getElementById('btn-menu');

    modeToggle.addEventListener('click', () => {
        // Fechar o menu mobile se estiver aberto
        if (menuMobile.classList.contains('abrir')) {
            menuMobile.classList.remove('abrir');
            btnMenu.classList.remove('ativar');
        }
    });
});


window.addEventListener('load', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        // Aguarda um breve intervalo para garantir que todos os recursos estejam carregados
        setTimeout(() => {
            homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
});














  
















