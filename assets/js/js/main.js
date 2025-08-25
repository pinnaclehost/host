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
    spinner();
    
    
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
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
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


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



var sendEmail = document.querySelector('#sendemail');
sendEmail.addEventListener('click', () => {
    event.preventDefault();
    var popupEmail = document.getElementById('sendedemail');
    var closeBtn = document.getElementById('close-email');

    closeBtn.addEventListener('click', function() {
        popupEmail.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popupEmail) {
            popupEmail.style.display = 'none';
        }
    });

    popupEmail.style.display = 'block';
});


var openDialog = document.querySelector('#open-privacy');
openDialog.addEventListener('click', () => {
    var popup = document.getElementById('privacy');
    var closeBtn = document.getElementById('close-button');

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    popup.style.display = 'block';
})


var openTerms = document.querySelector('#open-terms');
        openTerms.addEventListener('click', () => {
            var popup2 = document.getElementById('terms');
            var closeBtn2 = document.getElementById('close-button2');

            closeBtn2.addEventListener('click', function () {
                popup2.style.display = 'none';
            });

            window.addEventListener('click', function (event) {
                if (event.target == popup) {
                    popup2.style.display = 'none';
                }
            });
            popup2.style.display = 'block';
        })


        var openDialog4 = document.querySelector('#open-regs');
        openDialog4.addEventListener('click', () => {
            var popup4 = document.getElementById('reg');
            var closeBtn4 = document.getElementById('close-button4');

            closeBtn4.addEventListener('click', function () {
                popup4.style.display = 'none';
            });

            window.addEventListener('click', function (event) {
                if (event.target == popup4) {
                    popup4.style.display = 'none';
                }
            });
            popup4.style.display = 'block';
        })