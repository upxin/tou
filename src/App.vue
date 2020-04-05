<template>
    <div id="app">
        <main>
            <Header />
            <nav-bar></nav-bar>
            <Footer />
            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
import Header from '@/components/header';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

export default {
    name: 'App',
    components: {
        Footer,
        NavBar,
        Header
    },
    methods: {}
};
</script>

<style>
</style>
