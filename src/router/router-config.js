const routerConfig = [
    {
        path: "/",
        redirect: "/simple-unary-call"
    },
    {
        path: "/simple-unary-call",
        component: () =>
            import(
                /* webpackChunkName: "simple-unary-call" */ "@/views/simple-unary-call.vue"
            )
    },
    {
        path: "/server-streaming-call",
        component: () =>
            import(
                /* webpackChunkName: "server-streaming-call" */ "@/views/server-streaming-call.vue"
            )
    }
];

export default routerConfig;
