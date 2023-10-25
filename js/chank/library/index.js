(function ($) {

    $('.filters ul li').click(function () {
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    })

    let langthPage = document.querySelectorAll('.join')[0].outerHTML.length;
    console.log(langthPage);
    
    $('.maskBody').css('min-height',langthPage + 'px')






})(window.jQuery);