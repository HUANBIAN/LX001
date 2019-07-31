import VueRouter from "vue-router";

import home from "./components/tabbar/Home.vue";
import member from "./components/tabbar/Member.vue";
import shopping from "./components/tabbar/Shopping.vue";
import search from "./components/tabbar/Search.vue";
import journalism from './components/News/JournalismComponent.vue'

var router = new VueRouter({
    routes: [
        { path: "/", redirect: './home' },
        { path: "/home", component: home },
        { path: "/member", component: member },
        { path: "/shopping", component: shopping },
        { path: "/search", component: search },
        { path: '/Journalism', component: journalism }
    ],
    linkActiveClass: "mui-active"
});

export default router;