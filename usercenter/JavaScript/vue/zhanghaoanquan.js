let zhanghaoanquan = Vue.component('account-safe',{
    props:['userdata'],
    template:`<div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <h2><i class="fa fa-user-secret fa-2x"></i>账号安全</h2>
        </div>
    </div>
    <div class="line-border"></div>
    <main>
        <ul>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>绑定邮箱</div>
                    <div class="col-xs-4">{{this.userdata.emailvalue}}</div> 
                    <div class="col-xs-4">更换邮箱</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>绑定手机</div>
                    <div class="col-xs-4">{{userdata.phonevalue}}</div> 
                    <div class="col-xs-4">更换手机</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>设置密码</div>
                    <div class="col-xs-4">{{userdata.passwordvalue}}</div> 
                    <div class="col-xs-4">更换密码</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-exclamation-circle"></i>密保问题</div>
                    <div class="col-xs-4">{{userdata.questionvalue}}</div> 
                    <div class="col-xs-4">设置</div> 
                </div>
            </li>
            <li class="safe-list-li">
            <div class="container">
                <div class="col-xs-4 text-left"><i class="fa fa-fw fa-exclamation-circle"></i>实名认证</div>
                <div class="col-xs-4">{{userdata.certificationvalue}}</div> 
                <div class="col-xs-4"><router-link to="/shimingrenzheng"> 认证 </router-link></div> 
            </div>
            </li>
        </ul>
    </main>
</div>

    `,
    data:function(){
        return {
            userdatatemp:[{
                emaillt:'绑定邮箱',emailvalue:' ',emailrt:' ',classname:' '
            },{
                phonelt:' ',phonevalue:' ',phonert:' ',classname:' '
            },{
                passwordlt:' ',passwordvalue:' ',passwordrt:' ',classname:' '
            },{ 
                questionlt:' ',questionvalue:' ',questionrt:' ',classname:' '
            },{
                certificationlt:' ',certificationvalue:' ',certificationrt:' ',classname:''
            }]
            }
        },
    mounted:function(){
        console.log(this.userdatatemp)
        this.userdatatemp[0].emaillt="绑定邮箱"
        this.userdatatemp[1].phonelt="绑定手机"
        this.userdatatemp[2].passwordlt="设置密码"
        this.userdatatemp[3].questionlt="密保问题"
        this.userdatatemp[4].certificationlt="实名认证"

        if(this.userdata.emailif != 1){
            this.userdatatemp[0].emailvalue="未绑定邮箱"
            this.userdatatemp[0].emailrt="绑定邮箱"
            this.userdatatemp[0].classname="fa fa-fw fa-exclamation-circle"
        }else{
            this.userdatatemp[0].emailvalue=this.userdata.emailvalue
            this.userdatatemp[0].emailrt="更换邮箱"
            this.userdatatemp[0].classname="fa fa-fw fa-check-circle"
        }

        if(this.userdata.phoneif != 1){
            this.userdatatemp[1].phonevalue="未绑定手机"
            this.userdatatemp[1].phonert="绑定手机"
            this.userdatatemp[1].classname="fa fa-fw fa-exclamation-circle"
        }else{
            this.userdatatemp[1].phonevalue=this.userdata.emailvalue
            this.userdatatemp[1].phonert="更换邮箱"
            this.userdatatemp[1].classname="fa fa-fw fa-check-circle"
        }

        if(this.userdata.passwordif != 1){
            this.userdatatemp[2].passwordvalue="未设置密码"
            this.userdatatemp[2].passwordrt="设置密码"
            this.userdatatemp[2].classname="fa fa-fw fa-exclamation-circle"
        }else{
            this.userdatatemp[2].passwordvalue="已设置密码"
            this.userdatatemp[2].passwordrt="更换密码"
            this.userdatatemp[2].classname="fa fa-fw fa-check-circle"
        }

        if(this.userdata.questionif != 1){
            this.userdatatemp[3].questionvalue="未设置密保问题"
            this.userdatatemp[3].questionrt="设置"
            this.userdatatemp[3].classname="fa fa-fw fa-exclamation-circle"
        }else{
            this.userdatatemp[3].questionvalue="已设置密保问题"
            this.userdatatemp[3].questionrt="更换"
            this.userdatatemp[3].classname="fa fa-fw fa-check-circle"
        }

        if(this.userdata.certificationif != 1){
            this.userdatatemp[4].certificationvalue="未实名认证"
            this.userdatatemp[4].certificationrt="查看认证"
            this.userdatatemp[4].classname="fa fa-fw fa-check-circle"
        }else{
            this.userdatatemp[4].certificationvalue="已实名认证"
            this.userdatatemp[4].certificationrt="未认证"
            this.userdatatemp[4].classname="fa fa-fw fa-check-circle"
        }
        console.log(userdatatemp)
    }
})