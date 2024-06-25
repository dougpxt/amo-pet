$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    /* Animação quando rolar a tela para baixo */
    const sections = $('section'); /* Pega os itens no html */
    const navItems = $('.nav-item');

    $(window).on('scroll', function () { /* Animação assim que rolar a página */
        const header = $('header'); /* Adicionar a sombra */
        const scrollPosition = $(window).scroollTop() - header.outerHeight();

        let activeSectionIndex = 0;
        
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }  else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
        
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    /*ScrollReveal().reveal('#principal', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    }) */

    /*ScrollReveal().reveal('.card-pets', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    */

    /*ScrollReveal().reveal('.card-pets', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    */

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })


});




