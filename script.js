$(document).ready(function () {
    let flag = false
    $('.menu-btn').click(function () {
        if (!flag) {
            $('.menu').slideDown();
            $('.menu').css('display', 'flex');
            $('.l-one').css('transform', 'rotate(45deg)');
            $('.l-two').css('margin-top', '-11px');
            $('.l-two').css('transform', 'rotate(-45deg)');
            $('.l-three').css('background-color', 'transparent');
            $('.lines').css('transition', '.25s');
            $('.menu-line').css('margin-top', '12px');
        } else {
            $('.menu').slideUp();
            $('.l-one').css('transform', 'rotate(0)');
            $('.l-two').css('margin-top', '0');
            $('.l-two').css('transform', 'rotate(0)');
            $('.l-three').css('background-color', 'white');
            $('.lines').css('transition', '.25s');
            $('.menu-line').css('margin-top', '0');
        }
        flag = !flag
    })
})