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
    },
    mounted: function () {
        let vm = this;
        document.getElementById('video-player').addEventListener('loadedmetadata', function () {
            //视频加载完成
            vm.videoPlayer = document.getElementById('video-player');
            vm.videoTotalTime = transformTime(this.duration);
            vm.currentTime = transformTime(this.currentTime);
            console.log(this.duration,this.currentTime);
            let interval = setInterval(function () {
                if (vm.videoPlayer.currentTime == vm.videoPlayer.duration) {
                    vm.isPlay = false;
                    //播放完毕
                    $(".btn-group-play").show();
                    $(".video-progress-bar-container").show();
                }
                vm.currentTime = transformTime(vm.videoPlayer.currentTime);
                mui("#video-progress-bar").progressbar({progress: vm.videoPlayer.currentTime / vm.videoPlayer.duration * 100}).show();
            }, 1000);
        });

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