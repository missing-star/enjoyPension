let app = '';
window.onload = function () {
    app = new Vue({
        el: '#app',
        data: {
            isHidden: true,
            openTitle: '展开全部',
            courseList: [
                {
                    id: 0,
                    title: '广场舞16步',
                    desc: '适合初学者，一般由4个4步组成',
                    isOpen: true
                },
                {
                    id: 1,
                    title: '广场舞16步',
                    desc: '适合初学者，一般由4个4步组成',
                    isOpen: true
                },
                {
                    id: 2,
                    title: '广场舞16步',
                    desc: '适合初学者，一般由4个4步组成',
                    isOpen: false
                },
                {
                    id: 3,
                    title: '广场舞16步',
                    desc: '适合初学者，一般由4个4步组成',
                    isOpen: true
                },
                {
                    id: 4,
                    title: '广场舞16步',
                    desc: '适合初学者，一般由4个4步组成',
                    isOpen: false
                }
            ],
            //评论输入的内容
            commentsContent: '',
            //评论发表聚焦
            isFocus: false,
            //发送按钮禁用
            isDisabled: true
        },
        methods: {
            //展开列表
            openAllCourse: function () {
                if (this.isHidden) {
                    this.openTitle = '收起列表';
                }
                else {
                    this.openTitle = '展开全部';
                }
                this.isHidden = !this.isHidden;
            },
            //显示上传图片图标等
            hideSmile: function () {
                this.isFocus = true;
            },
            //隐藏上传图标
            showSmile: function () {
                this.isFocus = false;
            },
            //上传图片
            uploadImg: function () {
                document.getElementById('upload-img').click();
            },
            goBack:function () {
                history.go(-1);
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
    });
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
$(function(){
    $("#page_emotion  dd").click(function(){
        $("#form_article").html( $("#form_article").html());
    });
});