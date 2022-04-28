const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minsEl=document.getElementById('mins')
const secondsEl=document.getElementById('seconds')

const newYears='1 jan 2023';
function countdown()
{
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const total_second=(newYearsDate-currentDate)/1000;
    const days=Math.floor(total_second/3600/24);
    const hours=Math.floor(total_second/3600)%24;
    const mins=Math.floor(total_second/60)%60;
    const seconds=Math.floor(total_second)%60;


     daysEl.innerHTML=days;
     hoursEl.innerHTML=hours;
     minsEl.innerHTML=mins;
     secondsEl.innerHTML=seconds;
    


}
countdown();//initial call
setInterval(countdown,1000);//call at interval of 1 second 

