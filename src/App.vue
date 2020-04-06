<template>
    <div id="app">
        <main>
            <Header />
            <Tab />
            <Footer />
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>
    </div>
</template>

<script>
import Header from '@/components/header';
import Tab from '@/components/tab';
import Footer from '@/components/footer';

export default {
    name: 'App',
    components: {
        Footer,
        Tab,
        Header
    },
    methods: {}
};
</script>

<style>
</style>
