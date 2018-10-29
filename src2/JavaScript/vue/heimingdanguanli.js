let heimingdanguanli = Vue.component('black-list',{
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <h2><i class="fa fa-user-times fa-2x"></i> 黑名单管理</h2>
        </div>
    </div>
    <div class="line-border"></div>
    <main id="blackList-content" class="blackList-content">
        <div class="blackList-item" v-for="(bList,key) in bLists.data.records">
            <div class="blackList-item-lt">
                <div>
                    <img :src="bList.head">
                </div>
                <div class="blackList-item-lt-message text-left">
                    <div>
                        <p>{{bList.userName}}</p>
                    </div>
                    <div>
                        <p>添加时间：{{bList.time}}</p>
                    </div>
                </div>
            </div>
            <div class="blackList-item-rt">
                <button :value="bList.uid" class="btn btn-default" @click="removebl">移除</button>
            </div>
        </div>
    </main>
    <nav id="bl-nav"aria-label="Page navigation">
        <ul class="pagination">
            
        </ul>
    </nav>
</div>
    `,
    data:function(){
        return bLists={}
    },
    methods:{
        removebl:function(e){
            let temp = {removeBl:e.target.value}
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
    },
    beforeCreate:function(){//组件创建前执行
        this.bLists ='{"code":200,"message":null,"data":{"total":18,"size":10,"pages":2,"current":1,"records":[{"uid":1,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":2,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":3,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":4,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":5,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"}]}}'
        this.bLists = JSON.parse(this.bLists)
        console.log(this.bLists)
        // ajaxSuccess(this.bLists)
        //     // $('#BLanchor').on('click',function(){
        //     //     ajaxSuccess(this.bLists)
        //     //     // let temp ={}
        //     //     //     temp['needPage'] = 1
        //     //     //     temp = JSON.stringify(temp)
        //     //     // $.ajax({
        //     //     //     type: "post",
        //     //     //     url: "/loadingBlacklist",
        //     //     //     data: pageData, 
        //     //     //     processData: false,    //false
        //     //     //     cache: false,    //缓存
        //     //     //     beforeSend:function(){
        //     //     //         $('.loading').addClass("active")
        //     //     //     },
        //     //     //     success: function(data){//重新接收数据
        //     //     //         console.log('成功移除')
        //     //     //         ajaxSuccess(data)      
        //     //     //     },
        //     //     //     fail:function(){
        //     //     //         console.log('error')
        //     //     //     },
        //     //     //     complete:function(){
        //     //     //         setTimeout(function(){
        //     //     //             $('.loading').removeClass("active")
        //     //     //         },1000)
        //     //     //     }
        //     //     // }) 
        //     // })
        //     $("#bl-nav").on("click",function(e){
        //         if(e.target.tagName === 'SPAN'){
        //             let temp ={}
        //             temp['needPage'] = $(e.target).attr('data-page') 
        //             temp = JSON.stringify(temp)
        //         $.ajax({
        //             type: "post",
        //             url: "/loadingBlacklist",
        //             data: temp, 
        //             processData: false,    //false
        //             cache: false,    //缓存
        //             beforeSend:function(){
        //                 $('.loading').addClass("active")
        //             },
        //             success: function(data){
        //                 ajaxSuccess(data);      
        //             },
        //             fail:function(){
        //                 console.log('error')
        //             },
        //             complete:function(){
        //                 setTimeout(function(){
        //                     $('.loading').removeClass("active")
        //                 },1000)
        //             }
        //         })
        //     }
        //     })
        //     //点击移除按钮时
        //     $("#blackList-content").on("click",function(e){
        //         if(e.target.tagName === 'BUTTON'){
        //         let temp = {removeBl:$(e.target).attr('value')}
        //         temp= JSON.stringify(temp)
        //         $.ajax({
        //             type: "post",
        //             url: "/removeBlacklist",
        //             data: temp, 
        //             processData: false,    //false
        //             cache: false,    //缓存
        //             beforeSend:function(){
        //                 $('.loading').addClass("active")
        //             },
        //             success: function(data){//重新接收数据
        //                 console.log('成功移除')
        //                 ajaxSuccess(data)      
        //             },
        //             fail:function(){
        //                 console.log('error')
        //             },
        //             complete:function(){
        //                 setTimeout(function(){
        //                     $('.loading').removeClass("active")
        //                 },1000)
        //             }
        //         })
        //     }
        //     })
        
        
        // //模拟接收的时json数据
        
        // //----下面时成功收到时执行的内容
        // function ajaxSuccess(bList){
        //     bList = JSON.parse(bLists)
        //     let temp={}
        //     temp.size = bLists.data.size || 10
        //     console.log(bLists.data.records)
        //     temp.domValue = ``
        //     temp.data = bLists.data.records
        //     temp.data.forEach(function(e){
        //     temp.domValue += `
        //                     <div class="blackList-item">
        //                         <div class="blackList-item-lt">
        //                             <div>
        //                                 <img src="${e.head}">
        //                             </div>
        //                             <div class="blackList-item-lt-message text-left">
        //                                 <div>
        //                                     <p>${e.userName}</p>
        //                                 </div>
        //                                 <div>
        //                                     <p>添加时间：${e.time}</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div class="blackList-item-rt">
        //                             <button value="${e.uid}" class="btn btn-default">移除</button>
        //                         </div>
        //                     </div>
        //                     `
        //     })
        //     temp.domNav = ``
        //     temp.current = bLists.data.current
        //     temp.total = bLists.data.total
        //     temp.page = Math.ceil(bLists.data.total/temp.size)
        
        //     temp.domNav = makeLi(temp,bLists)
        //     //将生成元素插入到页面中
        //     $('.blackList-content').prepend(temp.domValue)
        //     $('#bl-nav>.pagination').append(temp.domNav)
        // }
        
        // function makeLiFor(a,b,current){//循环生成li
        //     let domNav=``
        //     for(let i=a;i<=b;i++){
        //         if(i===current){//给当前页面标签加上.active}
        //                 domNav = domNav +  `<li class="active"><span data-page="${i}" href="#">${i}</span></li>`
        //         }else{
        //                 domNav = domNav + `<li class=""><span data-page="${i}" href="#">${i}</span></li>`
        //         }
        //     }
        //     return domNav
        // }
        // //-------
        // function makeLi(temp,bLists){//生成要渲染的分页标签
        //     console.log(temp.current)
        //     let a,b
        //     if(bLists.data.total <= temp.size*5){
        //         //标签页小于等于5时
        //         a=1;
        //         b=temp.page
        //         return makeLiFor(a,b,temp.current)
        //     }else if(bLists.data.total > temp.size*5){
        //         //总标签页大于5时
        //         if(temp.current < 3){//当前标签页小于5时
        //             a=1;
        //             b=temp.page;
        //             return  makeLiFor(a,b,temp.current)
        //         }else if(temp.current >= 3 && temp.current >= temp.page-2){//当前标签页大于最大标签页-2时
        //             a=temp.current-2;
        //             b=temp.current+2;
        //             return  makeLiFor(a,b,temp.current)
        //         }else if(temp.current > temp.page-2){
        //             a=temp.page-4;
        //             b=temp.page;
        //             return  makeLiFor(a,b,temp.current)
        //         }
        //     }
        // }
    }
})

Vue.component('blc',{
    template:`
    <div class="blackList-item">
        <div class="blackList-item-lt">
            <div>
                <img src="{{e.head}}">
            </div>
            <div class="blackList-item-lt-message text-left">
                <div>
                    <p>{e.userName}</p>
                </div>
                <div>
                    <p>添加时间：{{e.time}}</p>
                </div>
            </div>
        </div>
        <div class="blackList-item-rt">
            <button value="{{e.uid}}" class="btn btn-default">移除</button>
        </div>
    </div>
    `
})