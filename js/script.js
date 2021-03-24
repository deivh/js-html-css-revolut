function showHoverMenu() { //modifiche generali applicate seguendo la correzione in classe
    var me = $(this);
    $('.entry').removeClass('active');
    me.addClass('active');
}
function clickMenu() {
    var me = $(this);    
    console.log(me);
    me.toggleClass('active');
}
function closeAll() {
    var me = $(this);
    console.log(me);
    if (!me.hasClass('entry')) {
        $('.entry').removeClass('active');
    }
}
function init() {
    $('.entry').mouseenter(showHoverMenu);
    $('.entry').click(clickMenu);
    $(document).click(closeAll);
}

$(document).ready(init);