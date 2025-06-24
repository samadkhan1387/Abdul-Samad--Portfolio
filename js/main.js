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


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
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
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
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


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
    // Skills & Tools Toggle
    const skillsBtn = $('#skills-btn');
    const toolsBtn = $('#tools-btn');
    const skillsGrid = $('#skills-grid');
    const toolsGrid = $('#tools-grid');
    const slider = $('#toggle-slider');

    if (skillsBtn.length && toolsBtn.length && skillsGrid.length && toolsGrid.length && slider.length) {
        const skillsBtnWidth = skillsBtn.outerWidth();
        const toolsBtnWidth = toolsBtn.outerWidth();
        
        slider.css('width', skillsBtnWidth);

        skillsBtn.on('click', function() {
            skillsGrid.css('display', 'flex');
            toolsGrid.css('display', 'none');

            $(this).addClass('active');
            toolsBtn.removeClass('active');
            
            slider.css('width', skillsBtnWidth);
            slider.css('transform', 'translateX(0)');
        });

        toolsBtn.on('click', function() {
            skillsGrid.css('display', 'none');
            toolsGrid.css('display', 'flex');

            $(this).addClass('active');
            skillsBtn.removeClass('active');
            
            slider.css('width', toolsBtnWidth);
            slider.css('transform', `translateX(${skillsBtnWidth}px)`);
        });
    }

    // Experience & Education Toggle
    const expBtn = $('#experience-btn');
    const eduBtn = $('#education-btn');
    const expContent = $('#experience-content');
    const eduContent = $('#education-content');
    const expEduSlider = $('#exp-edu-slider');

    if (expBtn.length && eduBtn.length && expContent.length && eduContent.length && expEduSlider.length) {
        const expBtnWidth = expBtn.outerWidth();
        const eduBtnWidth = eduBtn.outerWidth();
        
        expEduSlider.css('width', expBtnWidth);

        expBtn.on('click', function() {
            expContent.css('display', 'block');
            eduContent.css('display', 'none');

            $(this).addClass('active');
            eduBtn.removeClass('active');
            
            expEduSlider.css('width', expBtnWidth);
            expEduSlider.css('transform', 'translateX(0)');
        });

        eduBtn.on('click', function() {
            expContent.css('display', 'none');
            eduContent.css('display', 'block');

            $(this).addClass('active');
            expBtn.removeClass('active');
            
            expEduSlider.css('width', eduBtnWidth);
            expEduSlider.css('transform', `translateX(${expBtnWidth}px)`);
        });
    }

})(jQuery);

