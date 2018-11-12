let denglujilu = Vue.component('denglujilu',{
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title"><h2><i class="fa fa-location-arrow fa-2x"></i>登录记录</h2></div>
        <div class="line-border"></div>
    </div>
    <div class="text-center">
    <table id="denglujilu" class="table table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>时间</th>
                            <th>IP</th>
                            <th>地理位置</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2018-11-11 21:19:56</td>
                            <td>192.168.***.**</td>
                            <td>致远星</td>
                        </tr>
                        <tr>
                            <td>2018-11-11 21:19:56</td>
                            <td>192.168.***.**</td>
                            <td>致远星</td>
                        </tr>
                    </tbody>
                </table>
</div>
</div>
    `,
    data:function(){
        return {
            datas:{}
        }
    },
    methods:{

    },
})


let pinglunjilu = Vue.component('pinglunjilu',{
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title"><h2><i class="fa fa-location-arrow fa-2x"></i> 评论记录</h2></div>
        <div class="line-border"></div>
    </div>
    <div class="text-center">
</div>
</div>
    `,
    data:function(){
        return {
            datas:{}
        }
    },
    methods:{

    },
})



let wodejilu = Vue.component('my-record',{
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title"><h2><i class="fa fa-location-arrow fa-2x"></i> 我的记录</h2></div>
        <div class="line-border"></div>
    </div>
    <div class="">
    <ul class="nav nav-tabs">
    <li><router-link to="/wodejilu/denglujilu">登录记录 </router-link></li>
    <li><router-link to="/wodejilu/pinglunjilu">评论记录 </router-link></li>
    </ul>
    <router-view></router-view>
</div>
</div>
    `,
    data:function(){
        return {
            datas:{}
        }
    },
    methods:{

    },
})