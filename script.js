document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const contentPanes = document.querySelectorAll('.content-pane');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); 

            navItems.forEach(nav => nav.classList.remove('active'));
            
            this.classList.add('active');

            contentPanes.forEach(pane => pane.classList.remove('active'));

            const targetContentId = this.dataset.content; 
            const targetPane = document.getElementById(targetContentId);

            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const navItems = document.querySelectorAll('.nav-item');
    const contentPanes = document.querySelectorAll('.content-pane');

    const promoButton = document.getElementById('promoButton');
    const promoModal = document.getElementById('promoModal');
    const closeButton = document.querySelector('.close-button');
    const modalOkButton = document.querySelector('.modal-ok-button'); // Ambil tombol OK

    function openModal() {
        promoModal.classList.remove('hide');
        promoModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        promoModal.classList.add('hide');

        setTimeout(() => {
            promoModal.classList.remove('show');
            promoModal.classList.remove('hide');
            document.body.style.overflow = '';
        }, 300);
    }

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            contentPanes.forEach(pane => pane.classList.remove('active'));
            const targetContentId = this.dataset.content;
            const targetPane = document.getElementById(targetContentId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    if (promoButton) {
        promoButton.addEventListener('click', function (event) {
            event.preventDefault();
            openModal();
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (modalOkButton) {
        modalOkButton.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function (event) {
        if (promoModal.classList.contains('show') && event.target == promoModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && promoModal.classList.contains('show')) {
            closeModal();
        }
    });

    // Inisialisasi tampilan konten pertama kali load
    const initialActiveNavLink = document.querySelector('.nav-item.active');
    const initialActiveContentPane = document.querySelector('.content-pane.active');

    if (!initialActiveNavLink || !initialActiveContentPane) {
        const defaultNavItem = document.querySelector('.nav-item[data-content="highlights"]');
        const defaultContentPane = document.getElementById('highlights');
        if (defaultNavItem && defaultContentPane) {
            defaultNavItem.classList.add('active');
            defaultContentPane.classList.add('active');
        }
    }
});