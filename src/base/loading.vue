<template>
    <section :class="b('')">
        <div :class="b('text')">加载中...</div>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';

export default create({
    name: 'loading'
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.tt-loading {
    padding-top: 80px;
    height: 100%;
    width: 100%;
    background: #f4f5f6;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    &__text {
        display: block;
        color: #999;
        font-size: 16px;
        line-height: 48px;
        text-decoration: none;
    }
}
</style>
