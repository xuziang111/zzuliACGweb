(function(){
    $("#input-image").one("change",function(){
        $('#user-head-image').cropper({
            aspectRatio:1/1,
            movable:true,
            minContainerWidth:200,
            minContainerHeight:127,
            preview:$(".img-preview"),
            dragMode:'move',
            crop: function(event) {
            }
          });
    })
    $("#input-image").on("change", function (e) {
        var fileInput = document.getElementById("input-image");        
        var file = fileInput.files[0];        //创建读取文件的对象
        if(file.size > 5242880){
            alert('上传图片请小于5mb')
            return
        }
        if(file.type.indexOf("image") < 0){
            alert('请上传图片文件')
            return
        }  
        var reader = new FileReader();                 //创建文件读取相关的变量       
        var imgFile;                 //为文件读取成功设置事件        
        reader.onload=function(e) {            
            // alert('文件读取完成');            
            imgFile = e.target.result;                 
            $('#img-container>img').cropper('replace',imgFile,false );
        };                 
        reader.readAsDataURL(file);
    })
    
    //剪切部分转换为base64
    $("#change-img-btn").on("click", function () {
        var cas=$('#img-container>img').cropper('getCroppedCanvas');
        var base64url=cas.toDataURL('image/jpeg');
        cas.toBlob(function (e) {
            console.log(e);  //生成Blob的图片格式，base64卡顿时使用
        })
        console.log(base64url); //生成base64图片的格式

        $.ajax({
            url:'/xxx',
            type:'POST',
            data:base64url,
            beforeSend:function(){
                    $('.loading').addClass("active")
            },
            success:function(data){
                console.log('上传成功')
            },
            fail:function(){
                console.log('上传失败')
            },
            complete:function(){
                setTimeout(function(){
                    $('.loading').removeClass("active")
                },1000)
            }
        })
    })


})()