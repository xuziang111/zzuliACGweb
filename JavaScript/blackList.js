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
//加载进页面时和点击1号页面行为相同
//之后点击页面都返回
//模拟接收的时json数据
var bList ='{"code":200,"message":null,"data":{"total":8,"size":5,"pages":2,"current":1,"records":[{"uid":1,"head":"Images/head.jpg","userName":"userName","time":"2018-06-30 02:44:21"},{"uid":2,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"uid":3,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"uid":4,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"uid":5,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"uid":6,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"uid":7,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"uid":8,"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"}]}}'
//----下面时成功收到时执行的内容
bList = JSON.parse(bList)
let temp={}
temp.size = 5
temp.data = bList.data.records
console.log(bList.data.records)
temp.domValue = ``
temp.data.forEach(function(e){
    temp.domValue += `<main>
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
                    </main>`
})

temp.domNav = ''
temp.current = bList.data.total
console.log(Math.ceil(bList.data.total/temp.size))
if(bList.data.total <= temp.size*5){
    for(let i=1;i<=Math.ceil(bList.data.total/temp.size);i++)
    temp.domNav += `<li><a href="#">${i}</a></li>`
}
console.log(temp.domNav)
console.log(temp.domValue)
function mkTemplate(){
    return `
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    `
}
}())