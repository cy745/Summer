import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import DetailsPage from "@/pages/DetailsPage";
import PicturePage from "@/pages/PicturePage";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {
        path: '/', components: {
            left: PicturePage,
            right: DetailsPage,
        }
    },
    {
        path: '/details', components: {
            left: DetailsPage,
            right: DetailsPage,
        }
    },
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')

