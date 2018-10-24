
    const routes = [
        { path: '/zhongxinshouye', component: zhongxinshouye },
      ]

      const router = new VueRouter({
        routes
      })

    let appVue = new Vue({
        el:'#tf-home',
        router,
        data:{

        },
        methods:{

        }
    }).$mount('#tf-home')
