Vue.component('app-main',{
    template:`
    <div class="overlay">
        <div class="content">
            <h1>郑州轻工业大学<strong><span class="color">动漫协会</span></strong></h1>
            <p class="lead">--前方网站建设中，通行禁止！<i class="fa fa-exclamation-triangle fa-1x" aria-hidden="true"></i></p>
        </div>
        <div id="body-container" class="container">
            <div class="row">
                <div class="user-Center-Container">
                    <span class="glyphicon glyphicon-chevron-right user-Center" aria-hidden="true"></span>
                </div>
                <app-aside></app-side>
                <main class="col-sm-10 col-md-10 box2">
                    <div class="tab-content">
                        <router-view></router-view>
                        <user-center-home-page></user-center-home-page>
                        <per-inf></per-inf>
                        <!-- 更换头像 -->
                        <my-head></my-head>
                        <my-medal></my-medal>
                        <account-safe></account-safe>
                        <black-list></black-list>
                        <my-record></my-record>
                        <certification-id></certification-id>
                        <invite-register></invite-register>
                    </div>
                </main>
                <div class="clearfix"></div>
                <!-- becomeBlack -->
                <div class="becomeBlack"></div>
                <!-- loading -->
                <div class="loading">
                        <div>   
                        <div class="box-taiji">
                            <div class="circle-01"></div>
                            <div class="circle-02"></div>
                        </div>
                        <p>少女祈祷中...</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `
})