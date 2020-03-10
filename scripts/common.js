$(document).ready(function() {
    'use strict';

    var headerOverlay = $(".header__overlay"),
        menuOpenIcon = $(".nav__icon-menu"),
        menuCloseIcon = $(".nav-icon__close"),
        menuList = $(".main-nav"),
        searchOpenIcon = $(".nav__icon-search"),
        searchCloseIcon = $(".search__close"),
        searchBox = $(".search");

    /* =======================
    // Menu and Search
    ======================= */
    menuOpenIcon.click(function() {
        menuOpen();
    })

    menuCloseIcon.click(function() {
        menuClose();
    })

    searchOpenIcon.click(function() {
        searchOpen();
    });


    headerOverlay.click(function() {
        menuClose();
        searchClose();
    });

    function menuOpen() {
        menuList.addClass("is-open");
        headerOverlay.addClass("is-visible");
    }

    function menuClose() {
        menuList.removeClass("is-open");
        headerOverlay.removeClass("is-visible");
    }

    /* =======================
    // Responsive Videos
    ======================= */
    $(".post__content, .page__content").fitVids({
        customSelector: ['iframe[src*="ted.com"]']
    });

    /* =======================
    // Zoom Image
    ======================= */
    $(".page img, .post img").attr("data-action", "zoom");
    $(".page a img, .post a img").removeAttr("data-action", "zoom");

});