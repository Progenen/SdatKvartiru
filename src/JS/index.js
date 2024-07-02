document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        const burger = document.querySelector(".header__btn-burger");
        const menu = document.querySelector(".header__menu");
        const header = document.querySelector(".header");

        document.body.append(menu);
        menu.style.paddingTop = header.clientHeight + "px";

        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
            document.body.classList.toggle("lock");
        });
    }

    if (window.innerWidth <= 576) {
        if (document.querySelector("[src-mob]")) {
            document.querySelectorAll("[src-mob]").forEach(img => {
                img.src = img.getAttribute("src-mob");
            })
        }
    }

    if (document.querySelector(".modal-form__open")) {
        $('.modal-form__open').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        
        $.magnificPopup.close();
        $(document).on('click', '.modal-form__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        document.querySelector(".thanks__btn").addEventListener("click", () => {
            document.querySelector(".thanks").classList.toggle("active");
        })
    }
});