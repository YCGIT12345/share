function Show(){
    this.obox = $(".zsum")
    this.init();

    this.ochecked = $(".che");
}

$.extend(Show.prototype,{
    init:function(){
        $.ajax({
            type:"get",
            url:"http://localhost/tea/src/js/js/common/det.json",
            dataType:"json",
            data:{},
            success:$.proxy(this.add,this)
        })
    },
    add:function(data){
        var data  = data.data;
         if(localStorage.getItem("init")){
            var obj = JSON.parse(localStorage.getItem("init"));
            var str="";
            for(var i in obj){  
                for(var k in data){
                    if(i == data[k].id){
                        str+=`<div class="pro">
                        <p style="float: left;margin: 33px 40px 0 29px">
                            <input type="checkbox" name="xbtn" class="xz">
                        </p>
                        <p class="img" >
                            <a href="http://www.hecha.cn/sgoods-5588.html" target="_blank">
                                <img src="${data[k].img02}">
                            </a>
                        </p>
                        <p class="txt02" style="width:220px">
                            <a href="http://www.hecha.cn/sgoods-5588.html" target="_blank">${data[k].class}</a>
                        </p>
                        <p class="mpri">
                            <del>${data[k].youhui}</del>
                            <strong>${data[k].price}</strong>
                        </p>
                        <p class="mpri02">
                            <strong>${data[k].natur}</strong>
                            <small class="zk">3.4折折</small>
                        </p>
                        <p class="sunm">
                            <input id="txteebdf371-3dbe-4051-bd57-43ce167649d7" style="text-align:center" name="goodsnum" value="${obj[i]}" type="text">
                            <i class="goods_add">+</i>
                            <i class="goods_min">-</i>
                        </p>
                        <p class="pri02">
                            <strong class="zz">${data[k].price*obj[i]}</strong>
                        </p>
                        <p class="st01">
                            <span class="del01">删除</span>
                        </p>
                    </div>`
                    }
                    
                }
            }

            this.obox.before(str);
        }

        // 进行计算

        this.do();
    },
    do:function(){
        //增加数量
        $(".goods_add").on({
            click:$.proxy(this.addshop,this)
        });
        //减少数量
        $(".goods_min").on({
            click:$.proxy(this.reduceshop,this)
        });
        //选择框
        $(".xz").on({
            click:$.proxy(this.confirm,this)
        })
        //全选反选
        this.ochecked.on({
            click:$.proxy(this.sec,this)
        })
    },
    sec:function(){
        this.ochecked.attr("checked");
        if(this.ochecked.prop("checked")){
            $(".xz").attr("checked",true)
        }else{
            $(".xz").attr("checked",false)
        }
    },
    addshop:function(e){
        var e = $(e.target);
        var num = e.prev().val();
        num++;
        //数量值改变
        e.prev().val(num);
        //获取单价
        var pri = e.parent().prev().prev().find("strong").text();
        //单个商品总价改变
        e.parent().next().find("strong").text(num*pri);
    },
    reduceshop:function(e){
        var e = $(e.target);
        var num = e.prev().prev().val();
        if(num>=2){
            num--;
        }
        //数量值改变
        e.prev().prev().val(num);
        //获取单价
        var pri = e.parent().prev().prev().find("strong").text();
        //单个商品总价改变
        e.parent().next().find("strong").text(num*pri);
    },
    confirm:function(e){
        //判断价格
        var e  = $(e.target);
        e.attr("checked");
        if(e.prop("checked")){
            var num = e.parent().parent().find(".zz").text();
            var osum = $(".pe").text();
            var sm = Number(num)+Number(osum)
            $(".pe").text(sm);
            //判断选取状态

            var temp = true;
            for(var i = 0;i<$(".xz").length;i++){
                if(!$(".xz").eq(i).prop("checked")){
                    temp = false;
                }
            }
            if(temp){
                this.ochecked.attr("checked",true);
            }else{
                this.ochecked.attr("checked",false);
            }
            

        }else{
            var num = e.parent().parent().find(".zz").text();
            var osum = $(".pe").text();
            var sm = Number(osum)-Number(num)
            $(".pe").text(sm);
        }
        
        
    }
})


new Show()
