let [hour, minit, sec] = [0, 0 ,0];

let timer = null;
function endTime() {
sec++;
if(sec = 60){
    sec = 0;
    minit++;
}
if(minit = 60){ 
    minit = 0;
    hour++;
}

const publish = document.querySelector('.publish');


publish.innerHTML = sec +" : "+ minit +" : "+  hour;
//publish.innerHtml = sec + " : " + minit " : " hour;
}
function startTime(){
    if (timer != null) {
        clearInterval(timer);
    }
    setInterval(endTime, 1000);
}

let onOff = document.querySelector('.on-off');
let fornt = document.querySelector('.fornt');

   onOff.addEventListener('click', ()=> {
        fornt.classList.add('end');
   });
