window.onload = function () {
    let app = new Vue({
        el: '#app',
        data: {
            isHidden:true,
            openTitle:'展开全部',
            courseList:[
                {
                    id:0,
                    title:'广场舞16步',
                    desc:'适合初学者，一般由4个4步组成',
                    isOpen:true
                },
                {
                    id:1,
                    title:'广场舞16步',
                    desc:'适合初学者，一般由4个4步组成',
                    isOpen:true
                },
                {
                    id:2,
                    title:'广场舞16步',
                    desc:'适合初学者，一般由4个4步组成',
                    isOpen:false
                },
                {
                    id:3,
                    title:'广场舞16步',
                    desc:'适合初学者，一般由4个4步组成',
                    isOpen:true
                },
                {
                    id:4,
                    title:'广场舞16步',
                    desc:'适合初学者，一般由4个4步组成',
                    isOpen:false
                }
            ]
        },
        methods: {
            openAllCourse:function () {
                if(this.isHidden) {
                    this.openTitle = '收起列表';
                }
                else {
                    this.openTitle = '展开全部';
                }
                this.isHidden = !this.isHidden;
            }
        }
    });
};