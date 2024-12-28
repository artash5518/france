(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        // Открытие модального окна при клике на кнопку
        // $(document).on('click', '.btn-show-model', function () {
        //     $('#modelModal').modal('show'); // Открываем модальное окно
        // });
        //
        // // Закрытие модального окна (Bootstrap сам обрабатывает закрытие по кнопке)
        // $('#modelModal').on('hide.bs.modal', function () {
        //     console.log('Модальное окно закрыто');
        // });
    });
    $(document).ready(function () {
        // Предварительная загрузка модели
        var modelUrl = "img/models/Aghjoc.html"; // Укажите путь к вашей модели
        var $iframe = $('#model3d');

        // Устанавливаем src заранее, чтобы начать загрузку
        $iframe.attr('src', modelUrl);

        // Показываем модель при открытии модального окна
        $(document).on('click', '.btn-show-model', function () {
            $iframe.show(); // Показываем iframe
            $('#modelModal').modal('show'); // Открываем модальное окно
        });

        // Очистка (опционально) при закрытии модального окна
        $('#modelModal').on('hide.bs.modal', function () {
            $iframe.hide(); // Прячем iframe, если требуется
        });
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


// Получаем кнопку и контейнер с сервисами
    const loadMoreBtn = document.getElementById('load-more-btn');
    const servicesContainer = document.getElementById('services-container');

// Счетчик для отслеживания текущего количества показанных блоков
    let currentServices = 8;

// Добавляем обработчик событий на кнопку
    loadMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Находим все скрытые сервисы
        const hiddenServices = servicesContainer.querySelectorAll('.hidden-service');

        // Показываем следующие 4 сервиса
        for (let i = 0; i < 4; i++) {
            if (hiddenServices[i]) {
                hiddenServices[i].classList.remove('hidden-service');
            }
        }

        // Если скрытых сервисов больше нет, скрываем кнопку
        if (hiddenServices.length <= 2) {
            loadMoreBtn.style.display = 'none';
        }

        // Обновляем счетчик
        currentServices += 4;

        // Плавная прокрутка вниз на 10 пикселей
        window.scrollBy({
            top: 400,
            behavior: 'smooth'
        });
    });



})(jQuery);

