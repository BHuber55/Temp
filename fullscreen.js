function newFS1() {
  //document.getElementsByTagName("iframe")[0].className = "fullScreen";
  document.getElementsByTagName("iframe")[0].width = 1920;
  document.getElementsByTagName("iframe")[0].height = 1080;
  document.getElementsByTagName("iframe")[0].style.left = "0px";
  document.getElementsByTagName("iframe")[0].style.top = "0px";
  document.getElementsByTagName("iframe")[0].style.position = "absolute";

  var items = document.getElementsByTagName('button');

  for(i=0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  document.getElementById("stream2").style.display = "none";
  document.getElementById("ufsbutton1").style.display = "inline";
}

function newFS2() {
  //document.getElementsByTagName("iframe")[0].className = "fullScreen";
  document.getElementsByTagName("iframe")[1].width = 1920;
  document.getElementsByTagName("iframe")[1].height = 1080;
  document.getElementsByTagName("iframe")[1].style.left = "0px";
  document.getElementsByTagName("iframe")[1].style.top = "0px";
  document.getElementsByTagName("iframe")[1].style.position = "absolute";

  var items = document.getElementsByTagName('button');

  for(i=0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  document.getElementById("stream1").style.display = "none";
  document.getElementById("ufsbutton1").style.display = "inline";
}

// as in UN-fullscreen
function uFS1() {
  //document.getElementsByTagName("iframe")[0].className = "fullScreen";
  document.getElementsByTagName("iframe")[0].width = 640;
  document.getElementsByTagName("iframe")[0].height = 480;
  document.getElementsByTagName("iframe")[0].style.left = "210px";
  document.getElementsByTagName("iframe")[0].style.top = "175px";
  document.getElementsByTagName("iframe")[0].style.position = "absolute";

  document.getElementsByTagName("iframe")[1].width = 640;
  document.getElementsByTagName("iframe")[1].height = 480;
  document.getElementsByTagName("iframe")[1].style.left = "1060px";
  document.getElementsByTagName("iframe")[1].style.top = "175px";
  document.getElementsByTagName("iframe")[1].style.position = "absolute";

  var items = document.getElementsByTagName('button');

  for(i=0; i < items.length; i++) {
    items[i].style.display = "inline";
  }

  document.getElementById("stream1").style.display = "inline";
  document.getElementById("stream2").style.display = "inline";
}
