//Displays todays date in header
let today = moment();
$("#currentDay").text(today.format("LL"));
let hour = moment();
$('#currentDay2').text(hour.format('LT'));
let hour24 = parseInt(moment().format("HH"));
let hourNowInt = parseInt(hour24);
let TIMER;

const hour1 = parseInt($('#hour1').text());
const hour2 = parseInt($('#hour2').text());
const hour3 = parseInt($('#hour3').text());
const hour4 = parseInt($('#hour4').text());
const hour5 = parseInt($('#hour5').text());
const hour6 = parseInt($('#hour6').text());
const hour7 = parseInt($('#hour7').text());
const hour8 = parseInt($('#hour8').text());
const hour9 = parseInt($('#hour9').text());

$("#btn1").click(function() {
    localStorage.setItem(hour1, $("#text1").val());
})

$("#btn2").click(function() {
    localStorage.setItem(hour2, $("#text2").val());
})

$("#btn3").click(function() {
    localStorage.setItem(hour3, $("#text3").val());
})

$("#btn4").click(function() {
    localStorage.setItem(hour4, $("#text4").val());
})

$("#btn5").click(function() {
    localStorage.setItem(hour5, $("#text5").val());
})

$("#btn6").click(function() {
    localStorage.setItem(hour6, $("#text6").val());
})

$("#btn7").click(function() {
    localStorage.setItem(hour7, $("#text7").val());
})

$("#btn8").click(function() {
    localStorage.setItem(hour8, $("#text8").val());
})

$("#btn9").click(function() {
    localStorage.setItem(hour9, $("#text9").val());
})

changeColor();


function changeColor() {

    TIMER = setInterval(changeColor, 1000);

    if (hour24 >= 9 && hour24 <= 17) {
        
        for(let i = 1; i <= 9; i++) {
            let hourInInt = parseInt($('#hour' + i).text());

            if (hourInInt < 9) {
                hourInInt = hourInInt + 12;
            }

            if (hourInInt == hour24) {
                $('#text' + i).addClass('present');
                continue;
            }

            if (hourInInt < hour24) {
                $('#text' + i).addClass('past');
            }

            else {
                $('#text' + i).addClass('future');
            }
        }
    }
    else {
        clearInterval(TIMER);
        $('textarea').css('background-color', '#e0bbe4');
    }
}
