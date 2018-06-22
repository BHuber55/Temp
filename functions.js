function setURL(url){
  document.getElementById('command').src = url;
}

function getStream(streamURL, audioURL) {
    document.getElementById('command').src = audioURL;
    setTimeout(setURL(streamURL), 10000);
}

function setStream1(streamURL) {
    document.getElementById('stream1').src = streamURL;
}
