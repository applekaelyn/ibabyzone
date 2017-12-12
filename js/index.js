$(function(){
	
	//获取服务列表
	req.getServiceList(addList);
	
	//获取服务列表之后填充
	function addList(data){
		data.forEach(function(item, index){
			var content = '';
			var $item = $("<div class=\"list-item\"></div>");
			$item.append($("<div class=\"list-left\"><img src=\"" + item.photo + "\"/></div>"));
			content += "<div class=\"content\">";
			content += "<div class=\"content-top\"><p class=\"title\">" + item.name + "</p><span class=\"icon icon-star\"></span><span class=\"address\">" + item.address + "</span><span class=\"type\">>" + item.address + "</span></div>";
			content += "<div class=\"content-bottom\"><div>";
			item.preferential.forEach(function(i){
				content += "<img src=\"" + i + "\" />";
			})
			content += "</div></div>";
			$item.append(content);
			$(".list").append($item);
		})
	}
	
	//显示返回顶部按钮
	$(window).scroll(function(){
　　		var scrollTop = $(this).scrollTop();
	　　	if(scrollTop > 760){
			$(".top").show();
	　　	}else{
			$(".top").hide();
		}
	});
	
	
	//点击返回顶部
	$(".top").click(function(){
		$('body,html').animate({scrollTop:0},300);
	});
	
	//点击查看更多服务列表
	$(".loadMore").click(function(){
		window.location.href = "serviceList.html"
	})
	
	//跳转到详情页面
	$(".list").on("click", ".list-item", function(){
		window.location.href = "detail.html";
	})
})
