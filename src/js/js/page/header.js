function fn() {
  this.head = $(".header_wapper");
}
$.extend(fn.prototype, {
  init: function() {
    this.createDom();
  },
  createDom: function() {
    this.header = new Headers(this.head);
  }
});

var f1 = new fn();
f1.init();


