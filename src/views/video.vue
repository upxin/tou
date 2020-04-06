<template>
    <section :class="b('')">
        <page-list v-show="!isLoading">
            <template v-slot:list>video</template>
        </page-list>
        <Loading v-show="isLoading"></Loading>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import { likeLoading } from '@/common/js/mixins';

export default create({
    name: 'video',
    mixins: [likeLoading],
    data() {
        return {
            isLoading: true
        };
    },
    components: {
        PageList
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

