let wodexinxi = Vue.component('per-inf',{
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <h2><i class="fa fa-address-card-o fa-2x"></i> 我的信息</h2>
            <a href="#" class="btn btn-user btn-xs">更多设置</a>
        </div>
        <div class="line-border"></div>
        <div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="username">昵称：</label>
                <input class="form-control" v-model="userdata.username" type="text" id="username" placeholder="昵称">
            </div>
            <!-- 个性签名做处理防止xml注入 -->
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="usermotto">个性签名：</label>
                <input class="form-control" v-model="userdata.usermotto" type="text" id="usermotto" placeholder="个性签名">
            </div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="birthday">出生日期：</label>
                <input class="form-control" v-model="userdata.birthday" type="date" id="birthday" placeholder="如：1998-05-25">
            </div>
            <div class="form-group form-group-sm sex-radio-container">
                用户性别? XiuJi?：
                <label class="radio-inline" :class="userdata.sexselect[0]">
                     <input @click="sexclick" type="radio" v-model="userdata.sex" name="sex" id="inlineRadio1" value="0" hidden> 
                     <span class="sex-btn">猛汉</span>
                </label>
                <label class="radio-inline" :class="userdata.sexselect[1]">
                    <input @click="sexclick" type="radio" v-model="userdata.sex" name="sex" id="inlineRadio2" value="1"> 
                    <span class="sex-btn">萌妹</span>
                </label>
                <label class="radio-inline" :class="userdata.sexselect[2]">
                    <input @click="sexclick" type="radio" v-model="userdata.sex" name="sex" id="inlineRadio2" value="2"> 
                    <span class="sex-btn">保密</span>
                </label>
            </div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label">上次登录IP：</label>
                    <input class="form-control" v-model="userdata.ip" type="text" id="FromIP" placeholder="127.0.0.1" readonly>
            </div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="identity">用户身份：</label>
                    <input class="form-control" v-model="userdata.identity" type="text" id="identity" placeholder="校外人士" readonly>
            </div>
            <button @click="upload" id="false-id-sumbit" class="btn btn-default">保存</button>
            <!-- <div class="form-group form-group-sm active">
                <label class="col-sm-2 control-label">院系 Faculty</label>
                <div class="col-sm-4" readonly>
                    <select class="form-control" name="in-school">
                        <option value="1">电气信息工程学院</option>
                        <option value="2">机电工程学院</option>
                        <option value="3">食品与生物工程学院</option>
                        <option value="4">烟草科学与工程学院</option>
                        <option value="5">材料与化学工程学院</option>
                    </select>
                </div>
            </div> -->
        </div>
    </div>
</div>
    `,
    data:function(){
        return{
            userdata:{
                username:'啦啦啦',
                usermotto:'个性签名',
                birthday:'1970-01-01',
                sex:2,
                sexselect:['','',''],
                ip:'127.0.0.1',
                identity:'校外人士'
            },
        }
    },
    methods:{
        sexclick:function(e){//高亮选中按钮与更改选中的值
            if(e.target.tagName === "INPUT"){
                console.log(e)
                console.log(e.target.value)
                for(let i=0;i<this.userdata.sexselect.length;i++){
                    if(i === parseInt(e.target.value)){
                        console.log('xxx')
                        this.userdata.sexselect[i] = 'active'
                        this.userdata.sex=i
                    }else{
                        this.userdata.sexselect[i] = ''
                    }
                }
            }
        },
        upload:function(){
            console.log('')
            if(this.userdata.username){
                if(!(/^[\u4e00-\u9fa5_a-zA-Z0-9]{2,8}$/ig.test(this.userdata.username))){
                    alert('昵称只能输入2-8位英文、数字、汉字或_组合')
                    return
                }
            }else{
                alert('请填写昵称')
                return
            }
            let user = document.cookie
            let data={user:user,username:this.userdata.username,usermotto:this.userdata.usermotto,birthday:this.userdata.birthday,sex:this.userdata.sex}
            $.ajax({
                type: "post",
                url: "/uploadpreson",
                data: JSON.stringify(data),
                processData: false,    //false
                cache: false,    //缓存
                beforeSend:function(){
                    $('.loading').addClass("active")
                },
                success: function(data){
                    console.log(data);      
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

        }
    },
    created:function(){
        let user = document.cookie
        _self = this
        $.ajax({
            type: "post",
            url: "/downloadpreson",
            data:user,
            processData: false,    //false
            cache: false,    //缓存
            beforeSend:function(){
                _self.userdata = Object.assign({}, _self.userdata, JSON.parse('{"username":"哈哈哈","usermotto":"个性签名2","birthday":"1971-01-01","sex":"2"}'))
                _self.userdata.sexselect[_self.userdata.sex] = 'active'

            },
            success: function(data){
                console.log(data);      
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
    }
})