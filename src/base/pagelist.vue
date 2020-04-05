<template>
    <section class="tt-pagelist">
        <slot name="list"></slot>
    </section>
</template>

<script>
export default {
    name: 'pagelist'
};
</script>

<style scoped lang='scss'>
.tt-pagelist {
    padding: 0 15px;
    padding-top: 80px;
    padding-bottom: 50px;
}
</style>
