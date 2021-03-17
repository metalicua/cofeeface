$( document ).ready(function() {
    var $navLink = $('.nav__link'),
        $mobMenu = $('.header__linkMenu'),
        $nav = $('.nav'),
        $ratingItem = $('.rating__link'),
        $bigSliger = $('.b-slider__wrapp'),
        $prevArrowBig = $('.b-slider__left-arrow'),
        $nextArrowBig = $('.b-slider__right-arrow'),
        $smallSlider = $('.s-slider__box'),
        $prevArrowSmall = $('.s-slider__left-arrow'),
        $nextArrowSmall = $('.s-slider__right-arrow');


        $navLink.on('click', function(e){
           e.preventDefault();

           $navLink.removeClass('nav__link--active');
           $(this).addClass('nav__link--active');
        });

        $mobMenu.on('click', function(e){
            e.preventDefault();
            var $displayAttr = $nav.css('display');

            if ($displayAttr == 'none'){
                $nav.show('slow');
                return;
            }else{
                $nav.hide('slow');
            }
        });

        // Rating
        $ratingItem.on('click', function(e){
            e.preventDefault();
            var $value = $(this).data('rating');
            
            $ratingItem.removeClass('rating__link--active');
            
            for (i = 0; i < $value; i++) {
                $ratingItem[i].classList.add('rating__link--active');
            }
             
        });

        // Big Slider 
        $bigSliger.slick({
            infinite: true,
            prevArrow: $prevArrowBig,
            nextArrow: $nextArrowBig,
            dots: false,
        });

        // Small slider
        $smallSlider.slick({
            infinite: true,
            prevArrow: $prevArrowSmall,
            nextArrow: $nextArrowSmall,
            slidesToShow: 6,
            centerMode: true,   
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,  
                    
                  }
                },
                {
                  breakpoint:576,
                  settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,  
                                  
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false, 
                    
                  }
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 4,
                      centerMode: true,             
                    }
                  },
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 6,
                      centerMode: true,             
                    }
                  }
              ]
        });
});