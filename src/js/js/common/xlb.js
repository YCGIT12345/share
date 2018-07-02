var banner = {
    aLi:$(".FontScroll>ul>li"),
    next:0,
    iNow:0,
    init:function(){
        this.autoplay();
    },
    autoplay:function(){
        setInterval($.proxy(this.handleAuto,this),3000)
    },
    toImg:function(){
        this.aLi.eq(this.iNow).fadeTo(500,0);
        this.aLi.eq(this.next).fadeTo(500,1);
        this.iNow = this.next;
    },
    handleAuto:function(){
       
        if(this.next>this.aLi.length-2){
            this.next = 0;
        }else{
           this.next ++;
        }
        this.toImg();
    }
}
banner.init();