function fn(){
    this.foot =$(".footer");
}
$.extend(fn.prototype,{
    init:function(){
        this.createDom()
    },
    createDom:function(){
        this.ele = new Footer(this.foot)
    }
})

var f1 = new fn();
f1.init()