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
            <li :class="this.bLists.pre.state">
                <span @click="topage" :data-page="this.bLists.pre.page" aria-hidden="true">&laquo;</span>
            </li>

            <li @click="topage" :class="page.current" v-for="(page) in bLists.pages"><span :data-page="page.page">{{page.page}}</span></li>
            
            <li :class="this.bLists.next.state ">
                <span @click="topage" :data-page="this.bLists.next.page" aria-hidden="true">&raquo;</span>
            </li>
        </ul>
    </nav>
</div>
    `,
    data:function(){
        return bLists={}
    },
    methods:{
        removebl:function(e){//点击移除时
            let user = document.cookie //读cookie验证用户
            let temp = {user:user,removeBl:e.target.value}
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
        },
        topage:function(e){//点击页面标签时
            let user = document.cookie
            let temp ={page:e.target.dataset.page,user:user}
            temp = JSON.stringify(temp)
            $.ajax({
                type: "post",
                url: "/loadingBlacklist",
                data: temp, 
                processData: false,    //false
                cache: false,    //缓存
                beforeSend:function(){
                    console.log(this.$options.methods)
                    $('.loading').addClass("active")
                }.bind(this),
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
        },
        ajaxSuccess:function(){
            return 
        }
    },
    beforeCreate:function(){//组件创建前执行
        console.log(this.$options.methods)
        this.bLists ='{"code":200,"message":null,"data":{"total":18,"size":10,"pages":10,"current":5,"records":[{"uid":1,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":2,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":3,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":4,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":5,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"}]}}'
        this.bLists = JSON.parse(this.bLists)
        this.bLists.pages=[]
        function makeLi(a,b){
            if(a===b){
                return {page:a,current:'active'}
            }
            return {page:a,current:''}
        }
        this.bLists.pre={}
        this.bLists.next={}
        if(this.bLists.data.current===1){
            this.bLists.pre.state = "disabled"
            this.bLists.next.page = this.bLists.data.current+1
        }else if(this.bLists.data.current===this.bLists.data.pages){
            this.bLists.next.state = "disabled"
            this.bLists.pre.page = this.bLists.data.current-1
        }else{
            this.bLists.pre.page = this.bLists.data.current-1
            this.bLists.next.page = this.bLists.data.current+1
        }
        if(this.bLists.data.pages<5){
            for(let i=1;i<=this.bLists.data.pages;i++){
                    this.bLists.pages.push(makeLi(i,this.bLists.data.current))
                }
        }else{
            if(this.bLists.data.pages-this.bLists.data.current>=2&&this.bLists.data.current>=3){
                for(let i=this.bLists.data.current-2;i<=this.bLists.data.current+2;i++){
                    this.bLists.pages.push(makeLi(i,this.bLists.data.current))
                }
            }else if(this.bLists.data.current<=2){
                for(let i=1;i<=5;i++){
                    this.bLists.pages.push(makeLi(i,this.bLists.data.current))
                }
            }else{
                for(let i=this.bLists.data.pages-4;i<=this.bLists.data.pages;i++){
                    this.bLists.pages.push(makeLi(i,this.bLists.data.current))
                }
            }
        }
        this.bLists.page = 0
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