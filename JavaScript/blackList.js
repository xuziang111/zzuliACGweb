(function(){
    $("blackList-item-rt>button").on("click",function(){
        
        $.ajax({
            type: "post",
            url: "/removeBlacklist",
            data: tempForm, 
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