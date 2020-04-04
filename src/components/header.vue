<template>
    <section :class="b('',{a:true})">
        <div>11</div>
        <div></div>
        <div></div>
    </section>
</template>

<script>
import create from '@/utils/create';

export default create({
    name: 'header',
    data() {
        return {};
    }
});

</script>

<style scoped lang='stylus'>
.tt-header
    width 100%
    &--a
        font-size 50px
</style>
