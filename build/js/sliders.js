document.addEventListener('DOMContentLoaded', function(){

    var client_width = document.documentElement.clientWidth; //     ширина окна
    var cards_list_slider_slides = 3;
    if(+client_width <= 1280){
        cards_list_slider_slides = 2;
    }

    if(+client_width <= 640){
        cards_list_slider_slides = 1;
    }


    if(document.querySelector('.cards-list__slider')){

        //  основной слайдер для карточек
        var cards_list_slider = new Swiper('.cards-list__slider', {
    
            init: true,
            slidesPerView: cards_list_slider_slides,
            speed: 600,
            spaceBetween: 24,
    
            watchOverflow: true,
            allowTouchMove: false,
    
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: '72px',
                snapOnRelease: false,
            },
    
            navigation: {
                nextEl: '.cards-list__slider-next',
                prevEl: '.cards-list__slider-prev',
            },
        
        });


        //  слайдер фоток в карточках
        var cards_list_item_img_slider = new Swiper('.cards-list-item__slider', {
    
            init: true,
            slidesPerView: 1,
            speed: 500,
            spaceBetween: 30,
        
            pagination: {
                type: 'bullets',
                el: '.swiper-pagination.cards-list-item__swiper-pagination',
            },
        
        });
    }



    //  Результат поиска и Избранное в плиточной версии
    if(document.querySelector('.table-card')){


        //  слайдер фоток в карточках
        var table_card_img_slider = new Swiper('.table-card__slider', {
    
            init: true,
            slidesPerView: 1,
            speed: 500,
            spaceBetween: 30,
        
            pagination: {
                type: 'bullets',
                el: '.swiper-pagination.table-card__swiper-pagination',
            },
        
        });

    }



    //  Галерея для стр. Объект и Помещение
    if(document.querySelector('.object-promo__galery')){


        var object_promo_galery_slider = new Swiper('.object-promo__galery', {
    
            init: true,
            slidesPerView: 1,
            speed: 500,
            spaceBetween: 30,
        
            pagination: {
                type: 'bullets',
                el: '.swiper-pagination.object-promo__pagination',
            },

            navigation: {
                nextEl: '.object-promo__next',
                prevEl: '.object-promo__prev',
            },
        
        });

    }


});