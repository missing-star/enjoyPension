window.onload = function () {
    let app = new Vue({
        el: '#app',
        data: {
            //选中的选项卡
            activeIndex: 0,
            //选项卡
            tabList: [
                {
                    id: 0,
                    name: '推荐'
                },
                {
                    id: 1,
                    name: '运动'
                },
                {
                    id: 2,
                    name: '心理'
                },
                {
                    id: 3,
                    name: '养生'
                },
                {
                    id: 4,
                    name: '活动'
                }
            ],
            tabContent: new Map(),
            //手动改变值变化
            tabContentTracker: 0
        },
        methods: {
            loadTabContent: function (tabId, index) {
                this.activeIndex = index;
                this.getItemList(tabId);
            },
            getItemList: function (tabId) {
                let vm = this;
                if (vm.tabContent.get(tabId)) {
                    return vm.tabContent.get(tabId);
                }
                else {
                    //请求获取数据
                    $.getJSON('data/tabContent.json', {id: tabId}, function (data) {
                        vm.tabContent.set(tabId, data);
                        vm.tabContentTracker += 1;
                        return vm.tabContent.get(tabId);
                    });
                }
            },
            showSearch:function () {

            }
        },
        created: function () {
            //获取第一个tab页内容
            this.getItemList(this.tabList[0].id);
        }
    });
    /**
     * 固定tab
     */
        //获取 id="course_container" 元素，offsetTop是当前元素·距离网页窗口顶部的距离
    let offset_top = document.getElementById("tab-container").offsetTop;
    let isSetHeight = false;
    $(window).scroll(function () {
        //获取垂直滚动的距离（scrollTop()是从顶部开始滚动产生的距离）
        let scroll_top = $(document).scrollTop();
        console.log(scroll_top);
        //防止重复设置高度页面抖动
        if (scroll_top > offset_top) {
            console.log('add');
            // 到达顶部位置，动态的添加元素属性，并给元素添加相应的元素样式
            document.getElementById("tab-container").classList.add("fixed");
        }
        else {
            console.log('remove');
            // 同理，把之前添加的元素移除即可
            document.getElementById("tab-container").classList.remove("fixed");
        }
    });

}