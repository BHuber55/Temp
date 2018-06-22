var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var save_fname = 'IChimp_' + date + '_' + time;





var recordRTC;

function successCallBack(stream) {
  var options = {
    mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
    };

    recordRTC = RecordRTC(stream, options);
    recordRTC.startRecording();
}

function errorCallback(error) {
    // maybe another application is using the device
}

var mediaConstraints = { video: true, audio: true };

navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);

btnStopRecording.onclick = function () {
    recordRTC.stopRecording(function (audioVideoWebMURL) {
        video.src = audioVideoWebMURL;

        var recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function(dataURL) { });
    });
};

recordRTC.save(save_fname);









document.getElementById('stop1').onclick = function() {
    this.disabled = true;
    isStoppedRecording = true;
    recorder.stopRecording(function() {
        querySelectorAll('video').forEach(function(video) {
            video.pause();
            video.removeAttribute('src');
        });
        videoElement.stream.getTracks().forEach(function(track) {
            track.stop();
        });
        document.body.innerHTML = '';
        document.body.style = 'margin: 0; padding: 0;background: black; text-align: center; overflow: hidden;';
        var blob = recorder.getBlob();
        var video = document.createElement('video');
        video.src = URL.createObjectURL(blob);
        video.setAttribute('style', 'height: 100%;');
        document.body.appendChild(video);
        video.controls = true;
        video.play();
    });
