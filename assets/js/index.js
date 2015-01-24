/**
 * Main JS file for Noir behaviours
 */

/*globals jQuery, document */
(function ($) {
    'use strict';
    
    // From https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
    function isTouchDevice() {
        return 'ontouchstart' in window // works on most browsers 
            || 'onmsgesturechange' in window; // works on ie10
    };
    
    if (isTouchDevice()) {
        $('.sidebar').on('click', function () {
            $(this).toggleClass('open');
        });
    } else {
        $('.sidebar').addClass('hover');
    }

    $(document).ready(function () {
        $('.post-content').fitVids();
    });
}(jQuery));
