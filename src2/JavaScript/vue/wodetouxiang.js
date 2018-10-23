Vue.component('my-head',{
    template:`
    <div class="tab-pane fade" id="tab_3">
    <div class="row user-msg text-left">
        <div class="user-msg-title"><h2><i class="fa fa-user-o fa-2x"></i> 我的头像</h2></div>
        <div class="line-border"></div>
    </div>
    <div class="text-center">
        <div class="user-head">
            <img src="Images/head.jpg" class="img-circle"  width="105" height="105"/>
        </div>
        <div class="cas-container">
            <div id="img-container">
                <img id="user-head-image" src="Images/head-zhanwei.png">
            </div>
            <div id="pre-container">
                <div class=""><div class="img-preview squ"><img src="Images/preview.png"></div><p>方形头像</p></div>
                <div class=""><div class="img-preview cir"><img src="Images/preview.png"></div><p>圆形头像</p></div>
            </div>
        </div>
        <div class="btn-container">
            <label class="btn btn-primary btn-upload" for="input-image" title="Upload image file">
                <input type="file" class="sr-only" id="input-image" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">
                <span class="docs-tooltip" data-toggle="tooltip" data-animation="false" title="Import image with Blob URLs">
                  选择图片<span class="fa fa-upload"></span>
                </span>
            </label>
        </div>
        <button id="change-img-btn"type="button" class="btn btn-user">上传头像</button>
    </div>
</div>
    `})