//vue实例化
let app = new Vue({
    el: '#app',
    data: {
        isPlay: false,
        videoTotalTime: '00:00',
        currentTime: '00:00',
        videoPlayer: ''
    },
    methods: {
        startPlay: function () {
            this.videoPlayer.play();
            this.isPlay = true;
            setTimeout(function () {
                $(".btn-group-play").hide(200);
                $(".video-progress-bar-container").hide(200);
            }, 3000);
        },
        pausePlay: function () {
            this.videoPlayer.pause();
            this.isPlay = false;
        },
        //播放器点击显示按钮组
        showBtnGroup: function () {
            $(".btn-group-play").show();
            $(".video-progress-bar-container").show();
            setTimeout(function () {
                $(".btn-group-play").hide(200);
                $(".video-progress-bar-container").hide(200);
            }, 3000);

        },
        //全屏
        fullScreen: function () {
            requestFullScreen();
        }
    }
});

function transformTime(ms) {
    let minute = parseInt(ms / 60);
    let seconds = parseInt((ms / 60 - minute) * 60);
    minute = minute < 10 ? `0${minute}` : minute;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minute} : ${seconds}`;
}

function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}

function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}