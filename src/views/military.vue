<template>
    <page-list>
        <template v-slot:list>
            <MainLinst :data="list"/>
        </template>
    </page-list>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import MainLinst from '@/views/components/mainlist';

export default create({
    name: 'military',
    data() {
        return {
            list: [
                { title: '', id: 'askljdlasjfa' },
                { title: '', id: 'xcvxvnxvn' },
                { title: '', id: 'sdfscw' }
            ]
        };
    },
    components: {
        PageList,
        MainLinst
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
