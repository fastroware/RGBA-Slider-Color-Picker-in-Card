let form_color = document.getElementById('form-color');
let btn_copy = document.getElementById('copy-color');
btn_click();
function btn_click() {
    btn_copy.onclick = function () {
        form_color.select();
        form_color.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(form_color.value);
        btn_copy.innerHTML = 'Copied!';
        setTimeout(function () {
            btn_copy.innerHTML = 'Copy';
        }, 3000);
    }

}
getNumber();
function getNumber() {
    var colorBox = document.getElementById('color-box');
    var slider = document.getElementsByClassName("slider");
    var number = document.getElementsByClassName('number');
    var code = document.getElementsByClassName('code');
    let idx;
    let rgb_r;
    let rgb_g
    let rgb_b;
    let rgb_a;
    for (idx = 0; idx < slider.length; idx++) {
        number[idx].innerHTML = slider[idx].value;
        if (slider[idx].classList.contains('rgb-r')) {
            rgb_r = slider[idx].value;
            colorBox_get_rgb();
            code[idx].style.backgroundColor = 'rgb(' + slider[idx].value + ', 0, 0)';
            slider[idx].oninput = function () {
                rgb_r = this.value;
                colorBox_get_rgb();
                this.previousElementSibling.style.backgroundColor = 'rgb(' + this.value + ', 0, 0)';
                this.nextElementSibling.innerHTML = this.value;
            }
        } else if (slider[idx].classList.contains('rgb-g')) {
            rgb_g = slider[idx].value;
            colorBox_get_rgb();
            code[idx].style.backgroundColor = 'rgb(0, ' + slider[idx].value + ', 0)';
            slider[idx].oninput = function () {
                rgb_g = this.value;
                colorBox_get_rgb();
                this.previousElementSibling.style.backgroundColor = 'rgb(0, ' + this.value + ', 0)';
                this.nextElementSibling.innerHTML = this.value;
            }
        } else if (slider[idx].classList.contains('rgb-b')) {
            rgb_b = slider[idx].value;
            colorBox_get_rgb();
            code[idx].style.backgroundColor = 'rgb(0, 0, ' + slider[idx].value + ')';
            slider[idx].oninput = function () {
                rgb_b = this.value;
                colorBox_get_rgb();
                this.previousElementSibling.style.backgroundColor = 'rgb(0, 0, ' + this.value + ')';
                this.nextElementSibling.innerHTML = this.value;
            }
        }
        else if (slider[idx].classList.contains('rgb-a')) {
            rgb_a = slider[idx].value;
            colorBox_get_rgb();
            code[idx].style.backgroundColor = 'rgba(202, 202, 202' + slider[idx].value + '%)';
            slider[idx].oninput = function () {
                rgb_a = this.value;
                colorBox_get_rgb();
                this.previousElementSibling.style.backgroundColor = 'rgba(202, 202, 202, ' + this.value + '%)';
                this.nextElementSibling.innerHTML = this.value;
            }
        }

    }
    function colorBox_get_rgb() {
        form_color.value = 'rgba(' + rgb_r + ', ' + rgb_g + ', ' + rgb_b + ', ' + rgb_a + '%);';
        colorBox.style.backgroundColor = 'rgba(' + rgb_r + ', ' + rgb_g + ', ' + rgb_b + ', ' + rgb_a + '%)';
        btn_copy.innerHTML = 'Copy';
    }
}