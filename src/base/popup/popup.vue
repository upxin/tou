<template>
    <section :class="b('')" v-if="show">
        <div :class="b('shadow')">
            <div :class="b('img')"></div>
            <p>已加载好您感兴趣的头条</p>
            <button>立即打开</button>
            <span @click="handleDel"></span>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';

export default create({
    data() {
        return {
            show: this.isShow
        };
    },
    props: {
        isShow: {
            type: Boolean,
            default: () => false
        }
    },
    watch: {
        isShow(n) {
            this.show = n;
        }
    },
    methods: {
        handleDel() {
            this.bus.$emit('offShow', false);
        }
    },
    name: 'popup'
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.tt-popup {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    &__shadow {
        width: 270px;
        height: 225px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -113px;
        margin-left: -135px;
        border-radius: 8px;
        font-size: 0;
        span {
            width: 40px;
            height: 32px;
            background: url(./del.png) no-repeat center;
            background-size: 17px;
            position: absolute;
            right: 0px;
            top: 0px;
        }
        p {
            text-align: center;
            color: #a5a5a5;
            font-size: 17px;
            margin-top: 6px;
            margin-bottom: 24px;
        }
        button {
            margin-left: 25px;
            width: 220px;
            height: 40px;
            background: #ff6762;
            text-align: center;
            border-radius: 8px;
            text-shadow: 0px 1px 1px #f0221c;
            color: #fff;
            font-size: 20px;
        }
    }
    &__img {
        margin-top: 10px;
        margin-left: 54px;
        width: 165px;
        height: 121px;
        background: url(./popup.png) no-repeat;
        background-size: contain;
    }
}
</style>

