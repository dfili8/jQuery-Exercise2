"use strict"; {
    const letters = $('.letters');
    const numbers = $('.numbers');
    const newDiv = $('.newDiv');
    const menu = $('a');

    numbers.hide();
    newDiv.hide();

    menu.on('click', () => {
        newDiv.slideToggle();
    });
    $('#number').on('click', () => {
        numbers.show();
        letters.hide();
    });
    $('#letter').on('click', () => {
        letters.show();
        numbers.hide();
    });
}