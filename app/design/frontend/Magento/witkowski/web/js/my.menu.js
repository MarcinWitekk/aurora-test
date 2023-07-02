define([
    'jquery',
    'jquery/ui'
], function ($) {

    $.widget('my.menu', $.ui.menu, {
        delay: 0, // Hover menu level delay. This is good idea, when you are moving pointer and accidentally touch another option.
        options: {
            icons: {
                submenu: "ui-icon-blank" // it doesn't work. I have to set icon by css, but it would be good solution - Html Class is changed  :)
            },
        },
    });

    return $.my.menu;
});
