<template>
    <section :class="b('')">
        <div :class="b('wrapper')" ref="wrap">
            <router-link :key="item.tag" v-for="(item,i) of titles" tag="a" :to="`/${item.tag}`">
                <span :ref="`title${i}`" @click="getSleft(i)">{{item.title}}</span>
            </router-link>
        </div>
        <a :class="b('btn')">
            <span></span>
        </a>
    </section>
</template>

<script>
import create from '@/utils/create';

let scrollLeftRafId;

export default create({
    name: 'tab',
    data() {
        return {
            active: 0,
            titles: [
                { title: '推荐', tag: 'recommend' },
                { title: '军事', tag: 'military' },
                { title: '娱乐', tag: 'entertainment' },
                { title: '视频', tag: 'video' },
                { title: '影视', tag: 'media' },
                { title: '热点', tag: 'hot' },
                { title: '科技', tag: 'technology' },
                { title: '汽车', tag: 'car' },
                { title: '房产', tag: 'house' },
                { title: '体育', tag: 'sports' },
                { title: '', tag: 'null' }
            ]
        };
    },
    methods: {
        getSleft(i) {
            const el = this.$refs.wrap;
            const target = this.$refs[`title${i}`][0];

            // 已经滚动了多少，（范围是0至元素宽度减去屏幕宽度）
            const from = el.scrollLeft;
            // 最初要滚动到中间多少距离，是一个定值
            const to =
                target.offsetLeft - (el.offsetWidth - target.clientWidth) / 2;
            this.scrollLeftTo(el, from, to);
        },
        scrollLeftTo(el, from, to, duration = 0) {
            this.cancelRaf(scrollLeftRafId);
            const taht = this;
            let count = 0;
            const frames =
                duration === 0 ? 1 : Math.round((duration * 1000) / 16);

            function animate() {
                el.scrollLeft += (to - from) / frames;

                if (++count < frames) {
                    taht.raf(animate);
                }
            }
            animate();
        },
        raf(cb) {
            window.requestAnimationFrame(cb);
        },
        cancelRaf(id) {
            window.cancelAnimationFrame(id);
        }
    }
});
</script>

<style lang="scss">
@import '../common/scss/variable.scss';
@import '../common/scss/mixins.scss';

.tt-tab {
    overflow: hidden;
    position: fixed;
    background: #f4f5f6;
    top: 44px;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 36px;
    &__wrapper {
        font-size: 0;
        overflow: hidden;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        display: flex;
        padding-right: 44px;
        &::-webkit-scrollbar {
            display: none;
        }
        a {
            color: #505050;
            text-decoration: none;
            font-size: 17px;
            line-height: 36px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
            span {
                // 为了让滚动放在正中，这里计算按span标签的左侧算的
                display: block;
                padding: 0 13px;
            }
            &.router-link-active {
                color: $color-theme;
            }
            &:nth-last-child(1) {
                margin-left: 13px;
            }
        }
    }
    &__btn {
        display: block;
        position: fixed;
        top: 44px;
        right: 0;
        width: 40px;
        height: 36px;
        background-size: 20px;
        font-size: 35px;
        color: #f85959;
        text-align: center;
        line-height: 36px;
        span {
            display: block;
            position: absolute;
            width: 40px;
            height: 36px;
            background-size: 20px;
            font-size: 35px;
            color: #f85959;
            text-align: center;
            line-height: 36px;
            box-shadow: -6px -2px 27px rgba(177, 173, 173, 0.2);
            background: #f4f5f6;
            &::before {
                position: absolute;
                content: ' ';
                height: 4px;
                width: 17px;
                background-color: #f85959;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
            }
            &::after {
                position: absolute;
                content: ' ';
                height: 17px;
                width: 4px;
                background-color: #f85959;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
            }
        }
    }
}
</style>
