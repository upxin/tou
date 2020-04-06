<template>
    <section :class="b('')">
        <div :class="b('wrapper')" ref="wrap" :style=" trans ">
            <a
                v-for="(item, i) of titles"
                :key="item.tag"
                :ref="`title${i}`"
                :class="{ active: active === i }"
                @click="hanlderNav(item, i)"
            >{{item.title}}</a>
        </div>
        <a :class="b('btn')">
            <span></span>
        </a>
    </section>
</template>

<script>
import create from '@/utils/create';

export default create({
    name: 'navbar',
    data() {
        return {
            active: this.getLoc('active') || 0,
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
                { title: '体育', tag: 'sports' }
            ],
            trans: {
                transform: ''
            }
        };
    },
    created() {
        this.prevOffset = 0; // 保存上次滚动的偏移
    },
    mounted() {
        this.animate(this.active);
    },
    methods: {
        getLoc(v) {
            return JSON.parse(window.sessionStorage.getItem(v));
        },
        setLoc(v) {
            return window.sessionStorage.setItem('active', JSON.stringify(v));
        },
        hanlderNav(item, i) {
            this.animate(i);
            if (this.active === i) return;
            this.active = i;
            this.setLoc(i);
            this.$router.push({ path: `${item.tag}` });
        },
        animate(i) {
            const el = this.$refs[`title${i}`][0];
            const elWith = el.offsetWidth;
            const elLeftDistance = el.getBoundingClientRect().left; // 元素距离浏览器左边的距离
            const viewport = window.innerWidth;
            const terminal = (viewport - elWith) / 2; // 滚动完毕距离左边的距离，称为终点距离
            const wrapWidth = this.$refs.wrap.offsetWidth;
            const limit = wrapWidth - window.innerWidth; // 向左滚动的最大距离，超过就出现空白了
            let prefix = Math.abs(elLeftDistance - terminal); // 需要位移多少距离

            if (elLeftDistance > terminal) {
                // 点击元素距离左边的距离大于终点距离，向左位移
                prefix += this.prevOffset;
                prefix = Math.min(prefix, limit);
                this.trans.transform = `translateX(${-prefix}px)`;
                this.prevOffset = prefix;
            }
            if (elLeftDistance < terminal) {
                prefix = this.prevOffset - prefix;
                prefix = Math.min(-prefix, 0);
                this.trans.transform = `translateX(${prefix}px)`;
                this.prevOffset = Math.abs(prefix);
            }
        }
    }
});
</script>

<style lang="scss">
@import '../common/scss/variable.scss';
@import '../common/scss/mixins.scss';

.tt-navbar {
    font-size: 0;
    overflow: hidden;
    position: fixed;
    background: #f4f5f6;
    top: 44px;
    left: 0;
    z-index: 100;
    width: 100%;
    &__wrapper {
        font-size: 0;
        display: inline-block;
        padding-right: 44px;
        @include no-wrap;
        a {
            white-space: nowrap;
            display: inline-block;
            padding-left: 10px;
            padding-right: 10px;
            color: #505050;
            text-decoration: none;
            font-size: 17px;
            line-height: 26px;
            height: 26px;
            margin-left: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
        }
        & > .active {
            color: $color-theme;
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
