<template>
    <section :class="b('')">
        <page-list>
            <template v-slot:list>entertainment</template>
        </page-list>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';

export default create({
    name: 'entertainment',
    components: {
        PageList
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

