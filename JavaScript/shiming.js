(function(){
    replaceImg("#input-idcard-obverse",'#idcard-obverse')
    replaceImg("#input-idcard-reverse",'#idcard-reverse')
    let imageList={}
    function replaceImg(a,b){
        $(a).on("change", function (e) {
            var fileInput = $(a)[0];        
            var file = fileInput.files[0];        //创建读取文件的对象
            console.log(file.type)
            console.log(file)
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
                alert("请完善内容")
                return 
            }
            return document.getElementById(a).value
        }
        tempForm.append("itype",temp("itype"));
        tempForm.append("true-name",temp("true-name"));
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
}())
