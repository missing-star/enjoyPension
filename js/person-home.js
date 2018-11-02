window.onload = function () {
    let app = new Vue({
        el: '#app',
        data: {},
        methods: {
            goSetting:function () {
                mui.openWindow({
                    url:'user-setting.html'
                })
            }
        }
    });
};