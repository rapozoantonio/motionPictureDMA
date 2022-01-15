const routes=[
    {path:'/motionPictureDMA',component:motionPictureDMA},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')