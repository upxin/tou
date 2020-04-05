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
        }
    ]
});
