function fn(){
    this.qx = $("#check");
    //this.z = $(".zprice");
    this.loc ={};
    this.init();
}
$.extend(fn.prototype,{
    init:function(){
      $.ajax({
        type:"get",
        url:"../json/details.json",
        dataType:"json",
        success:$.proxy(this.setval,this)
      })
    },
    setval:function(data){
        if(localStorage.getItem("init")){
            var id= JSON.parse(localStorage.getItem("init"))
            //把id传给属性;
            this.loc = id;
            var str="";
            for(var i in id){
                for(var key in data){
                    if(i == data[key].id){
                        str+=`<ul data-id="${i}">
                        <li>
                            <a href="#"><img src="${data[key].img1}" ></a>
                            <input type="checkbox" class="radio">
                        </li>
                        <li><span>${data[key].title}</span></li>
                        <li class="onepri">
                        ${data[key].vip}
                        </li>
                        <li class="Numb">
                            <a href="##" class="prin">-</a>
                            <input type="text" value="${id[i]}" >
                            <a href="##" class="add">+</a>
                        </li>
                        <li class="total">
                        <span class="zprice">${data[key].vip}</span>
                        </li>
                        <li class="oper">
                            <a href="##">收藏</a>
                            <a href="##" class="rem">删除</a>
                        </li>
                    </ul>`
                    }
                }
            }
            $(".table-common").html(str)
            this.operation()
        }
    },
    operation:function(){
        //加减
        $(".add").on({
                click:$.proxy(this.add,this)
            })
        $(".prin").on({
            click:$.proxy(this.prin,this)
        })
        //全选
        this.qx.on({
            click:$.proxy(this.select,this)
        })
        //选择框
        $(".radio").on({
            click:$.proxy(this.radio,this)
        })
        //删除
        $(".rem").on({
            click:$.proxy(this.dele,this)
        })
    },
    select:function(){
        if(this.qx.prop("checked")){
            $(".radio").prop("checked",true) 
            var sum =0;
            for(var i=0;i<$(".zprice").length;i++){
                sum+=Number($(".zprice").eq(i).html())
            }
            sum= Math.ceil(sum)
            $(".combination").html(sum) 
        }else{
            $(".radio").prop("checked",false)
            $(".combination").text(0)
        }
    },
    radio:function(e){
        //勾选总价
        var e = $(e.target);
        if(e.prop("checked")){
            var plu = e.parent().parent().find(".total").text()
            var osum = $(".combination").text()
            //勾选总价添加
            var oum = Math.floor((Number(plu)+Number(osum))*10)/10;
            $(".combination").text(oum);

            
        }else{
            //没有勾选总价减少
            var plu = e.parent().parent().find(".total").text()
            var osum = $(".combination").text()
            var oum = Math.floor((Number(osum)-Number(plu))*10)/10;
            $(".combination").text(oum);
        }
        //单选全选
        var bStop = true;
        for(var i = 0;i<$(".radio").length;i++){
            if(!$(".radio").eq(i).prop("checked")){
                bStop = false;
                break;
            }
        }
        if(bStop){
            this.qx.prop("checked",true);
        }else{
            this.qx.prop("checked",false);
        }
    },
    add:function(e){
        var e = $(e.target);
        var num = e.prev().val();
        num++;
        e.prev().val(num);
        var dj= e.parent().prev().text()
       // console.log(dj*10)
        e.parent().next().text( (dj*10*num)/10);
    },
    prin:function(e){
        var e = $(e.target);
        var num = e.next().val()
        if(num<=1){
            num =1;
        }else{
            num--;
            e.next().val(num);
            var dj= e.parent().prev().text()
        e.parent().next().text((dj*10*num)/10);
        }
    },
    //删除
    dele:function(e){
        var e = $(e.target);
      
        //如果有勾选的商品删除则总价减少.
        e.parent().parent().remove();
        if(e.parent().parent().find(".radio").prop("checked")){
            var sum = $(".combination").text() - e.parent().prev().text();

            $(".combination").text(sum);
        }
        var id = Number(e.parent().parent().attr("data-id"));
        console.log(this.loc,id)
        delete this.loc[id]
        var str = JSON.stringify(this.loc);
        localStorage.setItem("init",str)
       
    }
    
})

new fn()