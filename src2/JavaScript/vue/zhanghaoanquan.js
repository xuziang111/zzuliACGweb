let zhanghaoanquan = Vue.component('account-safe',{
    template:`
    <div>
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
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-exclamation-circle"></i>绑定新浪微博</div>
                    <div class="col-xs-4">绑定已过期，需要重新绑定</div> 
                    <div class="col-xs-4">重新绑定</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>绑定邮箱</div>
                    <div class="col-xs-4">example@email.com</div> 
                    <div class="col-xs-4">已绑定</div> 
                </div>
            </li>
        </ul>
    </main>
</div>
    `
})