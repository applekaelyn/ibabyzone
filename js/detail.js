$(function(){
	//切换模块
	$(".module div").click(function(){
		var currName = $(".active").find("p").text();
		var name = $(this).find("p").text();
		if (currName === name) return ;
		$("article").fadeOut("fast");
		$(".active").removeClass("active");
		if(name === "内容"){
			$(".module-content").addClass("active");
			$(".content-page").fadeIn("fast");
		}else if(name === "详情"){
			$(".module-detail").addClass("active");
			$(".detail-page").fadeIn("fast");
		}else{
			$(".module-comment").addClass("active");
			$(".comment-page").fadeIn("fast");
		}
	})
	
	//获取评论
	req.getComment(addList);
	
	//填充评论
	function addList(data){
		data.forEach(function(item, index){
			console.log(item);
			var html = '';
			html += "<div class=\"comment-item\"><div class=\"profile\"><img src=\"" + item.profile + "\"/></div><div class=\"comment-content\"><div class=\"comment-top\"><div class=\"name\"><p>" + item.name + "</p><span class=\"icon icon-threeStar\"></span></div><div class=\"icon icon-follow\"></div></div><div class=\"comment-bottom\"><p>" + item.comment + "</p><div class=\"comment-footer\"><p class=\"time\">" + item.time + "</p><p class=\"thumbUp\">" + item.thumbUp + "人点赞</p></div></div></div></div>";
			$(".comment-page").append(html);
		})
	}
	
	//显示返回顶部按钮
	$(window).scroll(function(){
　　		var scrollTop = $(this).scrollTop();
	　　	if(scrollTop > 100){
			$(".top").show();
	　　	}else{
			$(".top").hide();
		}
	});
	
	//点击返回顶部
	$(".top").click(function(){
		$('body,html').animate({scrollTop:0},300);
	});
	
	//跳转到详情页面
	$(".shops-bottom").on("click", ".shops-item", function(){
		window.location.href = "detail.html";
	})
	
	
})
