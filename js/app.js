console.log('Hola Matt Damon!');


// I create an array 
var images=["http://estaticos.smn.gob.ar/vmsr/goes16/nefo_00_24.jpg" ,
"http://estaticos.smn.gob.ar/vmsr/goes16/mtoparg_24.jpg", "http://estaticos.smn.gob.ar/vmsr/goes16/mc02arg_24.jpg", 
"http://estaticos.smn.gob.ar/vmsr/goes16/mv09arg_24.jpg"
]


var num=0;

function next(){
  var slider=document.getElementById("slider");
  
  num++;
  if (num>=images.length){
    num=0;
  }
  slider.src=images[num]
}


function prev(){
  var slider=document.getElementById("slider");

  num--;

  if(num < 0){
    num=images.length-1;
  }
  slider.scr=images[num];
}


$(document).ready(function(){
  
  // var w=document.getElementById("close");
  // w.addEventListener("click", close_banner, false);
  
  var closeElement = document.getElementById("close");
  if (closeElement != null) {
    closeElement.addEventListener("click", close_banner, false)
  }
});



function close_banner(){
  $("#banner").remove();
}


console.log("intermedio");

//I have to this clock!!
// document.getElementById("date-argentina").innerHTML = Date();


const getRemainTime = deadline =>{
  let now = new Date();

  remainTime = (new Date(deadline) - now + 1000)/1000,
  remainSecond = ('0' + Math.floor(remainTime % 60)).slice(-2),
  remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
  remainDays = Math.floor(remainTime / (3600 * 24));

  return{
    remainTime,
    remainSecond,
    remainMinutes,
    remainHours,
    remainDays
  }
}

//console.log(getRemainTime('Thu Jan 31 2019 23:24:19 GMT-0300'));


const countdown = (deadline, elem, finalMessage) => {

  const element = document.getElementById(elem);

  const timerUpDate = setInterval(() => {
    let time = getRemainTime(deadline);
    element.innerHTML = `${time.remainDays} días ${time.remainHours}:${time.remainMinutes}:${time.remainSecond} para el eclipse solar`;

    if (time.remainTime <= 1){
      clearInterval(timerUpDate);
      element.innerHTML = finalMessage;
    }

  },1000);
};



countdown('jun 02 2019 16:24:08 GMT-0300','timer','Danke');


// (function(){

//   var zeit = new Date();
  
//   document.write(zeit);

//   console.log(zeit.getHours() - 12);
//   console.log(zeit.getMinutes() - 12);
//   console.log(zeit.getSeconds() - 12);

// })

// Date();
// document.getElementById("tempo").innerHTML = setInterval(Date,1000);



// window.onload = function example(){
  
//   window.print();
// }

// window.addEventListener("load",exampleTwo, false);

// exampleTwo{
//   window.print();
// }

//Clock web
(function(){

  var updateTodayHour = function(){

    var dateToday = new Date(),
      hours = dateToday.getHours(),
      minutes = dateToday.getMinutes(),
      seconds = dateToday.getSeconds(),
      days = dateToday.getDay(),
      months = dateToday.getMonth(),
      years = dateToday.getFullYear();

 

    var pDay = document.getElementById("day"),
      pMonth = document.getElementById("month"),
      pYear = document.getElementById("year"),
      pHour = document.getElementById("hour"),
      pMinute = document.getElementById("minute"),
      pSecond= document.getElementById("second");

    pDay.textContent = days;
    pMonth.textContent = months;
    pYear.textContent = years;
    pHour.textContent = hours;
    pMinute.textContent = minutes;
    pSecond.textContent = seconds;

  };
  updateTodayHour();

  var interval = setInterval(updateTodayHour,1000);
}())


//Radar Ezeiza

$(document).ready(function () {
  
  var arrayImg = new Array();

  arrayImg[0] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_01.png";
  arrayImg[1] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_02.png";
  arrayImg[2] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_03.png";
  arrayImg[3] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_04.png";
  arrayImg[4] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_05.png";
  arrayImg[5] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_06.png";
  arrayImg[6] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_07.png";
  arrayImg[7] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_08.png";
  arrayImg[8] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_09.png";
  arrayImg[9] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_10.png";
  arrayImg[10] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_11.png";
  arrayImg[11] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_12.png";


  var count = 0;

  changeImg();
    


  function changeImg(){

    if(count == arrayImg.length){
      count=0;
    }

    $("#radar-bs-as").attr("src", arrayImg[count]); 
   
    count++;
    setTimeout(changeImg, 1000);
  
    console.log("load radar");

  };

  // var loader = setInterval(function(){
  //   $("#radar-bs-as").attr("src","");
  //   $("#radar-bs-as").attr("src","http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_RMA2_ZH_2_11.png");
  
  // },20000);
  
});


