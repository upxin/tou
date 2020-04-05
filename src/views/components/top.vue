<template>
    <section>
        <div v-for="item in lists" :class="b('')" :key="item.comment" class="tt-hairline--bottom">
            <h3>{{item.title}}</h3>
            <div :class="b('dots')">
                <span>置顶</span>
                <span>{{item.origin}}</span>
                <span>{{item.comment}}</span>
                <span>{{item.time}}</span>
            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';

export default create({
    name: 'top',
    props: {
        lists: {
            type: Array,
            default: () => []
        }
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.tt-top {
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
