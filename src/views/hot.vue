<template>
    <page-list>
        <template v-slot:list>
            <div
                v-show="!isLoading"
                v-for="item in lists"
                :class="b('')"
                :key="item.comment"
                class="m-hairline--bottom"
            >
                <h3>{{item.title}}</h3>
                <div :class="b('dots')">
                    <span>置顶</span>
                    <span>{{item.origin}}</span>
                    <span>{{item.comment}}</span>
                    <span>{{item.time}}</span>
                </div>
            </div>
            <Loading v-show="isLoading"></Loading>
        </template>
    </page-list>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';
import PageList from '@/base/pagelist';
import { likeLoading } from '@/common/js/mixins';

export default create({
    name: 'hot',
    mixins: [likeLoading],

    data() {
        return {
            isLoading: true,
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
                    title: '家国清明，凝聚坚定前行的力量',
                    origin: '央视新闻网',
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
        PageList
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.tt-hot {
    position: relative;
    padding: 16px 0px;
    min-height: 42px;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
    h3 {
        font-size: 17px;
        line-height: 21px;
        font-weight: normal;
    }
    &__dots {
        color: #999;
        overflow: hidden;
        font-size: 0;
        margin-top: 6px;
        display: flex;
        span {
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            border: 1px solid #fff;
            border-radius: 2px;
            margin-right: 5px;
            &:nth-child(1) {
                width: 24px;
                font-size: 9px;
                color: #f85959;
                border-color: rgba(248, 89, 89, 0.5);
            }
        }
    }
}
</style>

