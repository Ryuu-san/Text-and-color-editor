var arr = [];

function massif() {
    var p = document.getElementById('out');
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + "<br>" + "<hr>";
    }
    p.innerHTML = str;
}

massif();

function add() {
    var field = document.getElementById('field').value;
    arr.push(field);
    massif();
    document.getElementById('field').value = 'Hello my friends';
    document.getElementById('field').placeholder = 'Введите что-нибудь';
}

function del() {
    arr.pop();
    massif();
}

function dis_button() {
    button.disabled = this.value.trim().length === 0;
}
field.addEventListener('input', dis_button, false);
dis_button.call(field);

function add_color_man() {
    document.getElementById('add_color_man').style.color = "#3ba3f8";
    document.getElementById('add_color_woman').style.color = "#ff0289";
    document.getElementById('field').style.color = "#3ba3f8"
    document.getElementById('out').style.color = "#3ba3f8";
}

function add_color_woman() {
    document.getElementById('add_color_man').style.color = "#047fe4";
    document.getElementById('add_color_woman').style.color = "#ff7eb4";
    document.getElementById('field').style.color = "#ff7eb4"
    document.getElementById('out').style.color = "#ff7eb4";
}

function reset_changes() {
    document.getElementById('add_color_man').style.color = "#047fe4";
    document.getElementById('add_color_woman').style.color = "#ff0289";
    document.getElementById('out').style.color = "black";
    document.getElementById('field').style.color = "black"
    document.getElementById('out').style.fontFamily = "nherit";
}

function reset_random_values() {
    document.getElementById('menu').style.backgroundColor = "#aec9a0";
    document.querySelector('body').style.backgroundColor = "white";
}


function random_background() {
    var color = Math.floor(Math.random() * 999999);
    var elem = document.getElementById('menu');
    color = "#" + color;
    elem.style.backgroundColor = color;
}

function random_color_text() {
    var color = Math.floor(Math.random() * 999999);
    var elem = document.getElementById('out');
    var elem_2 = document.getElementById('field');
    color = "#" + color;
    elem.style.color = color;
    elem_2.style.color = color;
    document.getElementById('add_color_man').style.color = "#047fe4";
    document.getElementById('add_color_woman').style.color = "#ff0289";
}

function random_background_body() {
    var color = Math.floor(Math.random() * 999999);
    var elem = document.querySelector('body');
    color = "#" + color;
    elem.style.backgroundColor = color;
}

$(_ => {
    $('.open_the_font_family').on('click', e => {
        $(".font_family").toggle();
    });
    // $('.op').on('click', function(e) {
    //     $(this).hide();
    // });
});

function font_family_1() {
    document.getElementById('out').style.fontFamily = "arial";
}

function font_family_2() {
    document.getElementById('out').style.fontFamily = "nyala";
}

function font_family_3() {
    document.getElementById('out').style.fontFamily = "calibri";
}

function font_family_4() {
    document.getElementById('out').style.fontFamily = "comic sans ms";
}

function font_family_5() {
    document.getElementById('out').style.fontFamily = "consolas";
}

function font_family_6() {
    document.getElementById('out').style.fontFamily = "courier";
}

function font_family_7() {
    document.getElementById('out').style.fontFamily = "fantasy";
}

function font_family_8() {
    document.getElementById('out').style.fontFamily = "gabriola";
}

function font_family_9() {
    document.getElementById('out').style.fontFamily = "helvetica";
}

function font_family_10() {
    document.getElementById('out').style.fontFamily = "monospace";
}

function font_family_11() {
    document.getElementById('out').style.fontFamily = "mv boli";
}

function font_family_12() {
    document.getElementById('out').style.fontFamily = "segoe script";
}
