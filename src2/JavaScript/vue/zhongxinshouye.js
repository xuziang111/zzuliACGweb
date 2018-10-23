Vue.component('user-center-home-page',{

    template:`
    <div class="tab-pane active" id="tab_1">
    <div class="row">
        <div class="col-md-2">
            <div class="user-head center-block">
                <img src="Images/head.jpg" class="img-responsive img-circle"/>
            </div>
        </div>
        <div class="col-md-10 text-left">
            <div class="user-head-left">
                <span class="user-top-name">大番薯</span>
                <span class="user-top-tags user-top-tag1-color1">校园认证</span>
                <span class="user-top-tags user-top-tag1-color2">正式会员</span>
                <div class="user-motto">"个性签名"</div>
                <div class="user-level row">
                    <span class="col-sm-2 user-level-span">LV0</span>
                    <div class="col-sm-10 progress user-level-progress">
                        <div class="progress-bar progress-bar-striped active" style="width:6%"></div>
                    </div>
                </div>
                <a class="btn btn-user" href="#" role="button">修改资料</a>
                <a class="btn btn-user" href="#" role="button">个人空间</a>
            </div>
        </div>
    </div>
    <div class="line-border"></div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <span>账号状态</span>
            <a href="#" class="btn btn-user btn-xs">更多设置</a>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="user-msg-th">
                <img class="user-msg-th-icon" src="Images/邮箱.png"/>
                <div class="user-msg-th-cont">
                    <b class="h-safe-title">我的邮箱</b>
                    <p class="h-safe-desc">绑定邮箱即可邮箱登录</p>
                    <a class="btn btn-user btn-xs disabled" role="button">已绑定</a>
                    <a href="#" class="btn btn-user btn-xs">更改邮箱</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="user-msg-th">
                <img class="user-msg-th-icon" src="Images/手机.png"/>
                <div class="user-msg-th-cont">
                    <b class="h-safe-title">我的手机</b>
                    <p class="h-safe-desc">绑定手机即可手机登录</p>
                    <!--<span class="btn btn-user btn-xs">已绑定</span>-->
                    <!--<a href="#" class="btn btn-user btn-xs">更改手机</a>-->
                    <a href="#" class="btn btn-user btn-xs disabled" role="button">暂不支持！</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="user-msg-th">
                <img class="user-msg-th-icon" src="Images/写报告.png"/>
                <div class="user-msg-th-cont">
                    <b class="h-safe-title">密保问题</b>
                    <p class="h-safe-desc">设置密保，账号更安全</p>
                    <!--<span class="btn btn-user btn-xs">已绑定</span>-->
                    <!--<a href="#" class="btn btn-user btn-xs">更改邮箱</a>-->
                    <a href="#" class="btn btn-user btn-xs">去设置</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="user-msg-th">
                <img class="user-msg-th-icon" src="Images/代办事项.png"/>
                <div class="user-msg-th-cont">
                    <b class="h-safe-title">实名认证</b>
                    <p class="h-safe-desc">学号认证、证件认证</p>
                    <!--<span class="btn btn-user btn-xs">已绑定</span>-->
                    <!--<a href="#" class="btn btn-user btn-xs">更改邮箱</a>-->
                    <a href="#" class="btn btn-user btn-xs">去设置</a>
                </div>
            </div>
        </div>

        <!--<div class="col-md-6" style="background-color: #00FFCC">-->
        <!---->
        <!--</div>-->
        <!--<div class="col-md-6" style="background-color: pink"></div>-->
    </div>
    <div class="line-border"></div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <span>成就勋章（待建预留）</span>
            <a href="#" class="btn btn-user btn-xs">更多勋章设置</a>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="user-msg-th">
                <img class="user-msg-th-icon" src="Images/邮箱.png"/>
                <div class="user-msg-th-cont">
                    <b class="h-safe-title">我的邮箱</b>
                    <p class="h-safe-desc">绑定邮箱即可邮箱登录</p>
                    <span class="btn btn-user btn-xs">已绑定</span>
                    <a href="#" class="btn btn-user btn-xs">更改邮箱</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})