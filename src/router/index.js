import Vue from 'vue';
import Router from 'vue-router';
import Loading from '@/base/loading';

Vue.use(Router);

function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: AsyncView,
        // 异步组件加载时使用的组件
        loading: Loading,
        // 加载失败时使用的组件
        // error: require("@/error.vue").default,
        // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        delay: 200,
        // 如果提供了超时时间且组件加载也超时了，
        // 则使用加载失败时使用的组件。默认值是：`Infinity`
        timeout: 10000
    });
    return Promise.resolve({
        functional: true,
        render(h, { data, children }) {
            return h(AsyncHandler, data, children);
        }
    });
}
const Military = () => lazyLoadView(import('@/views/military'));
const Recommend = () => lazyLoadView(import('@/views/recommend'));
const Hot = () => lazyLoadView(import('@/views/hot'));
const Media = () => lazyLoadView(import('@/views/media'));
const House = () => lazyLoadView(import('@/views/house'));
const Technology = () => lazyLoadView(import('@/views/technology'));
const Car = () => lazyLoadView(import('@/views/car'));
const Sports = () => lazyLoadView(import('@/views/sports'));
const Video = () => lazyLoadView(import('@/views/video'));
const Entertainment = () => lazyLoadView(import('@/views/entertainment'));

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend
        },
        {
            path: '/military',
            name: ' military',
            component: Military
        },
        {
            path: '/hot',
            name: ' hot',
            component: Hot
        },
        {
            path: '/media',
            name: ' media',
            component: Media
        },
        {
            path: '/house',
            name: ' house',
            component: House
        },
        {
            path: '/technology',
            name: ' technology',
            component: Technology
        },
        {
            path: '/car',
            name: ' car',
            component: Car
        },
        {
            path: '/sports',
            name: ' sports',
            component: Sports
        },
        {
            path: '/video',
            name: ' video',
            component: Video
        },
        {
            path: '/entertainment',
            name: ' entertainment',
            component: Entertainment
        }
    ]
});
