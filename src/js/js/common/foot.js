function Footer(ele){
    this.ele= ele;
    this.init();
}
Footer.temp =` <div class="footer-left">
<ul>
    <li>新手指南</li>
    <li><a href="##">注册用户</a></li>
    <li><a href="##">网站订购流程</a></li>
    <li><a href="##">会员特享政策</a></li>
</ul>
<ul>
    <li>如何退款</li>
    <li><a href="##">如何付款/退款</a></li>
    <li><a href="##">常见支付问题</a></li>
</ul>
<ul>
    <li>配送方法</li>
    <li><a href="##">款到快递范围及配送时间</a></li>
    <li><a href="##">货到付款范围及配送时间</a></li>
    <li><a href="##">货到付款范围及配送时间</a></li>
</ul>
<ul>
    <li>售后服务 </li>
    <li><a href="##">退换货政策</a> </li>
    <li><a href="##">如何办理退换货</a> </li>
    <li><a href="##">隐私声明</a> </li>
</ul>
<ul>
    <li>关于全棉</li>
    <li><a href="##">Purcotton 介绍</a></li>
    <li><a href="##">全棉店铺</a></li>
</ul>
</div>
<p class="bq"></p>
<div class="footer-right">
<ul>
    <li>
        <img src="../img/ewm1.jpg" alt="">
        <p>下载全棉<span>App</span>有惊喜</p>
    </li>
    <li>
        <img src="../img/ewm2.jpg" alt="">
        <p>关注全棉<span>微信公众号</span></p>
    </li>
</ul>
</div>
<div class="footer-bottom-left">
<div class="footer-bottom-list">
    <a href="##">关于我们</a>
    <a href="##">联系我们</a>
    <a href="##">诚聘英才</a>
    <a href="##">合作专区</a>
</div>
<p>粤ICP备13084779号-2 Copyright ©2002-2018 深圳全棉时代科技有限公司 版权所有</p>
</div>
<div class="footer-bottom-right">
<p>客服中心</p>
<p>400-608-1000</p>
<p>服务时间：8:30 ~ 20:30</p>
</div>`;
$.extend(Footer.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        this.element = $("<div></div").append(Footer.temp);
        this.ele.append(this.element);
    }
})