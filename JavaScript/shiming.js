(function(){
    replaceImg("#input-idcard-obverse",'#idcard-obverse',"change-idcard-obverse-btn")
    replaceImg("#input-idcard-reverse",'#idcard-reverse',"change-idcard-reverse-btn")
    function replaceImg(a,b,c){
        $(a).on("change", function (e) {
            var fileInput = $(a)[0];        
            var file = fileInput.files[0];        //创建读取文件的对象
            console.log(file.type)
            console.log(file)
            if(file.type.indexOf("image") < 0){
                alert('请上传图片文件')
                return
            }        
            var reader = new FileReader();                 //创建文件读取相关的变量       
            var imgFile;                 //为文件读取成功设置事件        
            reader.onload=function(e) {            
                // alert('文件读取完成');            
                imgFile = e.target.result;                
                $(b).attr('src',imgFile)
            };                 
            reader.readAsDataURL(file);
            document.getElementById(c).onclick=function(){
                let tempForm = new FormData();
                console.log(file)
                tempForm.append("xxx","file");
                tempForm.append("fileImg",file);
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
            }
        })
    }
}())