Vue.component('xxx',{
    data:function(){
        return{
            blist:{page:1}
        }
    },
    methods:{
        add:function(){
            console.log(this.blist)
            this.blist.page++
        }
    },
    template:`<p @click='add'>{{blist.page}}Hello World</p>`
})

new Vue({el:'#xxx'})


