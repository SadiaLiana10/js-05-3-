let getHour = document.querySelector(".hour");
let getMin = document.querySelector(".min");
let getSec = document.querySelector(".sec");



setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    getHour.innerHTML = hour;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    console.log(min)
},1000)
