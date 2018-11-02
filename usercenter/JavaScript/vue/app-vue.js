
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
          usersafedata:{
              email:{if:1,emailvalue:"example@email.com"},
              phone:{if:1,phonevalue:13312345678},
              password:{if:0,passwordvalue:"已设置"},
              question:{if:0,questionvalue:"未设置密保问题"},
              certification:{if:0,certificationvalue:"未实名认证"}
            } 
        },
        methods:{
          asideOpen:function(){
            this.ifblack = true;
          },
          asideClose:function(){
            this.ifblack = false;
          },
          ajaxsuccess:function(data){
            this.usersafedata=Object.assign({}, this.usersafedata,data)
            console.log(this.usersafedata)

            if(this.usersafedata.email.if != 1){
                this.usersafedata.email.emailvalue="未绑定邮箱"
            }
            if(this.usersafedata.phone.if != 1){
                this.usersafedata.phone.phonevalue="未绑定手机"
            }
            if(this.usersafedata.password.if != 1){
                this.usersafedata.password.passwordvalue="未设置密码"
            }else{
                this.usersafedata.password.passwordvalue="已设置密码"
            }
            if(this.usersafedata.question.if != 1){
                this.usersafedata.question.questiondvalue="未设置密保问题"
            }else{
                this.usersafedata.question.questiondvalue="已设置密保问题"
            }
            if(this.usersafedata.certification.if != 1){
                this.usersafedata.certification.certificationvalue="未实名认证"
            }else{
                this.usersafedata.certification.certificationvalue="已实名认证"
            }
        }
        },
        created:function(){
        //从后台拿信息
        let user = document.cookie
        _self = this
        console.log(_self.usersafedata)
        console.log(_self)
        $.ajax({
            type: "post",
            url: "/downloadpreson",
            data:user,
            processData: false,    //false
            cache: false,    //缓存
            beforeSend:function(){
                _self.ajaxsuccess(_self.usersafedata)
            },
            success: function(data){
                //_self.ajaxsuccess(data)     
            },
            fail:function(){
                console.log('error')
            },
            complete:function(){
                setTimeout(function(){
                    $('.loading').removeClass("active")
                },1000)
            }
      })
        },
    }).$mount('#tf-home')
