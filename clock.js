let hrs=document.getElementById('hr');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let aps=document.getElementById('ap');


setInterval( function(){
let currentTime = new Date();
// console.log(currentTime)
// console.log(currentTime.getTime())
hrs.innerHTML=currentTime.getHours() ;
min.innerHTML=currentTime.getMinutes();
sec.innerHTML=currentTime.getSeconds();

if(sec.textContent<10){
    sec.innerHTML="0"+currentTime.getSeconds()
}
else{
    sec.innerHTML=currentTime.getSeconds()

}
if(hrs.textContent>=12){
    aps.textContent="PM"
}
},1000)

