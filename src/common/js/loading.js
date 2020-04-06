import LoadingCom from '@/base/Loading';

const SyncLoading = {
    install(Vue) {
        Vue.component('Loading', LoadingCom);
    }
};
export default SyncLoading;
