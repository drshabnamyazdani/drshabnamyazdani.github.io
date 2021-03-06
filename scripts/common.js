
var param = document.URL.substring(document.URL.lastIndexOf('#') + 1);
var page = isNaN(Number(param)) ? 0 : Number(param)-1;

changePage('next');

function changePage(dir) {
    const count = 4;
    var articles = document.getElementsByClassName('article');
    if (page >= 1) {
        $("html, body")
            .stop()
            .animate({ scrollTop: 900 }, "slow", "swing");
    }
    page = dir === 'next' ? page + 1 : page - 1;
    page = page < 1 ? 1 : page;
    page = page * count >= articles.length + count ? page - 1 : page;

    document.getElementById('prev').className = (page === 1) ? 'disabled' : 'previous-link';
    document.getElementById('next').className = (page * count >= articles.length) ? 'disabled' : 'next-link';
    document.getElementById('prev').href = "#" + Number(page);
    document.getElementById('next').href = "#" + Number(page);
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    for (var i = (page - 1) * count; i < page * count; i++) {
        if (articles[i]) {
            articles[i].style.display = 'block';
        }
    }


}

$(document).ready(function () {
    'use strict';

    var headerOverlay = $(".header__overlay"),
        menuOpenIcon = $(".nav__icon-menu"),
        menuCloseIcon = $(".nav-icon__close"),
        menuList = $(".main-nav");

    menuOpenIcon.click(function () {
        menuOpen();
    })

    menuCloseIcon.click(function () {
        menuClose();
    })

    headerOverlay.click(function () {
        menuClose();
    });

    function menuOpen() {
        menuList.addClass("is-open");
        headerOverlay.addClass("is-visible");
    }

    function menuClose() {
        menuList.removeClass("is-open");
        headerOverlay.removeClass("is-visible");
    }

});




particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 600,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 1.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 0.5
        },
        "move": {
            "enable": true,
            "speed": 0.9,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "100% 100%",
        "background_repeat": "repeat",
        "background_size": "cover"
    }
});