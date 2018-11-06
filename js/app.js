console.log('Hola Matt Damon!');


// I create an array 
var images=["http://estaticos.smn.gob.ar/vmsr/goes16/nefo_00_24.jpg" ,
"http://estaticos.smn.gob.ar/vmsr/goes16/mtoparg_24.jpg"
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