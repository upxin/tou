import Vue from 'vue';
import Router from 'vue-router';
import Recommend from '@/views/recommend';

Vue.use(Router);

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
            component: () => import('@/views/military')
        },
        {
            path: '/hot',
            name: ' hot',
            component: () => import('@/views/hot')
        },
        {
            path: '/media',
            name: ' media',
            component: () => import('@/views/media')
        },
        {
            path: '/house',
            name: ' house',
            component: () => import('@/views/house')
        },
        {
            path: '/technology',
            name: ' technology',
            component: () => import('@/views/technology')
        },
        {
            path: '/car',
            name: ' car',
            component: () => import('@/views/car')
        },
        {
            path: '/sports',
            name: ' sports',
            component: () => import('@/views/sports')
        },
        {
            path: '/video',
            name: ' video',
            component: () => import('@/views/video')
        },
        {
            path: '/entertainment',
            name: ' entertainment',
            component: () => import('@/views/entertainment')
        }
    ]
});
