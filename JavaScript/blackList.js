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
var bList ='{"code":200,"message":null,"data":{"total":8,"size":5,"pages":2,"current":1,"records":[{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"},{"head":"Images/head.jpg","userNname":"userName","time":"2018-06-30 02:44:21"}]}}'
console.log(JSON.parse(testboke))
bList = JSON.parse(bList)

bList.size = bList.data.total/5
function (){
    return `
    <main class="blackList-content">
        <div class="blackList-item">
            <div class="blackList-item-lt">
                <div>
                    <img src="Images/head.jpg">
                </div>
                <div class="blackList-item-lt-message text-left">
                    <div>
                        <p>user-name</p>
                    </div>
                    <div>
                        <p>添加时间：2018-06-30 02:44:21</p>
                    </div>
                </div>
            </div>
            <div class="blackList-item-rt">
                <button class="btn btn-default">移除</button>
            </div>
        </div>
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
    </main>
    `
}
}())