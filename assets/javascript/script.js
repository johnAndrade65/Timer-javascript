let second = 0;
let minute = 0;
let hour = 0;
var interval;

function twoDigite(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval = setInterval(watch,1000)
}
function pause(){
    clearInterval(interval)
    
}
function clean(){
    clearInterval(interval)
    second = 0;
    minute = 0;
    document.getElementById("timer").innerText = '00:00:00'
}

function watch(){
    second++
    if(second == 60){
        second = 0
        minute++
        if(minute == 60)
            minute = 0
            hour++
        }
    document.getElementById("timer").innerText = twoDigite(hour)+':'+twoDigite(minute)+':'+twoDigite(second)
}