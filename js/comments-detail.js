window.onload = function () {
    let app = new Vue({
            el: '#app',
            data: {
                commentsContent: '',
                //发送按钮禁用
                isDisabled: true
            },
            methods: {
                //上传图片
                uploadImg: function () {
                    document.getElementById('upload-img').click();
                }
            },
            watch: {
                commentsContent: function (newVal, oldVal) {
                    if (newVal.trim() != '') {
                        this.isDisabled = false;
                    }
                    else {
                        this.isDisabled = true;
                    }
                }
            }
        }
    );

    /**
     * 监听文件上传框变化
     */
    $("#upload-img").change(function () {
        let reads = new FileReader();
        let f = document.getElementById('upload-img').files[0];
        reads.readAsDataURL(f);
        reads.onload = function (e) {
            document.getElementById('show').src = this.result;
            mui.toast('文件读取成功!');
        };
    });
};