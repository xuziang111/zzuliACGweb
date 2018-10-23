(function(){//页面加载时要从服务器或者本地获取用户信息渲染在页面上
    $(".radio-inline").on("click",function(e){
        console.log(e.target.tagName)
        if(e.target.tagName === "INPUT"){
            let xxx = $(e.target).parent();
            console.log($(e.target).parent());
            xxx.addClass("active").siblings().removeClass("active"); 
            console.log($("input[name='sex']:checked").val())
         }
    })
    $("#false-id-sumbit").on("click",function(){
        // let tempForm = new FormData();
        let data ={}
        $("input[name='sex']").for
        function temp(a){ //获取上传内容
            if(document.getElementById(a).value === ""){
                return false
            }
            return document.getElementById(a).value
        }
            if(!(temp("username")&&temp("usermotto")&&temp("Birthday"))){
                alert("有内容未填写")
                return 
            }
        data.username=temp("username")
        data.usermotto=temp("usermotto")
        data.Birthday=temp("Birthday")
        data.sex=$("input[name='sex']:checked").val()
        data=JSON.stringify(data)//数据转json
        // tempForm.append("username",temp("username"));
        // tempForm.append("usermotto",temp("usermotto"));
        // tempForm.append("Birthday",temp("Birthday"));
        // tempForm.append("sex",$("input[name='sex']:checked").val())
        //append添加要传输的内容
        $.ajax({
            type: "post",
            url: "/xxx",
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
    })

}())