//Infrared north of argentina

$(document).ready(function () {
  
  var arrayTops = new Array();
  console.log("ready");

  arrayTops[0] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_01.jpg";
  arrayTops[1] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_02.jpg";
  arrayTops[2] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_03.jpg";
  arrayTops[3] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_04.jpg";
  arrayTops[4] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_05.jpg";
  arrayTops[5] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_06.jpg";
  arrayTops[6] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_07.jpg";
  arrayTops[7] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_08.jpg";
  arrayTops[8] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_09.jpg";
  arrayTops[9] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_10.jpg";
  arrayTops[10] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_11.jpg";
  arrayTops[11] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_12.jpg";
  arrayTops[12] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_13.jpg";
  arrayTops[13] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_14.jpg";
  arrayTops[14] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_15.jpg";
  arrayTops[15] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_16.jpg";
  arrayTops[16] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_17.jpg";
  arrayTops[17] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_18.jpg";
  arrayTops[18] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_19.jpg";
  arrayTops[19] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_20.jpg";
  arrayTops[20] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_21.jpg";
  arrayTops[21] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_22.jpg";
  arrayTops[22] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_23.jpg";
  arrayTops[23] = "http://estaticos.smn.gob.ar/vmsr/goes16/mtopnorte_24.jpg";

  var counter = 0;

  // window.onload = function(){
  changeTops();
  // };

  function changeTops(){

    if(counter == arrayTops.length){
      counter=0;
    }

    $("#cloudy-tops").attr("src", arrayTops[counter]);

    counter++;
    setTimeout(changeTops, 1000);
    
    console.log("load radar Chaco");

  };


});


$(document).ready(function () {
  
  var visibleChaco = new Array();

  visibleChaco[0] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_01.jpg";
  visibleChaco[1] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_02.jpg";
  visibleChaco[2] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_03.jpg";
  visibleChaco[3] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_04.jpg";
  visibleChaco[4] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_05.jpg";
  visibleChaco[5] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_06.jpg";
  visibleChaco[6] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_07.jpg";
  visibleChaco[7] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_08.jpg";
  visibleChaco[8] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_09.jpg";
  visibleChaco[9] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_10.jpg";
  visibleChaco[10] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_11.jpg";
  visibleChaco[11] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_12.jpg";
  visibleChaco[12] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_13.jpg";
  visibleChaco[13] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_14.jpg";
  visibleChaco[14] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_15.jpg";
  visibleChaco[15] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_16.jpg";
  visibleChaco[16] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_17.jpg";
  visibleChaco[17] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_18.jpg";
  visibleChaco[18] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_19.jpg";
  visibleChaco[19] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_20.jpg";
  visibleChaco[20] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_21.jpg";
  visibleChaco[21] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_22.jpg";
  visibleChaco[22] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_23.jpg";
  visibleChaco[23] = "http://estaticos.smn.gob.ar/vmsr/goes16/mc02norte_24.jpg";

  var countVisibleChaco = 0;

  changeVisibleChaco();

  function changeVisibleChaco(){

    if(countVisibleChaco == visibleChaco.length){
      countVisibleChaco = 0;
    };      

    $("#visible-chaco").attr("src", visibleChaco[countVisibleChaco]);

    countVisibleChaco++;

    setTimeout(changeVisibleChaco, 1000);
    
  };
  
});

//Radars red

$(document).ready(function () {
  
  var arrayRadars = new Array();

  arrayRadars[0] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_01.png";
  arrayRadars[1] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_02.png";
  arrayRadars[2] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_03.png";
  arrayRadars[3] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_04.png";
  arrayRadars[4] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_05.png";
  arrayRadars[5] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_06.png";
  arrayRadars[6] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_07.png";
  arrayRadars[7] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_08.png";
  arrayRadars[8] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_09.png";
  arrayRadars[9] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_10.png";
  arrayRadars[10] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_11.png";
  arrayRadars[11] = "http://estaticos.smn.gob.ar/intra/vmsr/radar/CMAX_COMP_Z_2_12.png";

  var coun = 0;

  changeRadars();
 

  function changeRadars(){

    if(coun == arrayRadars.length){
      coun=0; 
    }

    $("#radars-red").attr("src", arrayRadars[coun]);
    coun++;
    console.log("load radar3");

    setTimeout(changeRadars, 1000);

  };


});

