<template>
    <section :class="b('')">
        <page-list>
            <template v-slot:list>
                <MainList :data="list" />
            </template>
        </page-list>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import MainList from '@/views/components/mainlist';

export default create({
    data() {
        return {
            list: [
                { title: '', id: 'ajfa' },
                { title: '', id: 'xcvxvnxvn' },
                { title: '', id: 'sdfscw' }
            ]
        };
    },
    name: 'technology',
    components: {
        MainList,
        PageList
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
