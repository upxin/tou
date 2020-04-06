<template>
    <page-list>
        <template v-slot:list>
            <MainLinst :data="list" v-show="!isLoading" />
            <Loading v-show="isLoading"></Loading>
        </template>
    </page-list>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import MainLinst from '@/views/components/mainlist';
import { likeLoading } from '@/common/js/mixins';

export default create({
    name: 'military',
    mixins: [likeLoading],
    data() {
        return {
            isLoading: true,
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
