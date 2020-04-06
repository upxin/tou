<template>
    <section>
        <template v-for="(item, index) in data">
            <a v-if="index>1" :class="b('')" class="tt-hairline--bottom" :key="item.id">
                <aside :class="b('left')">
                    <h3>莴笋不要只会炒着吃了，川菜师傅教你这样秘制，下饭爽口特别好吃</h3>
                    <div :class="b('left__dots')">
                        <span>环球时报</span>
                        <span>评论12312</span>
                    </div>
                </aside>
                <aside :class="b('right')"></aside>
            </a>
            <a v-else :class="b('',['noflex'])" class="tt-hairline--bottom" :key="item.id">
                <h3>明朝皇帝吃土拨鼠，清朝皇帝吃不到牛肉，皇帝们吃得可比你差多了</h3>
                <div :class="b('someimg')">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div :class="b('dots')">
                    <span>热</span>
                    <span>华商热线</span>
                    <span>评论4343</span>
                    <span>12分钟前</span>
                </div>
            </a>
        </template>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';

export default create({
    name: 'mainlist',
    props: {
        data: {
            type: Array,
            default: () => [{ title: '', id: '色布' }]
        }
    }
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import '@/common/scss/func.scss';

.tt-mainlist {
    padding: 16px 0;
    display: flex;
    position: relative;
    &--noflex {
        display: block;
    }
    h3 {
        font-size: 17px;
        margin-right: 12px;
        font-weight: normal;
        line-height: 21px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    &__left {
        width: 67%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
            }
        }
    }
    &__right {
        width: 33%;
        height: px2rem(74);
        background: url(../../imgs/r.jpeg) no-repeat;
    }
    &__someimg {
        margin-top: 6px;
        width: 100%;
        ul {
            display: flex;
            font-size: 0;
            li {
                width: 33%;
                height: px2rem(74);
                background: url(../../imgs/r.jpeg) no-repeat;
                background-size: 100% 100%;
                margin-right: 2px;
            }
        }
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
