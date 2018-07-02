function Headers(ele){
    this.ele = ele;
    this.init();
}
Headers.temp =` <div class="header-top">
<div class="header-cont content" >
    <p>医学贴近生活，全棉呵护健康 </p>
    <div class="login">
        <span >
            <a href="##" data-toggle="modal" data-target="#loginModel" id="dl">登陆</a>
            <a href="##" data-toggle="modal" data-target="#registerModel">注册</a>
        </span>
        <span>|</span>
        <a href="##">客服服务</a>
    </div>

</div>
</div> 
<!-- 导航 -->
<div class="nav_wapper">
<div class="nav content">
<div class="logo">
    <a href="##"><img src="../img/logo2-3.png" height="20px" width="160px"></a>
</div>

<div class="list">
    <ul>
        <li><a href="home.html">首页</a></li>
        <li><a href="##">新品</a></li>
        <li><a href="list.html">婴童</a>
        <div class="two-nav">
            <a href="list.html">婴童床品</a>
            <a href="list.html">婴童服饰</a>   
            <a href="list.html">婴童服装(0-1岁)</a>   
            <a href="list.html">婴童服装(1-4岁)</a>   
            <a href="list.html">婴童服装(4岁以上)</a>   
            <a href="list.html">婴童护理</a>   
            <a href="list.html">婴童卫浴</a>  
        </div>
        </li>
        <li><a href="list.html">女士</a>
        <div class="two-nav">
            <a href="##">女士服装服饰</a>
            <a href="##">美容用品</a>   
            <a href="##">美容用品</a>   
            <a href="##">孕产用品</a>   
        </div>
        </li>
        <li><a href="list.html">家居</a>
        <div class="two-nav">
                <a href="##">厨房用品</a>
                <a href="##">床上用品</a>   
                <a href="##">护理用品</a>   
                <a href="##">旅游户外</a> 
                <a href="##">收纳用品</a>   
                <a href="##">卫浴用品</a> 
                <a href="##">其它</a>     
        </div>
        </li>
        <li><a href="list.html">男士</a>
            <div class="two-nav">
                    <a href="##">男士服装服饰</a>
                    <a href="##">男士卫生用品</a>      
            </div>
        
        </li>
        <li>|</li>
        <li><a href="##">棉·自然·人 </a></li>
        <li><a href="##">全棉店铺</a></li>
        <li><a href="##">全棉社区</a></li>
    </ul>
</div>
<div class="shop">
    <input type="text" id="" placeholder="搜索棉巾试试">
   <a href="##"><i class="iconfont icon-sousuo"></i></a>
   <a href="shop.html" class="sp"><i class="iconfont icon-gouwuche"></i></a>
   
</div>
</div>

<div class="modal fade" id="registerModel" tabindex="-1" role="dialog" aria-labelledby="registerModel">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">填写注册信息</h4>
    </div>
    <div class="modal-body">
    <form>
    <div class="form-group">
      <label for="register_user">用户名</label>
      <input type="text" class="form-control" id="register_user" placeholder="请输入用户名">
    </div>
    <div class="form-group">
      <label for="register_pasw">密码</label>
      <input type="text" class="form-control" id="register_pasw" placeholder="请输入密码">
    </div>
   
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" id="regBtn">注册</button>
    </div>
  </div>
</div>
</div>

<div class="modal fade" id="loginModel" tabindex="-1" role="dialog" aria-labelledby="loginModel">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">请输入账号密码</h4>
    </div>
    <div class="modal-body">
    <form>
    <div class="form-group">
      <label for="login_user">用户名</label>
      <input type="text" class="form-control" id="login_user" placeholder="请输入用户名">
    </div>
    <div class="form-group">
      <label for="login_pasw">密码</label>
      <input type="password" class="form-control" id="login_pasw" placeholder="请输入密码">
    </div>
   
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" id="loginBtn">登陆</button>
    </div>
  </div>
</div>
</div>

</div>`;

$.extend(Headers.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.element = $("<div></div>").append(Headers.temp)
        this.ele.append(this.element);
        //二级导航
        this.twoNav();
        //注册登录
        this.reglog();
    },
    twoNav:function(){
      $(".list>ul>li").on({
        mouseover:$.proxy(this.xs)
      })
      $(".two-nav").on({
        mouseout:$.proxy(this.qc)
      })
    },
    xs:function(){
     $(this).find(".two-nav").show()
      $(this).siblings().find(".two-nav").hide()

    },
    qc:function(){
      $(this).hide()
    },
    reglog:function(){
      //注册
      $("#regBtn").on({
        click:$.proxy(this.register,this)
      })
      //登陆
      $("#loginBtn").on({
        click:$.proxy(this.login,this)
      })
    },
    register:function(){
     var regVal = $("#register_user").val();
     var regPsw = $("#register_pasw").val();
     $.ajax({
        type:"get",
        url:"http://localhost/php/jquery/src/php/register.php",
        dataType:"json",
        data:{
          qname : regVal,
          qpsw : regPsw,
        },
        success:$.proxy(this.zc,this)
     })
    },
    zc:function(data){
      if(data.status == 1){
        alert("注册成功")
        //location.href = "http://localhost/tea/demo01.html";
      }else{
          alert("注册失败")
      }
    },
    login:function(){
      //登陆
      var loginVal = $("#login_user").val();
      var loginPsw = $("#login_pasw").val();
     // console.log(loginVal,loginPsw)
      $.ajax({
        type:"get",
        url:"http://localhost/php/jquery/src/php/login.php",
        dataType:"json",
        data:{
          qname : loginVal,
          qpsw : loginPsw,
        },
        success:$.proxy(this.dl,this)
     })
    },
    dl:function(data){
      console.log(data)
      if(data.status == 1){
        alert("登陆成功")
        $("#dl").text(data.names)         
      }else if(data.status == 2){
          alert("密码错误")
      }else{
          alert("用户名不存在")
      }
    }
   
})