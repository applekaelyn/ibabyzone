$(function(){
//	$(".prov").bind({
//      "mouseenter":function(){
//          $(this).find("ul").show()
//      },
//      "mouseleave":function(){
//          $(this).find("ul").hide()
//      },
//      "click":function(event){
//          if (event.target.tagName == "LI") {
//                  $(this).find("input").val($(event.target).text()); //传具体的文字
//          //        $(this).find("input").val($(event.target).attr("data-value"));  传属性值
//          }
//          $(this).find("ul").hide();
//      }
//  })
	
	//筛选
	$(".prov, .city, .classification").click(function(){
		$(".nav>div>ul").addClass("hide").hide();
		$(this).find("ul").removeClass("hide").show();
		var $that = $(this);
		$(this).find("ul").on("click", "li", function(event){
			event.stopPropagation();
			$(".nav>div>ul").addClass("hide").hide();
			$that.find("p").text($(this).text());
		})
	});
	
	
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
	
	//跳转到详情页面
	$(".list-item").click(function(){
		window.location.href = "detail.html";
	})
})
