document.addEventListener('DOMContentLoaded', function(){

    $('.dd__select').select2({
        closeOnSelect: true, /* закрытие после выбора, default == true */
        minimumResultsForSearch: Infinity,  /* вырубает поиск */
        
    });

    $('.dd__select').on('select2:select', function (e) {
        $(this).closest('.dd').addClass('_selected');
    });

});