document.addEventListener('DOMContentLoaded', function(){

//  Глобальные переменные 

var client_width = document.documentElement.clientWidth; //     ширина окна


//  Бургер
document.querySelector('.burger').addEventListener('click', function(e){

    var burger = e.target;
    var menu = document.querySelector('.side-menu');

    if(!burger.classList.contains('_show')){
        burger.classList.add('_show');
        menu.classList.add('_show');
    } else {
        burger.classList.remove('_show');
        menu.classList.remove('_show');
    }

});



//  Scroll, если высота левого блока > 100vh
var left_block_cont = document.querySelector('.side__container');
var left_block_cont_height = 0;
var client_inner_height = window.innerHeight;

function add_scroll_or_not(){

    left_block_cont_height = window.getComputedStyle(left_block_cont).height;

    if(+client_inner_height < parseInt(left_block_cont_height, 10)){
        left_block_cont.classList.add('_scroll');
    } else {
        left_block_cont.classList.remove('_scroll');   
    }

};
add_scroll_or_not();



//  Показать дополнительные параметры фильтра
var show_filter_subs_btn = document.querySelector('.filter__show-sub');
var filter_subs = document.querySelector('.filter-sub');
show_filter_subs_btn.addEventListener('click', function(e){

    if(!filter_subs.classList.contains('_show')){
        filter_subs.classList.add('_show');
        show_filter_subs_btn.innerText = 'Скрыть';
    } else {
        filter_subs.classList.remove('_show');
        show_filter_subs_btn.innerText = 'Дополнительные параметры';
    }

    if(!left_block_cont.classList.contains('_scroll')){
      add_scroll_or_not();
    }
    
});



//  Показ фильтра для <768px
if(+client_width <= 768){

    var filter = document.querySelector('.filter');
    var filter_h = window.getComputedStyle(filter).height;
    var filter_patop = window.getComputedStyle(filter).paddingTop;
    var filter_pabot = window.getComputedStyle(filter).paddingBottom;
    var filter_mabot = window.getComputedStyle(filter).marginBottom;

    filter.setAttribute('style', 'height: 0; padding-top: 0; padding-bottom: 0; margin-bottom: 0;');

    var filter_hide_btn = document.querySelector('.filter__hide-btn');
    filter_hide_btn.addEventListener('click', function(){

        if(!filter_hide_btn.classList.contains('_show')){
            filter_hide_btn.classList.add('_show');
            filter_hide_btn.innerText = 'Скрыть фильтр';
            filter.setAttribute('style', 'height: ' + filter_h + '; ' + 'padding-top: ' + filter_patop + ';' + 'padding-bottom: ' + filter_pabot + ';' + 'margin-bottom: ' + filter_mabot + ';');

        } else {
            filter_hide_btn.classList.remove('_show');
            filter_hide_btn.innerText = 'Показать фильтр';
            filter.setAttribute('style', 'height: 0; padding-top: 0; padding-bottom: 0; margin-bottom: 0;');
        }

    });
    
}



//  Управление формой на стр. Контакты

if(document.querySelector('.contacts-form__form')){


var contacts_form = document.querySelector('.contacts-form__form');
var contacts_form_next_btn = contacts_form.querySelector('[next]');
var contacts_form_question = contacts_form.querySelector('[question]');
var contacts_form_step_1 = contacts_form.querySelector('[form-step="1"]');
var contacts_form_step_2 = contacts_form.querySelector('[form-step="2"]');


contacts_form_next_btn.addEventListener('click', function(){

    if(contacts_form_question.value != ''){
        contacts_form_question.classList.remove('_alert');
        contacts_form_step_1.classList.remove('_show');
        contacts_form_step_2.classList.add('_show');
    } else {
        contacts_form_question.classList.add('_alert');
    }

});

}



//  Цветные плашечки для свободных помещений, стр. "Главная"
if(document.querySelector('.home-bc')){

    var bill_width = parseInt(window.getComputedStyle(document.querySelector('.home-bc-item-bill')).width, 10);

    Array.from(document.querySelectorAll('.home-bc-item-bill__amount')).forEach(function(each){

        var low_percent = 0.1; //   начиная с какого процентного отношения хуячим красный цвет для плашки ( по дефолту 10% )

        var each_all = +each.getAttribute('all');
        var each_free = +each.innerHTML;
        var each_percent = each_free / each_all;
        // console.log(each_all + ' -- ' + each_free + ' -- ' + each_free / each_all * 100 + '%');

        if(each_percent <= low_percent){
            each.classList.add('_low');
        } else {
            var each_width = bill_width * each_percent;
            each.setAttribute('style', 'width: ' + each_width + 'px;');
        }


    });

}



//  Тумблеры на стр. Контакты
if(document.querySelector('.contacts-map')){

    var items = Array.from(document.querySelectorAll('.contacts-map-item'));

    //  первый сразу отображаем
    items[0].classList.add('_show');

    items.forEach(function(each){

        each.addEventListener('click', function(e){

            if(e.target.closest('.contacts-map-item__heading')){

                if(!each.classList.contains('_show')){

                    items.forEach(function(each){
                        each.classList.remove('_show');
                    });

                    each.classList.add('_show');

                } else {
                    each.classList.remove('_show');
                }

            }
        });
    });
}



//  Тумблеры для стр. Сервисы
if(document.querySelector('.service-cam')){

    Array.from(document.querySelectorAll('.service-cam__ctrl')).forEach(function(each){
        each.addEventListener('click', function(e){
            var each_id = each.getAttribute('cam-id');
            document.querySelector('.service-cam__ctrl._current').classList.remove('_current');
            each.classList.add('_current');

            document.querySelector('.service-cam-item._show').classList.remove('_show');
            document.querySelector('.service-cam-item[cam-id="' + each_id + '"]').classList.add('_show');
        });
    });

}






//  Раскрывающиеся информашки ( faq вопрос-ответ )
if(document.querySelector('.dd-faq')){

    Array.from(document.querySelectorAll('.dd-faq')).forEach(function(each){

        //  1
        var each_content = each.querySelector('.dd-faq__content');
        var each_content_height = 0;
        var each_content_pabot = 0;
        var each_header = each.querySelector('.dd-faq__header');

        each_content_height = window.getComputedStyle(each_content).height;
        each_content_pabot = window.getComputedStyle(each_content).paddingBottom;
        if(!each.classList.contains('_show')){
            each_content.style.height = 0;
            each_content.style.paddingBottom = 0;
        }


        each.addEventListener('click', function(e){


            if(e.target.closest('.dd-faq__header')){

                if(!each.classList.contains('_show')){
                    each_content.style.height = each_content_height;
                    each_content.style.paddingBottom = each_content_pabot;
                    each.classList.add('_show');
                } else {
                    each_content.style.paddingBottom = 0;
                    each_content.style.height = 0;
                    each.classList.remove('_show');
                }

            }


        });

    });

}






//  Datepicker для синей формы
if(document.querySelector('.form-gg')){

    var form_gg_datepicker = document.querySelector('#form_gg_datepicker');
    form_gg_datepicker.addEventListener('focus', function(e){
        e.target.closest('.dd').querySelector('.dd__label').classList.add('_focus');
        e.target.closest('.dd').querySelector('.dd__arrow').classList.add('_focus');
    });

    $( "#form_gg_datepicker" ).datepicker({

        dateFormat : 'dd.mm.yy',
        dayNames: [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ],
        dayNamesMin : [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],

        onClose: function(){

            if(this.value == ''){
                this.closest('.dd').querySelector('.dd__label').classList.remove('_focus');
                this.closest('.dd').querySelector('.dd__arrow').classList.remove('_focus');

            }   

        },

    });
}



//  Datepicker для серой формы
if(document.querySelector('.form-gg-grey')){

    var form_gg_grey_datepickers = Array.from(document.querySelectorAll('.form-gg-grey .dd__date input'));
    form_gg_grey_datepickers.forEach(function(each){

        each.addEventListener('focus', function(e){
            e.target.closest('.dd').querySelector('.dd__label').classList.add('_focus');
            e.target.closest('.dd').querySelector('.dd__arrow').classList.add('_focus');
        });

    })

    $( ".form-gg-grey .dd__date input" ).datepicker({

        dateFormat : 'dd.mm.yy',
        dayNames: [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ],
        dayNamesMin : [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],

        onClose: function(){

            if(this.value == ''){
                this.closest('.dd').querySelector('.dd__label').classList.remove('_focus');
                this.closest('.dd').querySelector('.dd__arrow').classList.remove('_focus');

            }   

        },

    });
}


//  END
});