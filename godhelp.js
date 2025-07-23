function open_bar() {
    var menu = document.getElementById('menu');
    var menu_button = document.getElementById('menu_button');
    var botton_menu = document.getElementById('bottom-menu-button');
    var top_menu = document.getElementById('top-menu-button');
    var menu_pallu = document.getElementById('menu-tran');
    const menu_hidden = window.getComputedStyle(menu).visibility;


    if (menu_hidden == 'hidden') {
        menu_pallu.style.visibility = 'visible';
        botton_menu.style.animation = "bot_ani 1s forwards";
        top_menu.style.animation = "top_ani 1s forwards";
        menu_pallu.style.animation = "pallu 5s forwards";
        setTimeout(function () {
            menu.style.visibility = 'visible';
        }, 1000);
        setTimeout(function () {
            menu_pallu.style.visibility = 'hidden';
        }, 1800);

    } else if (menu_hidden == 'visible') {
        menu_pallu.style.visibility = 'visible';
        botton_menu.style.animation = "bot_ani_r 1s forwards ";
        top_menu.style.animation = "top_ani_r 1s forwards";
        menu_pallu.style.animation = "pallu-r 3s forwards";
        setTimeout(function () {
            menu.style.visibility = 'hidden';
        }, 1250);
        setTimeout(function () {
            menu_pallu.style.visibility = 'hidden';
        }, 1800);

    } else {
        menu.style.background = 'red';
    }
}

document.addEventListener('DOMContentLoaded', page);

function page() {
    var home_click = document.getElementById('home_click');
    var goal_click = document.getElementById('goal_click');
    var fun_click = document.getElementById('fun_click');
    var pro_click = document.getElementById('pro_click');

    var home = document.getElementById('home');
    var goal = document.getElementById('goal');
    var fun = document.getElementById('fun');
    var pro = document.getElementById('pro');

    var botton_menu = document.getElementById('bottom-menu-button');
    var top_menu = document.getElementById('top-menu-button');
    var menu_pallu = document.getElementById('menu-tran');


    home_click.onclick = function () {
        botton_menu.style.animation = "bot_ani_r 1s forwards ";
        top_menu.style.animation = "top_ani_r 1s forwards";
        menu.style.visibility = 'hidden';
        menu_pallu.style.animation = "pallu-r 1s forwards";
        home.scrollIntoView({
            behavior: 'smooth'
        
        });
    };

    goal_click.onclick = function () {
        menu.style.visibility = 'hidden';
        botton_menu.style.animation = "bot_ani_r 1s forwards ";
        top_menu.style.animation = "top_ani_r 1s forwards";
        menu.style.visibility = 'hidden';
        menu_pallu.style.animation = "pallu-r 1s forwards";
        goal.scrollIntoView({
            behavior: 'smooth'
        });
    };

    fun_click.onclick = function () {
        menu.style.visibility = 'hidden';
        botton_menu.style.animation = "bot_ani_r 1s forwards ";
        top_menu.style.animation = "top_ani_r 1s forwards";
        menu.style.visibility = 'hidden';
        menu_pallu.style.animation = "pallu-r 1s forwards";
        fun.scrollIntoView({
            behavior: 'smooth'
        });
    };

    pro_click.onclick = function () {
        menu.style.visibility = 'hidden';
        botton_menu.style.animation = "bot_ani_r 1s forwards ";
        top_menu.style.animation = "top_ani_r 1s forwards";
        menu.style.visibility = 'hidden';
        menu_pallu.style.animation = "pallu-r 1s forwards";
        pro.scrollIntoView({
            behavior: 'smooth'
        });
    };

}


