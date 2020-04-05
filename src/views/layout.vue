<template>
    <main>
        <Header></Header>
        <nav-bar></nav-bar>
    </main>
</template>

<script>
import Header from '@/components/header';
import NavBar from '@/components/nav-bar';

export default {
    name: 'layout',
    components: {
        Header,
        NavBar
    }
};
</script>

<style>
</style>
