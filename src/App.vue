<template>
    <div id="app">
        <div id="nav">
            <router-link to="/simple-unary-call">simple unary call</router-link>
            |
            <router-link to="/server-streaming-call"
                >server-streaming-call</router-link
            >
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    created() {}
};
</script>

<style lang="less" scoped>
#app {
    display: flex;
    flex-direction: column;
    background-color: #fff;

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
</style>
