let shimingrenzheng = Vue.component('certification-id',{
    props:['userdata'],
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <h2><i class="fa fa-user-plus fa-2x"></i> 实名认证</h2>
        </div>
        <div class="line-border"></div>
        <div class="notice-sth">
            <p style="color:#00a1d6;font-size:18px">实名认证成功后,可以享受开通直播间等服务!</p>
            <p><i class="fa fa-exclamation-triangle"></i>注意事项 </p>
            <p>1.每个证件只能绑定一个账号
            <p>2.证件照不清晰或与输入的信息不匹配,将导致实名认证被驳回
            <p>3.您提供的证件信息将受到严格保护,仅用于身份验证,未经本人许可不会用于其他用途</p>
            <p><i class="fa fa-exclamation-triangle" style="color:#F25D8E"></i>证件要求</p>
            <p>1.需上传本人露脸手持二代身份证背面照＋身份证正反面照片（不需手持）</p>
            <p>2.证件必须在有效期内，有效期需在一个月以上</p>
            <p><i class="fa fa-exclamation-triangle" style="color:#F25D8E"></i>照片要求</p>
            <p>1.本人手持证件正面露脸，五官清晰可辨</p>
            <p>2.证件照上信息需完整且清晰可辨（无反光、遮挡、水印、证件套、logo等）</p>
            <p>3.申请人填写的“真实姓名”和“证件号码”需和提交证件照片信息一致</p>
            <p>4.证件必须真实拍摄，不能使用复印件</p>
            <p>5.确保照片完整（不缺边角），证件周围不允许加上边角框（如：加上红框等）</p>
        </div>
    </div>
    <main>
            <label for="true-name">真实姓名：<input type="text" id="true-name" name="true-name"></label>
        <select name="itype" id="itype">
            <option value="0">身份证</option>
            <option value="1">港澳居民来往内地通行证</option>
            <option value="2">台湾居民来往大陆通行证</option>
            <option value="3">护照(中国签发)</option>
            <option value="4">护照(外国签发)</option>
            <option value="5">外国人永久居留证</option>
        </select>
        <label for="id-number">证件号：<input type="text" id="id-number" name="id-number"></label>
        <div>
            <div id="idcard-obverse-container" class="idcard-container">
                <p>正面</p>
                <img id="idcard-obverse" src="Images/head-zhanwei.png">
            </div>
            <div class="btn-container">
                <label class="btn btn-primary btn-upload" for="input-idcard-obverse" title="Upload image file">
                    <input type="file" class="sr-only" id="input-idcard-obverse" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">
                    <span class="docs-tooltip" data-toggle="tooltip" data-animation="false" title="Import image with Blob URLs">
                     选择图片<span class="fa fa-upload"></span>
                    </span>
                </label>
            </div>
        </div>
    </main>
    <div>
        <div id="idcard-reverse-container" class="idcard-container">
            <p>反面</p>
            <img id="idcard-reverse" src="Images/head-zhanwei.png">
        </div>
        <div class="btn-container">
           <label class="btn btn-primary btn-upload" for="input-idcard-reverse" title="Upload image file">
                <input type="file" class="sr-only" id="input-idcard-reverse" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">
                <span class="docs-tooltip" data-toggle="tooltip" data-animation="false" title="Import image with Blob URLs">
                  选择图片<span class="fa fa-upload"></span>
                </span>
            </label>                                  
        </div>
    </div>
    <button id="true-id-sumbit" class="btn btn-default">上传</button>
</div>
    `,
    data:function(){
        return{
            aaa:1
        }
    },
    methods:{

    },
    mounted:function(){
    replaceImg("#input-idcard-obverse",'#idcard-obverse')
    replaceImg("#input-idcard-reverse",'#idcard-reverse')
    let imageList={}
    function replaceImg(a,b){
        $(a).on("change", function (e) {
            var fileInput = $(a)[0];        
            var file = fileInput.files[0];        //创建读取文件的对象
            if(file.size > 5242880){
                alert('上传图片请小于5mb')
                return
            }
            if(file.type.indexOf("image") < 0){
                alert('请上传图片文件')
                return
            }
            imageList[a.slice(a.indexOf('-')+1)]  = file;      
            var reader = new FileReader();                 //创建文件读取相关的变量       
            var imgFile;                 //为文件读取成功设置事件        
            reader.onload=function(e) {            
                // alert('文件读取完成');            
                imgFile = e.target.result;                
                $(b).attr('src',imgFile)
            };                 
            reader.readAsDataURL(file);
        })
    }
    $("#true-id-sumbit").on("click",function(){
        let imageFile=Object.getOwnPropertyNames(imageList);
        console.log(imageFile)
        if(imageFile.length !== 2){
            alert("请上传图片文件")
            return
        }
        let tempForm = new FormData();
        imageFile.forEach(function(e){//上传图片内容
            tempForm.append(e,imageList[e]);
        })
        function temp(a){ //获取上传内容
            if(document.getElementById(a).value === ""){
                return false
            }
            return document.getElementById(a).value
        }
        //判断是否都填写完成
        if(!(temp("true-name")&&temp("true-name")&&temp("id-number"))){
            alert("有内容未填写")
            return 
        }
        console.log('fin')
        tempForm.append("true-name",temp("true-name"));
        tempForm.append("itype",temp("itype"));
        tempForm.append("id-number",temp("id-number"));
        //append添加要传输的内容
        $.ajax({
            type: "post",
            url: "/xxx",
            data: tempForm,
            contentType: 'multipart/form-data', 
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
    })
    }
})