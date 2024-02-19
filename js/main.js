//  <reference types="../@types/jquery"/>

$('.sidebar-toggle').on('click', function (){
    $('#hamada').animate({width:'toggle'} , 1000)
})
let countDownDate = new Date("dec 31, 2024 23:59:59");
let counter = setInterval(() => {
    let dateNow = new Date().getTime()

    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / 1000 / 60 / 60 /24)+"d";
    document.querySelector(".days").innerHTML = days;
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 *24))/1000/60/60)+"h";
    document.querySelector(".hours").innerHTML = hours;
    let min = Math.floor((dateDiff % (1000 * 60 * 60 ))/(1000*60))+"m";
    document.querySelector(".min").innerHTML = min;
    let sec = Math.floor((dateDiff % (1000 * 60))/1000)+"sec";
    document.querySelector(".sec").innerHTML = sec;
    if(dateDiff<0){
        clearInterval(counter)
    }
},1000);

$("textarea").keyup(function(){
    console.log("hello")
    let myLength = $(this).val().length;
    $("#num").text(
        100 - myLength <= 0 ? "your avilable chracter finished" : 100 - myLength +" " +"character remaining"
    )})
