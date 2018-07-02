function Show() {
    this.init();
}
$.extend(Show.prototype,{
    init: function() {
    var main = document.querySelector(".main");
    $.ajax({
        type: "get",
        url: "http://localhost/php/jquery/src/json/home.json",
        dataType:'json',
        success: function (data) {
            var str3 ="";
            for (var key in data) {
                var str = "";
                var str1 = "";
                for (var i = 1; i < data[key].length; i++) {
                    // alert(data[key][i].img)
                    str += `<li class="list-id" data-id="${data[key][i].id}">
                <a href="##"><img src="${data[key][i].img}" ></a>
                <div class="booth-price">
                    <p>${data[key][i].name}</p>
                    <span>${data[key][i].vip}</span>
                    <span>${data[key][i].priec}</span>
                </div>
            </li>`
                }
                str1 = `<div class="booth-right">
                <ul>${str}</ul>`;
                var str2 = "";
                str2 += `<div class="booth content">
                <div class="booth-top">
                <h2>${data[key][0].name}</h2>
                <a href="##">查看全部 ></a>
                </div>
                 <div class="booth-list">
                 <div class="booth-left">
                <a href="##"><img src="${data[key][0].img}" alt=""></a>
                </div>${str1}</div></div>`
                str3 += str2;
            }
               
               $(".main").html(str3)
            
            
            $(".list-id").click(function(){
               var id = $(this).attr("data-id");
               location.href = "http://localhost/php/jquery/src/html/details.html?"+id;
            })
        }
    });
   
}
        
})


new Show()
