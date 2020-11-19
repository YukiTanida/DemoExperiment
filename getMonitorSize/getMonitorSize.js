// Copyright (c) 2020 Yuki Tanida
// This software is released under the MIT License, see ../LICENSE

// Get ppi and font size in px -------------------------------------------------
function getMonitorSize(){

  // Physical size (cm to inch) of rectangle -----------------------------------
  var width5cm2inch = 5/2.54;  // 5cm
  var height3cm2inch = 3/2.54; // 3cm

  // Get full screen size (px)  ------------------------------------------------
  var width_screen = window.screen.width;
  var height_screen = window.screen.height;
  var diagonal_screen = Math.sqrt(width_screen**2 + height_screen**2);

  // calculate ppi and physical length in px to be drawn -----------------------
  size = document.getElementById("area1").value; // get monitor size registered
  ppi = diagonal_screen/size;                        // use grobally
  var x = width5cm2inch*ppi;
  var y = height3cm2inch*ppi;

  // Set canvas size -----------------------------------------------------------
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      function canvas_resize(){
        // canvas size is 50% of window
        // get window side whenever drawing a rectangle
        canvasWidth = window.innerWidth*0.5;         // use grobally
        canvasHeight = window.innerHeight*0.5;       // use grobally
        canvas.setAttribute('width', canvasWidth);   // use grobally
        canvas.setAttribute('height', canvasHeight); // use grobally
      }
    window.addEventListener('resize',canvas_resize,false);
    canvas_resize();

    // draw a rectangle on canvas ----------------------------------------------
    ctx.fillStyle = 'black';
    ctx.fillRect(canvasWidth/2 - x/2, canvasHeight/2 - y/2, x, y);

    // Set font-size for letter strings items ----------------------------------
    return fontSizePx = (ppi*cmPerLetter/2.54);
  }
}
