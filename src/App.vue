<template>
    <div id="app">
        <main>
            <Header />
            <Tab />
            <Footer />
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <Popup :isShow="show" :offShow="show" />
        </main>
    </div>
</template>

<script>
import Header from '@/components/header';
import Tab from '@/components/tab';
import Footer from '@/components/footer';
import Popup from '@/base/popup/popup';

export default {
    name: 'App',
    data() {
        return {
            show: false
        };
    },
    mounted() {
        this.bus.$on('pop', (v) => {
            this.show = v;
        });
        this.bus.$on('offShow', (v) => {
            this.show = v;
        });
    },
    components: {
        Footer,
        Tab,
        Header,
        Popup
    }
};
</script>

<style>
</style>
