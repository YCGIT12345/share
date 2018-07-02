function fn(){
    this.skip();
 }
 $.extend(fn.prototype,{
     init:function(){
         this.cut();
         this.box();
         this.mov();
         this.out();
         this.num();  
     },
     //选项卡
     cut:function(){
         $(".olist>ul>li>img").mouseover(function(){
             var url = $(this).attr('src');
             $(".bigphoto>img").attr("src",url)
             $(".magnifying>img").attr("src",url)
         })
     },  
     //放大镜
     box:function(){
         $(".bigphoto").mouseover(function(){
             $(".magnifying").css("display","block");
             $(".box").css("display","block");
         })
     },
     mov:function(){
         $(".bigphoto").mousemove(function(e){
             
             var l = e.pageX -$(this).offset().left-$(".box").width()/2;
             var t = e.pageY -$(this).offset().top - $(".box").height()/2;
     
             if(l<0){
                 l=0
             }
             if(t<0){
                 t=0
             }
             if(l>=$(this).width()-$(".box").width()){
                 l=$(this).width()-$(".box").width()
             }
             if(t>=$(this).height()-$(".box").height()){
                 t=$(this).height()-$(".box").height()
             }
             
             $(".box").css({
                 'left':l,
                 'top':t
             })

             $(".magnifying>img").css({
                 'left':-2*l,
                 'top':-2*t
             })
         })
     },
     out:function(){
         $(".bigphoto").mouseout(function(){
             $(".magnifying").css("display","none");
             $(".box").css("display","none");
         })
     },
     //数量加减
     num:function(){
         $(".add").click(function(){
             var num = $("#number").val();
             num++;
             $("#number").val(num);
         })
         $(".minus").click(function(){
             var num = $("#number").val();
             if(num<=1){
                 num=1;
             }else{
                 num--;
                 $("#number").val(num);
             }
         })
     },
     //判断id引用json
     skip:function(){
         var num = location.href.split("?")[1];
         var str="";
         var _this =this;
         $.get("../json/details.json",{},function(data){
             for(var i in data){
                if(data[i].id == num){
                    str+=`<div class="olist">
                    <ul>
                        <li><img src="${data[i].img1}" ></li>
                        <li><img src="${data[i].img2}" ></li>
                        <li><img src="${data[i].img3}" ></li>
                        <li><img src="${data[i].img4}" ></li>
                        <li><img src="${data[i].img5}" ></li>
                    </ul>
                </div> 
                <div class="bigphoto">
                    <img src="${data[i].img1}">
                    <div class="box"></div>
                </div>
                <div class="magnifying"><img src="${data[i].img1}" width="1000px" height="1000px">
                </div> 
                
                <div class="introduce">

                     <div class="introduce-top">
                        <h2>${data[i].title}</h2>
                        <p>${data[i].pro}</p>
                    </div>
                    <div class="introduce-num">
                        <div class="line">
                            <p class="line-left">
                                价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp格:
                            </p>
                            <div class="line-price"><span>${data[i].price}</span></div>
                        </div>
                        <div class="line">
                            <p class="line-left">
                                活动价格:
                            </p>
                            <div class="line-vip"><span>${data[i].vip}</span></div>
                        </div>
                        <div class="line">
                            <p class="line-left">
                                选择颜色:
                            </p>
                            <div class="line-color"><span>${data[i].color}</span></div>
                        </div>
                        <div class="line">
                            <p class="line-left">
                                选择尺码:
                            </p>
                            <div class="line-size"><span>${data[i].size[1]}</span>
                                <span>${data[i].size[2]}</span><span>${data[i].size[3]}</span>
                            </div>
                        </div>
                        <div class="line">
                            <p class="line-left">
                                选择数量:
                            </p>
                            <div class="line-num">
                                <span class="add">+</span>
                                <input type="text" id="number" value="1">
                                <span class="minus">-</span>
                            </div>
                        </div>
                    </div> 
                    <div class="addshop">
                            <button>加入购物车</button>    
                            <a href="##"><i class="iconfont icon-guanzhu"></i>加入关注</a>
                            <a href="##"><i class="iconfont icon-tongxun"></i>联系客服</a>
                    </div>
                </div>`
                     $(".commodity").html(str)
                }
             }
             _this.init()
         }) 
     },
     
 })
 
 new fn();