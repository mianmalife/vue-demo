let Vue;

export default class VueRouter {
    constructor(options) {
        this.$options = options;
        // 声明map 将map和component映射
        this.routeMap = {};
        //current 保持当前hash
        //vue保证其动态的更新
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init() {
        //1.事件监听
        this.bindEvents();
        //2.创建路由映射
        this.createRouteMap();
        //3.生命两个组件
        this.initComponent();
    }

    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));
    }

    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap() {
        this.$options.routes.map(item => {
            this.routeMap[item.path] = item.component;
        })
    }
    initComponent() {
        Vue.component('router-link', {
            props: { to: { type: String, require: true } },
            render(h) {
                // 1. render生成虚拟dom
                // 2. 描述渲染dom结构
                // 3. h(tag, data, children)
                // return <a href={this.to}>{this.$slots.default}</a>
                return h('a', { attrs: { href: this.to } }, [this.$slots.default])
            }
        });

        Vue.component('router-view', {
            render: h => {
                return h(this.routeMap[this.app.current])
            }
        })
    }
}










// Vue.use(VueRouter) 插件要求实现install方法

VueRouter.install = function (_Vue) {
    Vue = _Vue;

    //混入：挂载$router
    Vue.mixin({
        // 希望接下来代码在每个组件创建时都执行
        // this指当前组件实例
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                //初始化router
                this.$options.router.init();
            }
        },
    })
}

