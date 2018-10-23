Vue.component('app-aside',{
    template:`
    <aside class="col-sm-2 col-md-2 box1">
    <ul class="nav nav-pills nav-stacked navbar-inverse">
        <li><span>个人中心</span></li>
        <li class="active">
            <a href="#tab_1" ><i class="fa fa-fw fa-home"></i> 中心首页 </a>
        </li>
        <li>
            <a href="#tab_2" class="tab-default"><i class="fa fa-fw fa-user"></i> 我的信息 </a>
        </li>
        <li>
            <a href="#tab_3"  class="tab-default"><i class="fa fa-fw fa-camera-retro"></i> 我的头像 </a>
        </li>
        <li>
        <a href="#tab_4"  class="tab-default"><i class="fa fa-fw fa-flag"></i> 我的勋章 </a>
        </li>
        <li>
        <a href="#tab_5"  class="tab-default"><i class="fa fa-fw fa-user-secret"></i> 账号安全 </a>
        </li>
        <li>
        <a href="#tab_6" id="BLanchor"  class="tab-default"><i class="fa fa-fw fa-user-times"></i> 黑名单管理 </a>
        </li>
        <li>
        <a href="#tab_7"  class="tab-default"><i class="fa fa-fw fa-location-arrow"></i> 我的记录 </a>
        </li>
        <li>
        <a href="#tab_8"  class="tab-default"><i class="fa fa-fw fa-id-card"></i> 实名认证 </a>
        </li>
        <li>
        <a href="#tab_9"  class="tab-default"><i class="fa fa-fw fa-user-plus"></i> 邀请注册 </a>
        </li>
    </ul>
    <ul class="nav nav-pills nav-stacked navbar-inverse nav-pills-special">
        <!--<li>-->
        <!--<a href="#"> 个人空间 </a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#"> 创作中心 </a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#"> 投稿管理 </a>-->
        <!--</li>-->
    </ul>
</aside>
    `
})