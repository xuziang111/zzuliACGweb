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
                <input class="form-control" type="text" id="username" placeholder="昵称">
            </div>
            <!-- 个性签名做处理防止xml注入 -->
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="usermotto">个性签名：</label>
                <input class="form-control" type="text" id="usermotto" placeholder="个性签名">
            </div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="Birthday">出生日期：</label>
                <input class="form-control" type="date" id="Birthday" placeholder="如：1998-05-25">
            </div>
            <div class="form-group form-group-sm sex-radio-container">
                用户性别? XiuJi?：
                <label class="radio-inline">
                     <input type="radio" name="sex" id="inlineRadio1" value="1" hidden> 
                     <span class="sex-btn">猛汉</span>
                </label>
                <label class="radio-inline">
                    <input type="radio" name="sex" id="inlineRadio2" value="2"> 
                    <span class="sex-btn">萌妹</span>
                </label>
                <label class="radio-inline">
                    <input type="radio" name="sex" id="inlineRadio2" value="3" checked> 
                    <span class="sex-btn">保密</span>
                </label>
            </div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label">上次登录IP：</label>
                    <input class="form-control" type="text" id="FromIP" placeholder="127.0.0.1" readonly>
            </div>
            <div class="form-group form-group-sm">
                <label class="col-sm-2 control-label" for="identity">用户身份：</label>
                    <input class="form-control" type="text" id="identity" placeholder="校外人士" readonly>
            </div>
            <button id="false-id-sumbit" class="btn btn-default">保存</button>
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
    `
})