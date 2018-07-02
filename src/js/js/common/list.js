function fn(){
    this.num=8;
    this.a="";
    this.init();
    this.loCal = localStorage.getItem("init")?JSON.parse(localStorage.getItem("init")):{};
}
$.extend(fn.prototype,{
    init:function(){
        this.skip();
    },
    skip:function(){
       $.ajax({
           type:"get",
           url:"http://localhost/php/jquery/src/json/details.json",
           dataType:"json",
           success:$.proxy(this.setVal,this),
       })
    },
    setVal:function(data){
        var page = Math.ceil(data.length/this.num);
        this.page = page;
        this.data =data;
        this.add(1)
        //添加页码数
        
        for(var i=1;i<=page;i++){
            var btn = $("<a href='##'></a>");
            btn.html(i);
            btn.addClass("Btn");
            $(".down").before(btn);
           
        }
        $(".Btn").eq(0).addClass("active");
        //点击跳转
            $(".Btn").on({
                click:$.proxy(this.numSkip,this)
            })
        //上一页
            $(".up").on({
                click:$.proxy(this.numUp,this)
            })
        //下一页
            $(".down").on({
                click:$.proxy(this.numDown,this)
            })
    },
    numDown:function(){
        var num = $(".active").html();
        if(num>=this.page){
            num=this.page;
        }else{
            num++;
            $(".Btn").eq(num-1).addClass("active").siblings().removeClass("active");
            this.add(num);
        }
    },
    numUp:function(){
        var num = $(".active").html();
        if(num<=1){
            num=1;
        }else{
            num--;
            $(".Btn").eq(num-1).addClass("active").siblings().removeClass("active");
            this.add(num);
        }
    },
    numSkip:function(e){
       var e = $(e.target);
       e.addClass("active").siblings().removeClass("active");
       var num=e.html();
       this.add(num);
    },
    add:function(a){
        //console.log(this.data)
        var str="";
        for(var i=(a-1)*this.num;i<=Math.min(this.data.length, this.num * a -1);i++){
            str+=`<li data-id="${this.data[i].id}">
            <a href="##"><img src="${this.data[i].img1}"></a>
            <div class="list-name">
                <p>${this.data[i].title}</p>
                <p>${this.data[i].price}</p>
                <a href="##" class="shop"><i class="iconfont icon-gouwuche"></i>加入购物车</a>
            </div>
        </li>`
        }
        $(".main>ul").html(str);
        this.skipDetails();
        this.goshop();
    },
    //点击跳转详情
    skipDetails:function(){
        $(".main>ul>li>a").on({
            click:$.proxy(this.tz)
        })
    },
    //记录数据
    tz:function(){
        var id = $(this).parent().attr("data-id");
        location.href="http://localhost/php/jquery/src/html/details.html?"+id;                          
    },
    goshop:function(){
        $(".shop").on({
            click:$.proxy(this.buyshop,this)
        })
    },
    buyshop:function(e){
        
        var e = $(e.target)
        var id = e.parent().parent().attr("data-id");
        //console.log(id)
        var n = this.loCal[id];
        if(!n){
            n=1;
        this.loCal[id]=n;
        }else{
            n++;
        this.loCal[id]=n;
        }
        var str = JSON.stringify(this.loCal);
        localStorage.setItem("init",str);

    }
})
new fn();