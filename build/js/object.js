document.addEventListener('DOMContentLoaded', function(){

var client_width = document.documentElement.clientWidth; //     ширина окна
    
    
if(document.querySelector('.object-main')){

    //  Цветные плашечки для свободных помещений ( зеленое/красное заполнение )
    var bill_width = parseInt(window.getComputedStyle(document.querySelector('.object-main-type-heading')).width, 10);
    
    Array.from(document.querySelectorAll('.object-main-type-heading__amount')).forEach(function(each){
    
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



    //  отображение информации по помещениям

    var object_page_container = document.querySelector('.object-main');
    var object_rooms = Array.from(document.querySelectorAll('.object-main-room'));
    var object_rooms_heading = Array.from(document.querySelectorAll('.object-main-room-heading'));

    object_page_container.addEventListener('click', function(e){

        if(e.target.closest('.object-main-room-heading')){

            //  выключаем текущую комнату
            object_page_container.querySelector('.object-main-room._show').classList.remove('_show');

            //  отображаем кликнутую комнату
            e.target.closest('.object-main-room').classList.add('_show');

        }

    });



    //  Жрет разметка контейнера с кнопками Этажей и генерит аналог перед датой обновления помещения
    function create_floors(){

        var update_date = document.querySelector('.object-main__update-date');
        var floors_wrap_old =  document.querySelector('.object-main__floors');

        var floors_wrap_new = document.createElement('div');
        floors_wrap_new.classList = 'object-main__floors _mobile';
        floors_wrap_new.innerHTML = floors_wrap_old.innerHTML;

        floors_wrap_old.remove();

        update_date.insertAdjacentElement('beforebegin', floors_wrap_new);
    };


    if(client_width <= 640) {
        create_floors();
    }





} // if для этой страницы






});