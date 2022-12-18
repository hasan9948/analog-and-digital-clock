const hours=document.querySelector(".c1")
const min=document.querySelector(".c2")
const sec=document.querySelector(".c3")
const ampm=document.querySelector(".ampm")
// const audio=document.querySelector("audio")
// let audio=new Audio("sound/Clock-Ticking-C.mp3");
// console.log(audio)
// audio.play()
const sound=new Audio("https://goo.gl/xX8pDD/sound/Clock-Ticking-C.mp3")
sound.src="sound/Clock-Ticking-c.mp3"
sound.currentTime=0
sound.play()
sound.volume=.7
 

setInterval(() => {
    console.log(sound.currentTime)
    
    if (sound.currentTime>31) {
        sound.currentTime=0
    }
}, 2000);
    

setInterval(() => {
    const time= new Date()
const h=time.getHours()*30
const m=time.getMinutes()*6
const s=time.getSeconds()*6

hours.style.transform=`translate(-50%,-50%)rotate(${h}deg)`
min.style.transform=`translate(-50%,-50%)rotate(${m}deg)`
sec.style.transform=`translate(-50%,-50%)rotate(${s}deg)` 

document.querySelector(".dhour").textContent=h/30;
if ((h/30)>12) {
    document.querySelector(".dhour").textContent=(h/30)-12;
}
if ( document.querySelector(".dhour").textContent< 10) {
    document.querySelector(".dhour").textContent="0"+ document.querySelector(".dhour").textContent;
}
document.querySelector(".dminutes").textContent=m/6;
if ( document.querySelector(".dminutes").textContent< 10) {
    document.querySelector(".dminutes").textContent="0"+ document.querySelector(".dminutes").textContent;
}
document.querySelector(".dseconds").textContent=s/6;
if ( document.querySelector(".dseconds").textContent< 10) {
    document.querySelector(".dseconds").textContent="0"+ document.querySelector(".dseconds").textContent;
}
if ((h/30)>12) {
    ampm.textContent="pm"
}

}, 1000);



