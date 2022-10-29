
let seconds=0;
let minute=0;
let hour=0;
let currentDate=new Date();



setInterval(function(){
    currentDate=new Date();
    seconds=currentDate.getSeconds() * 6;
    minute=currentDate.getMinutes() * 6;
    hour=currentDate.getHours() * 30 + Math.round(minute/12);

    document.getElementById("second-hand").style.transform="rotate(" + seconds + "deg)";
    document.getElementById("minute-hand").style.transform="rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform="rotate(" + hour + "deg)";
   
},1000)



const hamburger=document.getElementById('hamburg')
const unoder=document.getElementById('unoder1')
hamburger.addEventListener("click", function(){
    document.querySelector('.hamburger').classList.toggle("active");
    document.querySelector('.nav-links').classList.toggle("active");
})