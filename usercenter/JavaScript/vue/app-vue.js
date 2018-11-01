
    const routes = [
        { path: '/', component: zhongxinshouye },
        { path: '/zhongxinshouye', component: zhongxinshouye },
        { path: '/wodexinxi', component: wodexinxi},
        { path: '/wodetouxiang', component: wodetouxiang },
        { path: '/wodexunzhang', component: wodexunzhang },
        { path: '/zhanghaoanquan', component: zhanghaoanquan },
        { path: '/heimingdanguanli', component: heimingdanguanli },
        { path: '/wodejilu', component: wodejilu },
        { path: '/shimingrenzheng', component: shimingrenzheng },
        { path: '/yaoqingzhuce', component: yaoqingzhuce }
      ]

      const router = new VueRouter({
        routes
      })

    let appVue = new Vue({
        el:'#tf-home',
        router,
        data:{
          ifblack:false,
        },
        methods:{
          asideOpen:function(){
            this.ifblack = true;
          },
          asideClose:function(){
            this.ifblack = false;
          }
        }
    }).$mount('#tf-home')
