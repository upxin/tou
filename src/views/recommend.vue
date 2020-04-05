<template>
    <page-list>
        <template v-slot:list>
            <Top :lists="lists" />
            <MainList :data="data" />
        </template>
    </page-list>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import Top from '@/views/components/top';
import MainList from '@/views/components/mainlist';

export default create({
    name: 'recommend',
    data() {
        return {
            data: [
                { title: '', id: 'edcrfv' },
                { title: '', id: 'tgbyhn' },
                { title: '', id: 'ujmi' }
            ],
            lists: [
                {
                    type: 'top',
                    title: '家国清明，凝聚坚定前行的力量',
                    origin: '央视新闻网',
                    comment: '1232',
                    time: '1小时前'
                },
                {
                    type: 'top',
                    title: '往来皆静默 定格三分钟',
                    origin: '湖北新闻网',
                    comment: '132',
                    time: '1小时前'
                },
                {
                    type: 'top',
                    title: '家国清明，凝聚坚定前行的力量',
                    origin: '央视新闻网',
                    comment: '12932',
                    time: '1小时前'
                }
            ]
        };
    },
    components: {
        PageList,
        Top,
        MainList
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
