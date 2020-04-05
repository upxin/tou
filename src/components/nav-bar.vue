<template>
    <section :class="b('')">
        <div :class="b('wrapper')" ref="wrap" :style=" trans ">
            <a
                v-for="(title, i) of titles"
                :key="title"
                :ref="`wrap${i}`"
                :class="{ active: active === i }"
                @click="hanlderNav(i)"
            >{{title}}</a>
        </div>
        <router-view />
    </section>
</template>

<script>
import create from '@/utils/create';

export default create({
    name: 'navbar',
    data() {
        return {
            active: 0,
            titles: [
                '军事',
                '娱乐',
                '视频',
                '影视',
                '愉快',
                '你你',
                '是谁',
                '事实',
                '与人'
            ],
            trans: {
                transform: ''
            }
        };
    },
    created() {
        this.prevOffset = 0; // 保存上次滚动的偏移
    },
    methods: {
        hanlderNav(i) {
            this.active = i;
            this.animate(i);
        },
        animate(i) {
            const el = this.$refs[`wrap${i}`][0];
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
    overflow: hidden;
    &__wrapper {
        display: inline-block;
        transition: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
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
}
</style>
