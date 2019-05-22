import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import Index from '@/page/index.vue'
import blank from '@/layout/blank.vue'
// import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'defaultPage',
            component: defaultPage,
            children: [{
                path: "/index",
                name: "index",
                component: Index
            }, {
                path: '/changeCity',
                name: "changeCity",
                component: changeCity
            }, ]
        },
        {
            path: '/blank',
            name: "blank",
            component: blank,
            children: [{
                    path: "/login",
                    name: "login",
                    component: login
                },
                {
                    path: "/register",
                    name: "register",
                    component: register
                }
            ]
        }

    ]
})