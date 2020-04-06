<template>
    <section :class="b('')">
        <page-list>
            <template v-slot:list>
                <MainList v-show="!isLoading" :data="list" />
                <Loading v-show="isLoading"></Loading>
            </template>
        </page-list>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import MainList from '@/views/components/mainlist';
import { likeLoading } from '@/common/js/mixins';

export default create({
    data() {
        return {
            isLoading: true,
            list: [
                { title: '', id: 'ajfa' },
                { title: '', id: 'xcvxvnxvn' },
                { title: '', id: 'sdfscw' }
            ]
        };
    },
    name: 'technology',
    mixins: [likeLoading],
    components: {
        MainList,
        PageList
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
