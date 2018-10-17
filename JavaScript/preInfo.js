(function(){
    $("#false-id-sumbit").on("click",function(){
        let tempForm = new FormData();
        $("input[name='sex']").for
        function temp(a){ //获取上传内容
            return document.getElementById(a).value
        }
        tempForm.append("itype",temp("itype"));
        tempForm.append("usermotto",temp("usermotto"));
        tempForm.append("Birthday",temp("Birthday"));
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