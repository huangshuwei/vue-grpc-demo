import Vue from "vue";
import VueRouter from "vue-router";
import routerConfig from "./router-config";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routerConfig
});

export default router;
