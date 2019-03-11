//jquery
;
$(function(){
//drop_down
	$(".drop_down").click(function(){
		$(".dropdown_list").toggle();
		$(".dropdown_btn").toggleClass("dropdown_btn_click")
		});
	$(".pull_down").click(function(){
		$(".pulldown_list").toggle();
		})
		
//comment_list
	$(".hidden_btn").click(function(){
		$(this).parents(".comment_header").siblings(".comment_con").toggle(500);
		})
	
})

//个人首页菜单切换
/*
	$(function () {
    var oDiv = document.getElementById("todo_panel");
    var oLi = oDiv.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var aCon = oDiv.getElementsByTagName("ul")[1].getElementsByTagName("li");
    var timer = null;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function() {
            show(this.index);
        }
    }
    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.display = "";
        }
        oLi[index].className = "selected";
        clearInterval(timer);
        timer = setInterval(function() {
            aCon[index].style.display = "block";
        },
        5)
    }
})
*/

//通知弹框切换
$(function () {
    var oDiv = document.getElementById("notice-tab");
    var oLi = oDiv.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var aCon = oDiv.getElementsByTagName("ul")[1].getElementsByTagName("li");
    var timer = null;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function () {
            show(this.index);
        }
    }
    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.display = "";
        }
        oLi[index].className = "selected";
        clearInterval(timer);
        timer = setInterval(function () {
            aCon[index].style.display = "block";
        },
            5)
    }
})


//打开弹框
$(function(){
    $(".open-notice-popup").click(function(){
        $(".notice-popup").show();
    })
})