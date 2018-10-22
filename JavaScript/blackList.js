(function(){
    //进入黑名单页面时进行加载
    $('#BLanchor').on('click',function(){
        ajaxSuccess(bList)
        // let temp ={}
        //     temp['needPage'] = 1
        //     temp = JSON.stringify(temp)
        // $.ajax({
        //     type: "post",
        //     url: "/loadingBlacklist",
        //     data: pageData, 
        //     processData: false,    //false
        //     cache: false,    //缓存
        //     beforeSend:function(){
        //         $('.loading').addClass("active")
        //     },
        //     success: function(data){//重新接收数据
        //         console.log('成功移除')
        //         ajaxSuccess(data)      
        //     },
        //     fail:function(){
        //         console.log('error')
        //     },
        //     complete:function(){
        //         setTimeout(function(){
        //             $('.loading').removeClass("active")
        //         },1000)
        //     }
        // }) 
    })
    //点击页面标签时
    $("#bl-nav").on("click",function(e){
        if(e.target.tagName === 'SPAN'){
            let temp ={}
            temp['needPage'] = $(e.target).attr('data-page') 
            temp = JSON.stringify(temp)
        $.ajax({
            type: "post",
            url: "/loadingBlacklist",
            data: temp, 
            processData: false,    //false
            cache: false,    //缓存
            beforeSend:function(){
                $('.loading').addClass("active")
            },
            success: function(data){
                ajaxSuccess(data);      
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
    //点击移除按钮时
    $("#blackList-content").on("click",function(e){
        if(e.target.tagName === 'BUTTON'){
        let temp = {removeBl:$(e.target).attr('value')}
        temp= JSON.stringify(temp)
        $.ajax({
            type: "post",
            url: "/removeBlacklist",
            data: temp, 
            processData: false,    //false
            cache: false,    //缓存
            beforeSend:function(){
                $('.loading').addClass("active")
            },
            success: function(data){//重新接收数据
                console.log('成功移除')
                ajaxSuccess(data)      
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


//模拟接收的时json数据
var bList ='{"code":200,"message":null,"data":{"total":18,"size":10,"pages":2,"current":1,"records":[{"uid":1,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":2,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":3,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":4,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":5,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"}]}}'
//----下面时成功收到时执行的内容
function ajaxSuccess(bList){
    bList = JSON.parse(bList)
    let temp={}
    temp.size = bList.data.size || 10
    console.log(bList.data.records)
    temp.domValue = ``
    temp.data = bList.data.records
    temp.data.forEach(function(e){
    temp.domValue += `
                    <div class="blackList-item">
                        <div class="blackList-item-lt">
                            <div>
                                <img src="${e.head}">
                            </div>
                            <div class="blackList-item-lt-message text-left">
                                <div>
                                    <p>${e.userName}</p>
                                </div>
                                <div>
                                    <p>添加时间：${e.time}</p>
                                </div>
                            </div>
                        </div>
                        <div class="blackList-item-rt">
                            <button value="${e.uid}" class="btn btn-default">移除</button>
                        </div>
                    </div>
                    `
    })
    temp.domNav = ``
    temp.current = bList.data.current
    temp.total = bList.data.total
    temp.page = Math.ceil(bList.data.total/temp.size)

    temp.domNav = makeLi(temp,bList)
    //将生成元素插入到页面中
    $('.blackList-content').prepend(temp.domValue)
    $('#bl-nav>.pagination').append(temp.domNav)
}

function makeLiFor(a,b,current){//循环生成li
    let domNav=``
    for(let i=a;i<=b;i++){
        if(i===current){//给当前页面标签加上.active}
                domNav = domNav +  `<li class="active"><span data-page="${i}" href="#">${i}</span></li>`
        }else{
                domNav = domNav + `<li class=""><span data-page="${i}" href="#">${i}</span></li>`
        }
    }
    return domNav
}
//-------
function makeLi(temp,bList){//生成要渲染的分页标签
    console.log(temp.current)
    let a,b
    if(bList.data.total <= temp.size*5){
        //标签页小于等于5时
        a=1;
        b=temp.page
        return makeLiFor(a,b,temp.current)
    }else if(bList.data.total > temp.size*5){
        //总标签页大于5时
        if(temp.current < 3){//当前标签页小于5时
            a=1;
            b=temp.page;
            return  makeLiFor(a,b,temp.current)
        }else if(temp.current >= 3 && temp.current >= temp.page-2){//当前标签页大于最大标签页-2时
            a=temp.current-2;
            b=temp.current+2;
            return  makeLiFor(a,b,temp.current)
        }else if(temp.current > temp.page-2){
            a=temp.page-4;
            b=temp.page;
            return  makeLiFor(a,b,temp.current)
        }
    }
}

//---------

}())