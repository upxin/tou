<template>
    <section :class="b('')">
        <a>
            <aside :class="b('left')">
                <div :class="b('logo')"></div>
                <span>今日头条</span>
            </aside>
            <button>打开</button>
        </a>
    </section>
</template>

<script type="text/ecmascript-6">
import create from '@/utils/create';

export default create({
    name: 'footer'
});
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import '@/common/scss/func.scss';

.tt-footer {
    position: fixed;
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 100%;
    color: #222;
    bottom: 0;
    z-index: 999;
    & > a {
        display: flex;
        padding: 0 15px;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }
    button {
        width: 72px;
        height: 28px;
        font-size: 14px;
        border-radius: 14px;
        font-weight: 500;
        background-image: linear-gradient(90deg, red, #ff5050);
        color: #fff;
        text-align: center;
        border: 0;
    }
    &__left {
        display: flex;
        align-items: center;
        span {
            margin-left: 8px;
            font-size: 14px;
        }
    }
    &__logo {
        background: url(../imgs/tou.png) no-repeat;
        overflow: hidden;
        background-size: 100% 100%;
        border: 1px solid #eee;
        border-radius: 7px;
        width: 36px;
        height: 36px;
    }
}
</style>
